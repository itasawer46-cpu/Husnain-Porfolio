"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
export default function Reveal({ children, delay = 0, x = 0, y = 40, className = "" }:
  { children: ReactNode; delay?: number; x?: number; y?: number; className?: string }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, x, y }} whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.7, delay, ease: "easeOut" }}>
      {children}
    </motion.div>
  );
}
