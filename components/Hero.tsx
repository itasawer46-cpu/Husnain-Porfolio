"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Clock from "./Clock";
import { info } from "@/lib/data";
const roles = ["Full Stack Developer", "Next.js Developer", "Node.js Backend Dev", "UI Animation Lover"];
export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI(v => (v + 1) % roles.length), 2200); return () => clearInterval(t); }, []);
  return (
    <section className="sec grid min-h-screen items-center gap-10 pt-28 md:grid-cols-[1.2fr_1fr]">
      <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="order-2 text-center md:order-1 md:text-left">
        <span className="inline-block rounded-full border border-line bg-card px-4 py-1.5 text-sm text-mute">👋 Hello, I&apos;m</span>
        <h1 className="mt-4 text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl"><span className="grad-text">Husnain Ali</span></h1>
        <div className="mt-3 h-9 overflow-hidden text-xl font-bold sm:text-2xl">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -30, opacity: 0 }} transition={{ duration: 0.35 }}>{roles[i]}</motion.div>
          </AnimatePresence>
        </div>
        <p className="mx-auto mt-4 max-w-lg text-mute md:mx-0">I build fast, modern and beautiful web apps with Next.js, Node.js and MongoDB, from clean UI to powerful backend.</p>
        <div className="mt-5 flex flex-col items-center gap-2 text-sm md:items-start">
          <span className="rounded-full border border-line bg-card px-4 py-1.5">📍 {info.location}</span>
          <span className="rounded-full border border-line bg-card px-4 py-1.5"><Clock /></span>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
          <motion.div whileHover={{ y: -4, scale: 1.05 }} whileTap={{ scale: 0.93 }}><Link href="/projects" className="btn btn-p">🚀 View Projects</Link></motion.div>
          <motion.div whileHover={{ y: -4, scale: 1.05 }} whileTap={{ scale: 0.93 }}><Link href="/contact" className="btn btn-s">✉️ Contact Me</Link></motion.div>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="order-1 flex justify-center md:order-2">
        <motion.div animate={{ y: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} whileHover={{ scale: 1.04, rotate: -1 }}
          className="relative aspect-[4/5] w-64 rounded-[32px] bg-gradient-to-br from-violet-500 via-green-500 to-cyan-400 p-1 shadow-2xl shadow-violet-600/40 sm:w-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/husnain.jpg" alt="Husnain Ali" className="h-full w-full rounded-[28px] object-cover object-top" />
        </motion.div>
      </motion.div>
    </section>
  );
}
