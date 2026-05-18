import { useTheme } from "../context/ThemeContext";
import { useTyping } from "../hooks/hooks";
import { Reveal } from "./ui";
import { HERO_ROLES, HERO_STATS } from "../data/portfolioData";
import { useEffect, useRef } from "react";

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/* ─── Fluid Mesh Canvas ───────────────────────────────────────── */
function MeshCanvas({ dark }) {
  const canvasRef = useRef(null);
  const S = useRef({ mx: 0.5, my: 0.5, tx: 0.5, ty: 0.5, t: 0, raf: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const s = S.current;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width  = canvas.offsetWidth  * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      const r = canvas.getBoundingClientRect();
      s.tx = (e.clientX - r.left) / r.width;
      s.ty = (e.clientY - r.top)  / r.height;
    };
    window.addEventListener("mousemove", onMove);

    const COLS = 5, ROWS = 4;
    const nodes = Array.from({ length: (COLS + 1) * (ROWS + 1) }, () => ({
      ox: (Math.random() - 0.5) * 0.07,
      oy: (Math.random() - 0.5) * 0.07,
      ph: Math.random() * Math.PI * 2,
      sp: 0.003 + Math.random() * 0.003,
    }));

    const darkPal  = [[8,14,44],[18,10,50],[4,26,52],[12,8,36],[6,20,48],[22,14,58]];
    const lightPal = [[232,238,255],[238,234,255],[224,242,255],[245,242,255],[228,236,255],[240,246,255]];
    const lerp = (a, b, t) => a + (b - a) * t;

    const getP = (col, row, w, h) => {
      const n = nodes[row * (COLS + 1) + col];
      return {
        x: (col / COLS + n.ox * Math.sin(s.t * n.sp + n.ph)) * w,
        y: (row / ROWS + n.oy * Math.cos(s.t * n.sp * 0.7 + n.ph)) * h,
      };
    };

    const draw = () => {
      s.t++;
      s.mx = lerp(s.mx, s.tx, 0.035);
      s.my = lerp(s.my, s.ty, 0.035);

      const w = canvas.offsetWidth, h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);
      const pal = dark ? darkPal : lightPal;

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const tl = getP(col,   row,   w, h);
          const tr = getP(col+1, row,   w, h);
          const bl = getP(col,   row+1, w, h);
          const br = getP(col+1, row+1, w, h);

          const cx = (tl.x+tr.x+bl.x+br.x)/4/w;
          const cy = (tl.y+tr.y+bl.y+br.y)/4/h;
          const dx = cx - s.mx, dy = cy - s.my;
          const inf = Math.max(0, 1 - Math.sqrt(dx*dx+dy*dy)*2.5);

          const i0 = (row*COLS+col) % pal.length;
          const i1 = (i0+3) % pal.length;
          const mix = (Math.sin(s.t*0.006 + col*0.8 + row*1.2)+1)*0.5;
          const p0 = pal[i0], p1 = pal[i1];
          const r = Math.round(lerp(p0[0],p1[0],mix+inf*0.25));
          const g = Math.round(lerp(p0[1],p1[1],mix+inf*0.25));
          const b = Math.round(lerp(p0[2],p1[2],mix+inf*0.25));
          const a = dark ? lerp(0.6,0.92,inf) : lerp(0.7,0.98,inf);

          const mx01=(tl.x+tr.x)/2, my01=(tl.y+tr.y)/2;
          const mx13=(tr.x+br.x)/2, my13=(tr.y+br.y)/2;
          const mx23=(bl.x+br.x)/2, my23=(bl.y+br.y)/2;
          const mx02=(tl.x+bl.x)/2, my02=(tl.y+bl.y)/2;

          ctx.beginPath();
          ctx.moveTo(mx01,my01);
          ctx.quadraticCurveTo(tr.x,tr.y,mx13,my13);
          ctx.quadraticCurveTo(br.x,br.y,mx23,my23);
          ctx.quadraticCurveTo(bl.x,bl.y,mx02,my02);
          ctx.quadraticCurveTo(tl.x,tl.y,mx01,my01);
          ctx.closePath();
          ctx.fillStyle = `rgba(${r},${g},${b},${a})`;
          ctx.fill();
        }
      }

      const vig = ctx.createRadialGradient(w*.5,h*.45,h*.05,w*.5,h*.45,h*.95);
      if (dark) {
        vig.addColorStop(0,"rgba(0,0,0,0)");
        vig.addColorStop(0.6,"rgba(0,0,0,0.25)");
        vig.addColorStop(1,"rgba(0,0,0,0.80)");
      } else {
        vig.addColorStop(0,"rgba(247,249,255,0)");
        vig.addColorStop(1,"rgba(247,249,255,0.62)");
      }
      ctx.fillStyle = vig;
      ctx.fillRect(0,0,w,h);

      s.raf = requestAnimationFrame(draw);
    };

    s.raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(s.raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [dark]);

  return (
    <canvas ref={canvasRef} style={{
      position:"absolute",inset:0,width:"100%",height:"100%",
      pointerEvents:"none",zIndex:0,
    }} />
  );
}

