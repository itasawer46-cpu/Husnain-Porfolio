import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
export const metadata: Metadata = { title: "Husnain Ali | Full Stack Developer", description: "Portfolio of Husnain Ali: Next.js, Node.js, MongoDB developer." };
export const viewport = { width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-80 w-80 animate-pulse rounded-full bg-violet-600/25 blur-[90px]" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 animate-pulse rounded-full bg-cyan-500/20 blur-[90px]" />
        <div className="absolute left-1/2 top-1/2 h-60 w-60 animate-pulse rounded-full bg-green-500/15 blur-[90px]" />
      </div>
      <Navbar /><main className="min-h-screen">{children}</main><Footer /><WhatsAppButton />
    </body></html>
  );
}
