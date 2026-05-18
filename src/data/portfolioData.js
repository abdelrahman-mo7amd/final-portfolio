// ─────────────────────────────────────────────────────────────────────────────
// portfolioData.js
// Central data file — edit your content here, components read from this file.
// ─────────────────────────────────────────────────────────────────────────────

export const HERO_ROLES = [
  "Data Analyst",
  "Python Developer",
  "Power BI Engineer",
  "ML Enthusiast",
  "Problem Solver",
];

export const HERO_STATS = [
  { value: "2+", label: "Years Exp." },
  { value: "IBM", label: "Internship" },
  { value: "4th", label: "Google Challenge" },
  { value: "5", label: "National Awards" },
];

export const EXPERIENCE = [
  {
    company: "IBM",
    role: "Data Analyst Intern",
    period: "Feb 2024 – Jun 2024",
    color: "#2563eb",
    bullets: [
      "Cleaned and preprocessed large datasets using Python and Excel.",
      "Performed EDA to uncover trends leading to actionable business insights.",
      "Built interactive dashboards in Excel and Power BI for stakeholders.",
      "Authored analytical reports with findings and strategic recommendations.",
    ],
  },
  {
    company: "ALX Africa",
    role: "Data Science Trainee",
    period: "May 2023 – Aug 2024",
    color: "#7c3aed",
    bullets: [
      "16-month intensive program covering Python, SQL, statistics, and machine learning.",
      "Built real-world projects with pandas, numpy, plotly, and scikit-learn.",
      "Delivered data stories via visual dashboards and written reports.",
      "Collaborated using Git/GitHub and agile team workflows.",
    ],
  },
  {
    company: "Digital Egypt Cubs Initiative",
    role: "Web Development Trainee",
    period: "Oct 2022 – Present",
    color: "#0891b2",
    bullets: [
      "Full-stack training: HTML, CSS, JavaScript, TypeScript, Node.js, Express.",
      "Mastered OOP, async JS (Promises, async/await), and unit testing with Jasmine.",
      "Practiced clean code standards and technical documentation (README).",
    ],
  },
];

export const SKILLS = {
  "Programming": [
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "R", level: 65 },
    { name: "JavaScript", level: 72 },
    { name: "TypeScript", level: 60 },
  ],
  "Data & Analytics": [
    { name: "Pandas / NumPy", level: 88 },
    { name: "Power BI", level: 80 },
    { name: "Scikit-learn", level: 75 },
    { name: "Plotly / Matplotlib", level: 82 },
    { name: "Excel (Advanced)", level: 85 },
  ],
  "Web & Tools": [
    { name: "Node.js / Express", level: 65 },
    { name: "Git / GitHub", level: 80 },
    { name: "Jupyter Notebooks", level: 90 },
    { name: "MySQL", level: 75 },
  ],
};

export const CERTIFICATIONS = [
  { name: "Google Certified Data Analyst", org: "Google",    abbr: "Go", color: "#2563eb" },
  { name: "ALX Data Science Graduate",     org: "ALX Africa", abbr: "AL", color: "#7c3aed" },
  { name: "Intro to AI",                   org: "IBM",        abbr: "IB", color: "#0891b2" },
  { name: "ML on AWS",                     org: "Amazon",     abbr: "AW", color: "#d97706" },
  { name: "Front-End Development",         org: "Meta",       abbr: "Me", color: "#0284c7" },
  { name: "Python – Intermediate",         org: "Microsoft",  abbr: "MS", color: "#16a34a" },
];

export const ACHIEVEMENTS = [
  { rank: "4th Place",         event: "Google Solution Challenge Egypt",  year: "2024", icon: "🏆" },
  { rank: "National Champion", event: "KenKen Mathematics Competition",   year: "2018", icon: "🥇" },
  { rank: "6th Globally",      event: "KenKen International Competition", year: "2018", icon: "🌍" },
  { rank: "National Champion", event: "UCMAS Math Competition",           year: "2019", icon: "🥇" },
  { rank: "1st Place",         event: "Egyptian Talents – Technology Dept.", year: "–", icon: "🎖️" },
];

export const LEADERSHIP = [
  {
    role: "Event Organizer",
    org: "ALX Fusion Job Fair",
    period: "Dec 2024",
    icon: "🎪",
    desc: "Co-led a large-scale virtual & physical job fair connecting 1,200+ attendees with 25+ hiring companies over 3 days of keynotes and networking.",
  },
  {
    role: "Event Support & Media",
    org: "ALX Ventures Demo Day",
    period: "Dec 2024",
    icon: "🎬",
    desc: "Supported a startup demo event featuring top entrepreneurs and investors; produced professional video content and social media coverage.",
  },
  {
    role: "Technical & Event Coordinator",
    org: "TopCareer Maker Series",
    period: "Jul 2025 – Present",
    icon: "🎙️",
    desc: "Co-organizing career events with industry leaders; leads full hybrid AV/livestream setup including camera, mics, Zoom, and real-time screen sharing.",
  },
];

export const CONTACT_INFO = [
  {
    icon: "📞",
    label: "Phone",
    value: "+201119727579",
    sub: "Call or WhatsApp",
    href: "tel:+201119727579",
    copyable: false,
  },
  {
    icon: "✉️",
    label: "Email",
    value: "amohamed.dataanalyst@gmail.com",
    sub: "Click to copy",
    href: null,
    copyable: true,
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    sub: "linkedin.com/in/abdelrahman",
    href: "https://linkedin.com",
    copyable: false,
  },
  {
    icon: "📍",
    label: "Location",
    value: "Cairo, Egypt",
    sub: "Open to remote & relocation",
    href: null,
    copyable: false,
  },
];

export const NAV_IDS = [
  "home",
  "experience",
  "skills",
  "achievements",
  "leadership",
  "contact",
];

export const education = [
  {
    school: "STEM High School for Boys – 6th of October",
    degree: "STEM Secondary Certificate",
    period: "2025 – Present",
    status: "In Progress",
    grade: "Grade 10",
    gpa: 3.87,
    maxGpa: 4.0,
    color: "#2563eb",
    description:
      "Studying in Egypt's elite STEM system at a higher academic level than standard Thanaweya Amma, with a curriculum focused on science, technology, engineering, and mathematics.",
    highlights: [
      "Completed 2 Capstone Projects in Grade 10 — each involving identifying a grand national problem, brainstorming and engineering a solution, building a small testable prototype, and collecting & analyzing real results.",
      "Authored 2 full research papers in Grade 10.",
      "Curriculum covers advanced STEM subjects at a depth beyond the standard national secondary system.",
    ],
  },
  {
    school: "El-Shahid Mohamed Mahmoud Abd El-Aziz Official Language School",
    degree: "Primary & Preparatory Certificate",
    period: "– 2025",
    status: "Completed",
    grade: "Prep 3 Graduate",
    gpa: 4.0,
    maxGpa: 4.0,
    color: "#7c3aed",
    description:
      "Completed both primary and preparatory stages at an official language school, graduating with a perfect GPA.",
    highlights: [
      "Graduated Prep 3 with a perfect GPA of 4.0 / 4.0.",
      "Studied in an official language school environment with instruction in English across core subjects.",
    ],
  },
];