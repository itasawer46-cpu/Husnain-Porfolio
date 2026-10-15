"use client";
import { motion } from "framer-motion";
import { stack } from "@/lib/data";
import Reveal from "./Reveal";
export default function TechStack() {
  return (
    <div className="space-y-6">
      {stack.map((g, gi) => (
        <Reveal key={g.title} delay={gi * 0.1}>
          <div className="card">
            <h3 className="mb-5 flex items-center gap-3 text-xl font-bold">
              <span className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${g.color}`}>{g.emoji}</span>{g.title}
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {g.items.map((t, i) => (
                <motion.div key={t.name} initial={{ opacity: 0, scale: 0.7 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: i * 0.06, type: "spring", stiffness: 200 }} whileHover={{ y: -6, rotate: -2, scale: 1.06 }} whileTap={{ scale: 0.92 }}
                  className="flex items-center gap-3 rounded-xl border border-line bg-bg p-3 hover:border-violet-500">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={t.logo} alt={t.name} width={36} height={36} loading="lazy" className={`h-9 w-9 shrink-0 ${t.invert ? "invert" : ""}`} />
                  <span className="text-sm font-semibold">{t.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
