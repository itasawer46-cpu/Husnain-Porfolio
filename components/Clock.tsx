"use client";
import { useEffect, useState } from "react";
import { info } from "@/lib/data";
export default function Clock({ className = "" }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    setNow(new Date());
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const time = now ? now.toLocaleTimeString("en-US", { timeZone: info.timeZone, hour: "2-digit", minute: "2-digit", second: "2-digit" }) : "--:--:--";
  const date = now ? now.toLocaleDateString("en-GB", { timeZone: info.timeZone, weekday: "short", day: "numeric", month: "short", year: "numeric" }) : "";
  return (
    <span className={className}>
      🕒 <b className="tabular-nums">{time}</b> <span className="text-mute">· {date}</span>
    </span>
  );
}
