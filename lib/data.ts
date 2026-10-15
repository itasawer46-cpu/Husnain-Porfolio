const d = (n: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}.svg`;
export type Tech = { name: string; logo: string; invert?: boolean };
export const stack: { title: string; emoji: string; color: string; items: Tech[] }[] = [
  { title: "Frontend", emoji: "🎨", color: "from-violet-600 to-green-500", items: [
    { name: "HTML5", logo: d("html5/html5-original") },
    { name: "CSS3", logo: d("css3/css3-original") },
    { name: "JavaScript", logo: d("javascript/javascript-original") },
    { name: "TypeScript", logo: d("typescript/typescript-original") },
    { name: "Tailwind CSS", logo: d("tailwindcss/tailwindcss-original") },
    { name: "Bootstrap", logo: d("bootstrap/bootstrap-original") },
    { name: "Next.js", logo: d("nextjs/nextjs-original"), invert: true },
  ]},
  { title: "Backend", emoji: "⚙️", color: "from-cyan-500 to-violet-600", items: [
    { name: "Node.js", logo: d("nodejs/nodejs-original") },
    { name: "Express.js", logo: d("express/express-original"), invert: true },
  ]},
  { title: "Database", emoji: "🗄️", color: "from-emerald-500 to-cyan-500", items: [
    { name: "MongoDB", logo: d("mongodb/mongodb-original") },
    { name: "SQL (MySQL)", logo: d("mysql/mysql-original") },
  ]},
];
export type Project = { title: string; desc: string; tech: string[]; link: string; video?: string; emoji: string; grad: string };
// To add a project: copy one block, set `link` (live URL) and `video` (YouTube video ID). link "#" shows "Coming soon".
export const projects: Project[] = [
  { title: "My Portfolio", desc: "This is my amazing portfolio website.", tech: ["HTML", "Tailwind CSS", "Next.js", "Bootstrap"], link: "https://husnain-porfolio-live.vercel.app", video: "kxxeBpz5kZ4", emoji: "💼", grad: "from-violet-600 to-green-500" },
  { title: "Khayyan Memorial Portal", desc: "A website dedicated to the memories of Khayyan, honoring the people of Khayyan who have passed away.", tech: ["HTML", "CSS", "JavaScript", "React.js", "MongoDB"], link: "https://khayyan-portal-frontend.vercel.app/", video: "ZEwz8vOJKYM", emoji: "🕊️", grad: "from-cyan-500 to-violet-600" },
  { title: "Hotel Management System", desc: "Specially designed for a hostel student mess system.", tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "MongoDB"], link: "https://food-paradise-nine.vercel.app/", video: "opihE2tk-QI", emoji: "🍽️", grad: "from-amber-400 to-green-500" },
  { title: "Iron Paradise Gym", desc: "A gym website designed to motivate visitors and encourage them to join the gym.", tech: ["HTML", "CSS", "JavaScript", "MongoDB"], link: "https://iron-paradise-gym-smoky.vercel.app", video: "LG93SBcPEnM", emoji: "🏋️", grad: "from-lime-500 to-cyan-500" },
  { title: "E-Commerce Store", desc: "Full online store with cart, auth and admin panel. Coming soon.", tech: ["Next.js", "MongoDB", "Tailwind"], link: "#", emoji: "🛒", grad: "from-violet-600 to-green-500" },
  { title: "Blog Platform", desc: "Markdown blog with categories, search and comments. Coming soon.", tech: ["Next.js", "TypeScript"], link: "#", emoji: "📰", grad: "from-emerald-500 to-cyan-500" },
  { title: "Admin Dashboard", desc: "Charts, tables and analytics for business data. Coming soon.", tech: ["TypeScript", "Tailwind", "Node.js"], link: "#", emoji: "📊", grad: "from-lime-500 to-violet-600" },
];
export const contact = {
  email: "alihassan455440831@gmail.com",
  phoneShow: "0348 9266448",
  phone: "+923489266448",
  whatsapp: "https://wa.me/923489266448",
};
export const info = {
  location: "Mandi Bahauddin, Khayyan, Pakistan",
  university: "University of Gujrat",
  status: "Student",
  timeZone: "Asia/Karachi",
};
export const groupInfo = [
  { desc: "Responsive, fast and animated interfaces that look great on every screen, from mobile to desktop.", points: ["Pixel-perfect UI", "Smooth animations", "Mobile-first design"] },
  { desc: "Secure and scalable server-side logic: REST APIs, authentication and business logic.", points: ["REST APIs", "Authentication", "Clean architecture"] },
  { desc: "Reliable data storage with both NoSQL and SQL databases, designed for speed and structure.", points: ["Schema design", "CRUD & queries", "NoSQL + SQL"] },
];
export const waLink = (text = "Hello Husnain, I found your portfolio and I'd like to talk.") =>
  `https://wa.me/923489266448?text=${encodeURIComponent(text)}`;
export const gmailLink = (subject = "Hello Husnain") =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${encodeURIComponent(subject)}`;
export type Edu = { level: string; emoji: string; name: string; detail: string; result: string; outOf?: string; score?: number; color: string; image: string };
// Put your own photos in public/education/ (school.jpg, college.jpg, university.jpg)
export const education: Edu[] = [
  { level: "School", emoji: "🏫", name: "Mustafai Science Model School", detail: "Secondary School", result: "Grade A+", color: "from-violet-600 to-cyan-500", image: "/education/school.jpg" },
  { level: "College", emoji: "📚", name: "Punjab College Phalia", detail: "Intermediate", result: "Grade A+", color: "from-green-500 to-cyan-500", image: "/education/college.jpg" },
  { level: "University", emoji: "🎓", name: "University of Gujrat", detail: "Currently studying", result: "CGPA 3.77", outOf: "out of 4.00", score: 93.25, color: "from-violet-600 to-green-500", image: "/education/university.jpg" },
];
