"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { contact, gmailLink, waLink } from "@/lib/data";
export default function ContactCards() {
  const [copied, setCopied] = useState("");
  const copy = async (label: string, text: string) => {
    try { await navigator.clipboard.writeText(text); setCopied(label); setTimeout(() => setCopied(""), 2000); } catch {}
  };
  const items = [
    { label: "Email", icon: "📧", val: contact.email, href: gmailLink(), ext: true, copy: contact.email, hint: "Opens Gmail" },
    { label: "WhatsApp", icon: "💬", val: contact.phoneShow, href: waLink(), ext: true, copy: contact.phone, hint: "Opens WhatsApp chat" },
    { label: "Call", icon: "📞", val: contact.phoneShow, href: `tel:${contact.phone}`, ext: false, copy: contact.phone, hint: "Tap to call" },
  ];
  return (
    <>
      {items.map(i => (
        <div key={i.label} className="relative">
          <a href={i.href} target={i.ext ? "_blank" : undefined} rel="noopener noreferrer"
            className="card flex items-center gap-4 !p-4 pr-20 transition hover:translate-x-2 active:scale-95">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-green-500 text-2xl">{i.icon}</span>
            <span className="min-w-0"><small className="block text-mute">{i.label} · {i.hint}</small><b className="block break-all">{i.val}</b></span>
          </a>
          <motion.button type="button" whileTap={{ scale: 0.9 }} onClick={() => copy(i.label, i.copy)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg border border-line bg-bg px-3 py-1.5 text-xs font-semibold hover:border-green-500">
            {copied === i.label ? "Copied ✓" : "Copy"}
          </motion.button>
        </div>
      ))}
    </>
  );
}
