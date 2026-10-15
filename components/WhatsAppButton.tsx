"use client";
import { motion } from "framer-motion";
import { waLink } from "@/lib/data";
export default function WhatsAppButton() {
  return (
    <motion.a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp"
      initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.12, rotate: 8 }} whileTap={{ scale: 0.9 }}
      className="fixed bottom-5 left-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-green-500 text-3xl shadow-lg shadow-green-500/40">
      <span className="absolute inset-0 animate-ping rounded-full bg-green-500/30" />
      <span className="relative">💬</span>
    </motion.a>
  );
}
