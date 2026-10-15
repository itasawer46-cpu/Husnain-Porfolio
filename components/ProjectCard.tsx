"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Project } from "@/lib/data";

export default function ProjectCard({ p, i }: { p: Project; i: number }) {
  const mediaRef = useRef<HTMLDivElement>(null);
  // Video plays only while at least 60% of the media area is visible.
  const inView = useInView(mediaRef, { amount: 0.6 });
  const isLive = p.link !== "#";

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.1 }} whileHover={{ y: -10 }}
      className="card group flex flex-col overflow-hidden !p-0"
    >
      <div ref={mediaRef} className={`relative aspect-video overflow-hidden bg-gradient-to-br ${p.grad}`}>
        {p.video ? (
          inView ? (
            <>
              <iframe
                src={`https://www.youtube.com/embed/${p.video}?autoplay=1&mute=1&loop=1&playlist=${p.video}&playsinline=1&rel=0&modestbranding=1`}
                title={`${p.title} demo video`}
                allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 bg-black"
              />
              <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-green-400">● Playing</span>
            </>
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://i.ytimg.com/vi/${p.video}/hqdefault.jpg`} alt={`${p.title} preview`} loading="lazy" className="h-full w-full object-cover" />
              <span className="absolute inset-0 grid place-items-center bg-black/30 text-5xl">▶</span>
            </>
          )
        ) : (
          <div className="grid h-full place-items-center text-6xl transition-transform duration-500 group-hover:scale-110">{p.emoji}</div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold">{p.title}</h3>
        <p className="mt-1 text-sm text-mute">{p.desc}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {p.tech.map(t => <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-mute">{t}</span>)}
        </div>
        <div className="mt-auto flex flex-wrap items-center gap-3 pt-5">
          {isLive ? (
            <motion.a href={p.link} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.93 }}
              className="btn btn-p !px-5 !py-2 text-sm">View Live →</motion.a>
          ) : (
            <span className="rounded-full border border-line px-4 py-2 text-xs font-semibold text-mute">🚧 Coming soon</span>
          )}
          {p.video && (
            <motion.a href={`https://www.youtube.com/watch?v=${p.video}`} target="_blank" rel="noopener noreferrer" whileHover={{ x: 4 }} whileTap={{ scale: 0.92 }}
              className="text-sm font-semibold text-green-400">▶ Watch on YouTube</motion.a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
