"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { education, type Edu } from "@/lib/data";
function Pic({ e }: { e: Edu }) {
  const [ok, setOk] = useState(true);
  return (
    <div className={`relative h-44 overflow-hidden bg-gradient-to-br ${e.color} md:h-full md:min-h-[12rem]`}>
      {ok ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={e.image} alt={e.name} onError={() => setOk(false)} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
      ) : (
        <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="grid h-full place-items-center text-7xl">{e.emoji}</motion.div>
      )}
      <span className="absolute left-3 top-3 rounded-full bg-black/50 px-3 py-1 text-xs font-bold backdrop-blur">{e.emoji} {e.level}</span>
    </div>
  );
}
export default function Education() {
  return (
    <div className="relative space-y-10 pl-10 md:pl-14">
      <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute bottom-2 left-[11px] top-2 w-0.5 origin-top bg-gradient-to-b from-violet-500 via-green-500 to-cyan-400" />
      {education.map((e, i) => (
        <motion.div key={e.name} className="relative" initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.3 }}
            className="absolute -left-10 top-6 grid h-6 w-6 place-items-center rounded-full bg-bg ring-2 ring-green-500 md:-left-14">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          </motion.span>
          <motion.article whileHover={{ y: -6 }} className="card group overflow-hidden !p-0 md:grid md:grid-cols-[260px_1fr]">
            <Pic e={e} />
            <div className="flex flex-col justify-center gap-3 p-5 sm:p-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-mute">{e.detail}</span>
              <h3 className="text-xl font-extrabold sm:text-2xl">{e.name}</h3>
              <motion.div initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                className="flex flex-wrap items-baseline gap-2">
                <span className="grad-text text-3xl font-extrabold">{e.result}</span>
                {e.outOf && <span className="text-sm text-mute">{e.outOf}</span>}
              </motion.div>
              {e.score && (
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-bg">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${e.score}%` }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 via-green-500 to-cyan-400" />
                </div>
              )}
            </div>
          </motion.article>
        </motion.div>
      ))}
    </div>
  );
}
