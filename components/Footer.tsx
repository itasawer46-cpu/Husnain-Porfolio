import Link from "next/link";
import Reveal from "./Reveal";
import Clock from "./Clock";
import { contact, info, gmailLink, waLink } from "@/lib/data";
const links = [["Home", "/"], ["About", "/about"], ["Projects", "/projects"], ["Contact", "/contact"]];
export default function Footer() {
  return (
    <footer className="border-t border-line bg-card/40">
      <Reveal className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <Link href="/" className="text-2xl font-extrabold">Husnain<span className="grad-text">.dev</span></Link>
          <p className="mt-3 max-w-sm text-sm text-mute">Full Stack Developer building fast, modern and animated web apps with Next.js, Node.js and MongoDB.</p>
          <p className="mt-4 text-sm">🎓 <b>{info.status}</b> at <b className="grad-text">{info.university}</b></p>
          <p className="mt-1 text-sm text-mute">📍 {info.location}</p>
          <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />Available for freelance work
          </span>
        </div>
        <div>
          <h4 className="mb-4 font-bold">Quick Links</h4>
          <ul className="space-y-2 text-sm text-mute">
            {links.map(([n, h]) => <li key={h}><Link href={h} className="inline-block transition hover:translate-x-1 hover:text-white">→ {n}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-bold">Contact</h4>
          <ul className="space-y-2 text-sm text-mute">
            <li><a href={gmailLink()} target="_blank" rel="noopener noreferrer" className="break-all transition hover:text-white">📧 {contact.email}</a></li>
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">💬 WhatsApp: {contact.phoneShow}</a></li>
            <li><a href={`tel:${contact.phone}`} className="transition hover:text-white">📞 {contact.phoneShow}</a></li>
          </ul>
        </div>
      </Reveal>
      <div className="border-t border-line px-5 py-5">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-xs text-mute sm:flex-row">
          <p>© {new Date().getFullYear()} <b className="text-white">Husnain Ali</b>. All rights reserved.</p>
          <Clock />
          <p>Made with ❤️ in Pakistan 🇵🇰</p>
        </div>
      </div>
    </footer>
  );
}