function Grain({ dark }) {
  return (
    <div style={{
      position:"absolute",inset:0,zIndex:1,pointerEvents:"none",
      opacity: dark ? 0.04 : 0.025,
      backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)'/%3E%3C/svg%3E")`,
      backgroundSize:"200px 200px",
    }} />
  );
}

function Hero() {
  const { dark } = useTheme();
  const typedText = useTyping(HERO_ROLES);

  const accent      = dark ? "#818cf8" : "#2563eb";
  const textPrimary = dark ? "rgba(255,255,255,0.92)" : "#0f172a";
  const textMuted   = dark ? "rgba(255,255,255,0.38)" : "rgba(15,23,42,0.45)";
  const borderSubtle= dark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.09)";
  const glassBg     = dark ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.72)";

  /* ── Shimmer gradient string — rebuilt on every dark toggle ── */
  const shimmerGrad = dark
    ? "linear-gradient(115deg, #c7d2fe 0%, #818cf8 45%, #a5b4fc 100%)"
    : "linear-gradient(115deg, #1e40af 0%, #2563eb 45%, #4f46e5 100%)";

  return (
    <section id="home" style={{
      minHeight:"100vh", position:"relative",
      display:"flex", alignItems:"center",
      overflow:"hidden", paddingTop:80,
      background: dark ? "#030712" : "#f7f9ff",
      transition:"background 0.5s",
    }}>
      <style>{`
        @keyframes blink   { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulse   { 0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,0.45)} 60%{box-shadow:0 0 0 5px rgba(34,197,94,0)} }
        .h-btn-primary:hover { opacity:.82 !important; transform:translateY(-1px) !important; }
        .h-btn-ghost:hover   { transform:translateY(-1px) !important;
          border-color:${dark?"rgba(129,140,248,0.35)":"rgba(37,99,235,0.3)"} !important;
          color:${accent} !important; }
        .h-stat:hover        { transform:translateY(-2px);
          background:${dark?"rgba(255,255,255,0.07)":"rgba(255,255,255,0.92)"} !important; }
      `}</style>

      <MeshCanvas dark={dark} />
      <Grain dark={dark} />

      {[0.28,0.72].map((x,i) => (
        <div key={i} style={{
          position:"absolute",top:0,bottom:0,left:`${x*100}%`,
          width:"0.5px",background:dark?"rgba(255,255,255,0.03)":"rgba(0,0,0,0.03)",
          pointerEvents:"none",zIndex:1,
        }} />
      ))}

      <div style={{
        position:"relative",zIndex:2,
        padding:"60px 48px",maxWidth:1000,margin:"0 auto",width:"100%",
      }}>

        {/* Badge */}
        <Reveal>
          <div style={{
            display:"inline-flex",alignItems:"center",gap:8,
            background:glassBg,backdropFilter:"blur(20px)",WebkitBackdropFilter:"blur(20px)",
            border:`1px solid ${borderSubtle}`,borderRadius:99,
            padding:"5px 16px 5px 9px",marginBottom:40,cursor:"default",
            transition:"border-color .3s",
          }}>
            <span style={{
              width:7,height:7,borderRadius:"50%",background:"#22c55e",
              display:"inline-block",animation:"pulse 2.5s ease infinite",
            }} />
            <span style={{
              fontSize:11,fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase",
              color:textMuted,fontFamily:"'Inter',sans-serif",
            }}>Available for work</span>
          </div>
        </Reveal>

        {/* Name */}
        <Reveal delay={0.06}>
          <h1 style={{
            fontFamily:"'Poppins',sans-serif",fontWeight:800,
            fontSize:"clamp(44px,6.5vw,80px)",lineHeight:1.02,
            marginBottom:16,letterSpacing:"-0.03em",
            color:textPrimary,
          }}>
            Abdelrahman
            <br />
            {/* FIX: key forces React to remount the span on theme toggle,
                clearing stale -webkit-text-fill-color from the previous render */}
            <span
              key={dark ? "dark-name" : "light-name"}
              style={{
                background: shimmerGrad,
                backgroundSize:"200% auto",
                WebkitBackgroundClip:"text",
                WebkitTextFillColor:"transparent",
                backgroundClip:"text",
                display:"inline-block",
                animation:"shimmer 7s linear infinite",
              }}
            >
              Abd El-Hafez
            </span>
          </h1>
        </Reveal>

        {/* Role */}
        <Reveal delay={0.13}>
          <div style={{
            fontSize:"clamp(14px,1.8vw,18px)",fontFamily:"'Inter',sans-serif",
            fontWeight:400,color:textMuted,marginBottom:22,minHeight:30,
            letterSpacing:"0.005em",
          }}>
            I work as a{" "}
            <span style={{color:accent,fontWeight:600}}>{typedText}</span>
            <span style={{
              display:"inline-block",width:1.5,height:"1em",
              background:accent,marginLeft:2,verticalAlign:"text-bottom",
              animation:"blink 1s step-end infinite",
            }} />
          </div>
        </Reveal>

        {/* Bio */}
        <Reveal delay={0.19}>
          <p style={{
            fontSize:14,lineHeight:2,color:textMuted,
            maxWidth:460,marginBottom:44,
            fontFamily:"'Inter',sans-serif",fontWeight:400,letterSpacing:"0.01em",
          }}>
            Data Analyst with 2+ years turning raw data into clear decisions —
            Python, Power BI, and machine learning deployed where they matter most.
          </p>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.24}>
          <div style={{display:"flex",gap:10,flexWrap:"wrap",marginBottom:56}}>
            <button className="h-btn-primary" onClick={()=>scrollTo("contact")} style={{
              padding:"11px 28px",borderRadius:8,border:"none",cursor:"pointer",
              background:dark?"linear-gradient(135deg,#4338ca,#818cf8)":"linear-gradient(135deg,#1d4ed8,#2563eb)",
              color:"#fff",fontSize:13,fontWeight:600,
              fontFamily:"'Inter',sans-serif",letterSpacing:"0.02em",
              transition:"opacity .2s,transform .2s",
            }}>Get in touch</button>
            <button className="h-btn-ghost" onClick={()=>scrollTo("experience")} style={{
              padding:"11px 28px",borderRadius:8,cursor:"pointer",
              border:`1px solid ${borderSubtle}`,background:glassBg,
              backdropFilter:"blur(12px)",color:textMuted,
              fontSize:13,fontWeight:500,
              fontFamily:"'Inter',sans-serif",letterSpacing:"0.02em",
              transition:"border-color .2s,color .2s,transform .2s",
            }}>View experience ↗</button>
          </div>
        </Reveal>

        {/* Separator */}
        <Reveal delay={0.27}>
          <div style={{
            width:"100%",maxWidth:460,height:"0.5px",marginBottom:32,
            background:dark?"rgba(255,255,255,0.07)":"rgba(15,23,42,0.07)",
          }} />
        </Reveal>

        {/* Stats */}
        <Reveal delay={0.32}>
          <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
            {HERO_STATS.map((stat) => (
              <div key={stat.label} className="h-stat" style={{
                padding:"14px 22px",borderRadius:10,
                border:`1px solid ${borderSubtle}`,background:glassBg,
                backdropFilter:"blur(16px)",WebkitBackdropFilter:"blur(16px)",
                transition:"transform .25s,background .25s",cursor:"default",
              }}>
                <div style={{
                  fontSize:24,fontWeight:700,fontFamily:"'Poppins',sans-serif",
                  color:textPrimary,letterSpacing:"-0.025em",lineHeight:1.1,
                }}>{stat.value}</div>
                <div style={{
                  fontSize:10,fontWeight:600,letterSpacing:"0.08em",
                  textTransform:"uppercase",color:textMuted,
                  fontFamily:"'Inter',sans-serif",marginTop:4,
                }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;