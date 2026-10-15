"use client";
import { motion } from "framer-motion";
import { stack, groupInfo } from "@/lib/data";
export default function StackSection({ index }: { index: number }) {
  const g = stack[index];
  const gi = groupInfo[index];
  const flip = index % 2 === 1;
  return (
    <section className="sec !py-10 sm:!py-14">
      <div className={`grid items-center gap-8 md:grid-cols-2 ${flip ? "md:[&>*:first-child]:order-2" : ""}`}>
        <motion.div initial={{ opacity: 0, x: flip ? 60 : -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }}>
          <span className={`grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${g.color} text-3xl shadow-lg`}>{g.emoji}</span>
          <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl"><span className="grad-text">{g.title}</span></h2>
          <p className="mt-3 max-w-md text-mute">{gi.desc}</p>
          <ul className="mt-4 space-y-2">
            {gi.points.map((p, i) => (
              <motion.li key={p} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 + i * 0.1 }} className="flex items-center gap-2 text-sm font-semibold">
                <span className="text-emerald-400">✔</span>{p}
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <div className="card grid grid-cols-2 gap-3 sm:grid-cols-3">
          {g.items.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, scale: 0.6 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }} whileHover={{ y: -8, rotate: -3, scale: 1.08 }} whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center gap-2 rounded-xl border border-line bg-bg p-4 text-center hover:border-violet-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={t.logo} alt={t.name} width={48} height={48} loading="lazy" className={`h-12 w-12 ${t.invert ? "invert" : ""}`} />
              <span className="text-sm font-semibold">{t.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
