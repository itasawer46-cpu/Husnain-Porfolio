"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { contact, gmailLink, waLink } from "@/lib/data";
type Status = "idle" | "sending" | "success" | "error";
export default function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const inp = "w-full rounded-xl border border-line bg-bg px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-4 focus:ring-violet-500/20";
  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${contact.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: f.name, email: f.email, message: f.message,
          _subject: `New portfolio message from ${f.name}`, _template: "table", _captcha: "false",
        }),
      });
      const data = await res.json();
      if (res.ok && (data.success === true || data.success === "true")) {
        setStatus("success");
        setF({ name: "", email: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };
  const viaWhatsApp = () => {
    if (!f.message.trim()) return;
    window.open(waLink(`Hi Husnain, I'm ${f.name || "a visitor"}. ${f.message}`), "_blank", "noopener");
  };
  return (
    <form onSubmit={submit} className="card space-y-4">
      <input required placeholder="Your Name" className={inp} value={f.name} onChange={e => setF({ ...f, name: e.target.value })} />
      <input required type="email" placeholder="Your Email" className={inp} value={f.email} onChange={e => setF({ ...f, email: e.target.value })} />
      <textarea required rows={5} placeholder="Your Message" className={inp} value={f.message} onChange={e => setF({ ...f, message: e.target.value })} />
      <motion.button disabled={status === "sending"} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }} className="btn btn-p w-full disabled:opacity-60">
        {status === "sending" ? "Sending..." : "Send Message ✈️"}
      </motion.button>
      <motion.button type="button" onClick={viaWhatsApp} disabled={!f.message.trim()} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}
        className="btn btn-s w-full disabled:cursor-not-allowed disabled:opacity-50">💬 Send via WhatsApp instead</motion.button>
      <AnimatePresence>
        {status === "success" && (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="rounded-xl border border-green-500/40 bg-green-500/10 p-3 text-sm text-green-400">✅ Message sent! I&apos;ll get back to you soon.</motion.p>
        )}
        {status === "error" && (
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
            className="rounded-xl border border-red-500/40 bg-red-500/10 p-3 text-sm text-red-300">
            ⚠️ Couldn&apos;t send right now. Please{" "}
            <a className="underline" href={gmailLink()} target="_blank" rel="noopener noreferrer">email me directly</a> or{" "}
            <a className="underline" href={waLink()} target="_blank" rel="noopener noreferrer">message me on WhatsApp</a>.
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
