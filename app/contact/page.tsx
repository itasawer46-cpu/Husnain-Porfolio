import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import ContactCards from "@/components/ContactCards";
export const metadata = { title: "Contact | Husnain Ali" };
export default function Contact() {
  return (
    <div className="sec pt-28">
      <Reveal><h1 className="text-center text-4xl font-extrabold sm:text-5xl">Get In <span className="grad-text">Touch</span></h1>
        <p className="mt-3 text-center text-mute">Have a project or an idea? Feel free to reach out!</p></Reveal>
      <div className="mt-12 grid gap-8 md:grid-cols-[1fr_1.2fr]">
        <Reveal x={-50} y={0} className="space-y-4"><ContactCards /></Reveal>
        <Reveal x={50} y={0}><ContactForm /></Reveal>
      </div>
    </div>
  );
}
