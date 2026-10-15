"use client";
import Image from "next/image";
import { motion } from "framer-motion";
export default function AboutPhoto() {
  return (
    <motion.div initial={{ opacity: 0, scale: 0.8, rotate: -6 }} whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative mx-auto w-64 md:w-full">
      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
        className="absolute -inset-2 rounded-[2rem] bg-[conic-gradient(from_0deg,#7c3aed,#22c55e,#06b6d4,#7c3aed)] opacity-70 blur-md" />
      <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} whileHover={{ scale: 1.04 }} className="relative">
        <Image src="/husnain.jpg" alt="Husnain Ali" width={640} height={800} priority
          className="aspect-[4/5] w-full rounded-3xl border border-line object-cover object-top" />
      </motion.div>
    </motion.div>
  );
}
