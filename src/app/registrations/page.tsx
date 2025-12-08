"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconHome,
  IconTerminal2,
  IconPhoneCall,
  IconBrandGithub,
} from "@tabler/icons-react";
import useLenis from "@/lib/useLenis";
import { FloatingDock } from "@/components/ui/floating-dock";

export default function RegistrationsPage() {
  useLenis({ lerp: 0.07 });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Register",
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/registrations",
    },
    {
      title: "Contact Us",
      icon: <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "GitHub",
      icon: <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/0day-Ashish/HerCode26",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitted(true);
    setName("");
    setEmail("");
    setNotes("");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
      <div className="fixed top-90 left-3 z-40 flex flex-col items-start md:top-52 md:left-10">
                  <FloatingDock mobileClassName="translate-y-20" items={links} />
                </div>
      {/* Logo added like the home page */}
      <div className="w-full flex justify-start mb-6">
        <Link href="/" aria-label="Home">
          <Image src="/logo1.png" alt="HerCode'26" width={260} height={58} priority />
        </Link>
      </div>

      <div className="w-full max-w-xl bg-white/6 backdrop-blur-sm border border-white/10 rounded-xl p-6 kanit">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-white rubiks tracking-widest">Register for HerCode'26</h1>
          <p className="text-sm text-white/80 mt-1">Fill in your details to join.</p>
        </header>

        {submitted ? (
          <div className="p-6 bg-green-600/20 border border-green-600/30 rounded-md text-white">
            <p className="font-medium">Thank you — your registration was received.</p>
            <p className="text-sm mt-2">We will contact you at your email soon.</p>
            <div className="mt-4">
              <Link href="/" className="text-sm underline text-white/90">
                Back to home
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-sm text-red-400">{error}</div>}

            <div>
              <label className="block text-sm text-white/90 mb-1">Full name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-md px-3 py-2 bg-white/5 text-white outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-white/90 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md px-3 py-2 bg-white/5 text-white outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-white/90 mb-1">Notes (optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-md px-3 py-2 bg-white/5 text-white outline-none focus:ring-2 focus:ring-pink-400"
                placeholder="Any remarks or questions..."
                rows={4}
              />
            </div>

            <div className="flex items-center gap-3">
              <button
                type="submit"
                className="px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md"
              >
                Submit
              </button>
              <Link href="/" className="text-sm text-white/80 underline">
                Cancel
              </Link>
            </div>
          </form>
        )}
        
      </div>
      
      {/* Footer added below */}
      <footer className="w-full border-t border-white/5 py-6 mt-18">
        <div className="max-w-5xl mx-auto px-6 text-center text-white/80">
          <p className="text-sm kanit font-bold">&copy; {new Date().getFullYear()} HerCode'26 — All rights reserved.</p>
          <div className="mt-3 flex items-center justify-center kanit font-bold  gap-4">
            <Link href="/privacy" className="text-sm underline">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm underline">
              Terms & Conditions
            </Link>
          </div>
          <div className="mt-3 flex items-center justify-center gap-6 mb-3">
            <a
              href="https://discord.gg/8PNRVMPa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="text-white/80 hover:text-white"
            >
              <IconBrandDiscord className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white/80 hover:text-white"
            >
              <IconBrandTwitter className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/YOUR_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/80 hover:text-white"
            >
              <IconBrandInstagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/YOUR_COMPANY"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white/80 hover:text-white"
            >
              <IconBrandLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
