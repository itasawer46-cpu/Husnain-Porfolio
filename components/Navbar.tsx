"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
const links = [["Home", "/"], ["About", "/about"], ["Projects", "/projects"], ["Contact", "/contact"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const { scrollYProgress } = useScroll();
  const w = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  useEffect(() => setOpen(false), [path]);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <motion.div style={{ scaleX: w }} className="absolute left-0 top-0 h-[3px] w-full origin-left bg-gradient-to-r from-violet-500 via-green-500 to-cyan-400" />
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <Link href="/" className="text-xl font-extrabold">Husnain<span className="grad-text">.dev</span></Link>
        <ul className="hidden gap-1 md:flex">
          {links.map(([n, h]) => (
            <li key={h}><Link href={h} className="relative block rounded-full px-4 py-2 text-sm font-semibold text-mute transition-colors hover:text-white">
              {path === h && <motion.span layoutId="pill" className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-600 to-green-500" />}
              <span className={path === h ? "text-white" : ""}>{n}</span></Link></li>
          ))}
        </ul>
        <button aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-lg border border-line md:hidden">
          <motion.span animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="h-0.5 w-5 bg-white" />
          <motion.span animate={{ opacity: open ? 0 : 1 }} className="h-0.5 w-5 bg-white" />
          <motion.span animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="h-0.5 w-5 bg-white" />
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-line bg-bg md:hidden">
            {links.map(([n, h], i) => (
              <motion.li key={h} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.06 }}>
                <Link href={h} className={`block px-6 py-4 text-lg font-semibold ${path === h ? "grad-text" : "text-mute"}`}>{n}</Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
}
