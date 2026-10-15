"use client";
import { motion } from "framer-motion";
export default function WordReveal({ text, className = "" }: { text: string; className?: string }) {
  return (
    <p className={className}>
      {text.split(" ").map((w, i) => (
        <motion.span key={i} className="mr-1.5 inline-block" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: i * 0.025, duration: 0.5 }}>{w}</motion.span>
      ))}
    </p>
  );
}
