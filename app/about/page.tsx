import Reveal from "@/components/Reveal";
import TechStack from "@/components/TechStack";
import AboutPhoto from "@/components/AboutPhoto";
import WordReveal from "@/components/WordReveal";
import Counter from "@/components/Counter";
import Education from "@/components/Education";
import { info } from "@/lib/data";
export const metadata = { title: "About | Husnain Ali" };
const stats = [{ to: 7, suffix: "+", label: "Projects" }, { to: 11, suffix: "", label: "Technologies" }, { to: 3.77, decimals: 2, suffix: "", label: "CGPA" }];
const facts = [`📍 ${info.location}`, `🎓 ${info.university}`, "💻 Full Stack Developer", "🚀 Always learning"];
export default function About() {
  return (
    <div className="sec pt-28">
      <Reveal><h1 className="text-center text-4xl font-extrabold sm:text-5xl">About <span className="grad-text">Me</span></h1></Reveal>
      <div className="mt-12 grid items-center gap-10 md:grid-cols-[320px_1fr]">
        <AboutPhoto />
        <Reveal x={50} y={0}>
          <div className="card space-y-4 text-mute">
            <WordReveal text="Hi, I'm Husnain Ali, a passionate Full Stack Developer. I turn ideas into clean, responsive and animated websites that people enjoy using." />
            <WordReveal text="I work on the whole stack: designing interfaces with Tailwind and Next.js, building REST APIs with Node.js and Express, and storing data in MongoDB and SQL." />
            <div className="flex flex-wrap gap-2 pt-1">
              {facts.map((f, i) => (
                <Reveal key={f} delay={0.3 + i * 0.1} y={20}>
                  <span className="inline-block cursor-default rounded-full border border-line bg-bg px-3 py-1.5 text-xs font-semibold text-white transition hover:-translate-y-1 hover:border-green-500">{f}</span>
                </Reveal>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-3 pt-3 text-center">
              {stats.map(s => (
                <div key={s.label} className="rounded-xl border border-line bg-bg p-3 transition hover:-translate-y-1 hover:border-violet-500">
                  <div className="grad-text text-3xl font-extrabold"><Counter to={s.to} decimals={s.decimals} suffix={s.suffix} /></div>
                  <div className="text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
      <Reveal><h2 className="mb-2 mt-20 text-center text-3xl font-extrabold">My <span className="grad-text">Education</span></h2>
        <p className="mb-10 text-center text-mute">My academic journey so far</p></Reveal>
      <Education />
      <Reveal><h2 className="mb-8 mt-20 text-center text-3xl font-extrabold">Skills & <span className="grad-text">Technologies</span></h2></Reveal>
      <TechStack />
    </div>
  );
}
