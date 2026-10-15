import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
export const metadata = { title: "Projects | Husnain Ali" };
export default function Projects() {
  return (
    <div className="sec pt-28">
      <Reveal><h1 className="text-center text-4xl font-extrabold sm:text-5xl">My <span className="grad-text">Projects</span></h1>
        <p className="mt-3 text-center text-mute">A selection of things I&apos;ve built</p></Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{projects.map((p, i) => <ProjectCard key={p.title} p={p} i={i} />)}</div>
    </div>
  );
}
