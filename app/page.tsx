import Link from "next/link";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import StackSection from "@/components/StackSection";
import ProjectCard from "@/components/ProjectCard";
import { projects, info } from "@/lib/data";
const strip = [["📍", "Location", info.location], ["🎓", "Education", `${info.status}, ${info.university}`], ["💼", "Status", "Open for freelance"]];
export default function Home() {
  return (
    <>
      <Hero />
      <section className="sec !py-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {strip.map(([i, l, v], k) => (
            <Reveal key={l} delay={k * 0.1}>
              <div className="card flex items-center gap-4 !p-4 hover:-translate-y-1">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-green-500 text-2xl">{i}</span>
                <span className="min-w-0"><small className="block text-mute">{l}</small><b className="block text-sm">{v}</b></span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <Reveal><h2 className="mt-14 text-center text-3xl font-extrabold sm:text-4xl">My <span className="grad-text">Tech Stack</span></h2></Reveal>
      <StackSection index={0} />
      <StackSection index={1} />
      <StackSection index={2} />
      <section className="sec">
        <Reveal><h2 className="text-center text-3xl font-extrabold sm:text-4xl">Featured <span className="grad-text">Projects</span></h2></Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{projects.slice(0, 3).map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}</div>
        <Reveal className="mt-10 text-center"><Link href="/projects" className="btn btn-p">See All Projects →</Link></Reveal>
      </section>
      <section className="sec !pt-0">
        <Reveal>
          <div className="rounded-3xl border border-line bg-gradient-to-br from-violet-600/20 via-green-500/10 to-cyan-500/20 p-8 text-center sm:p-12">
            <h2 className="text-2xl font-extrabold sm:text-4xl">Let&apos;s build something <span className="grad-text">amazing</span> together</h2>
            <p className="mx-auto mt-3 max-w-xl text-mute">Have a project or an idea? Get in touch and I&apos;ll help you bring it to life.</p>
            <Link href="/contact" className="btn btn-p mt-6">✉️ Contact Me</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
