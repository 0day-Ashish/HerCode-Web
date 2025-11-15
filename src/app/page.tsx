"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconHome,
  IconPhoneCall,
  IconTerminal2,
} from "@tabler/icons-react";
import ClickSpark from "@/components/ClickSpark";


export default function Home() {
  // seconds remaining
  const [timeLeft, setTimeLeft] = useState<number>(30 * 24 * 60 * 60);
  const targetRef = useRef<number | null>(null);
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
 
    {
      title: "Register",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Contact Us",
      icon: (
        <IconPhoneCall className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  useEffect(() => {
    // set a persistent target for this session (now + 30 days)
    if (!targetRef.current) {
      targetRef.current = Date.now() + 30 * 24 * 60 * 60 * 1000;
    }

    const update = () => {
      const now = Date.now();
      const diffSec = Math.max(0, Math.floor(((targetRef.current as number) - now) / 1000));
      setTimeLeft(diffSec);
    };

    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const days = Math.floor(timeLeft / (24 * 3600));
  const hours = Math.floor((timeLeft % (24 * 3600)) / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <>
    
      <ClickSpark
        sparkColor="#8d001f"
        sparkSize={10}
        sparkRadius={15}
        sparkCount={8}
        duration={400}
      >
        {/* Floating dock: on mobile place it to the right of the logo; on md+ keep previous top-left position */}
        <div className="fixed top-90 left-3 z-40 flex flex-col items-start md:top-52 md:left-10">
          <FloatingDock mobileClassName="translate-y-20" items={links} />
        </div>
        
        <div className="min-h-screen relative flex items-center justify-center">
          <Link href="/" className="absolute top-6 left-5 z-30">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={300}
              height={200}
              className="block mt-0 pointer-events-none"
            />
          </Link>
          
          <Image
            src="/welcome.png"
            alt="Welcome"
            width={280}
            height={280}
            // mobile: smaller and pinned near viewport bottom; md+: larger and bottom-aligned
            className="absolute right-4 sm:right-5 bottom-0 md:bottom-0 top-auto z-10 pointer-events-none w-48 md:w-62"
          />
          {/* Centered 30-day timer */}
          <div className="z-20">
            <div className="text-white p-6 md:p-8 flex flex-col items-center">
              
              <div className="flex gap-3 md:gap-6">
                <div className="flex flex-col items-center bg-white/4 rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[72px]">
                  <span className="text-2xl md:text-3xl font-semibold">{days}</span>
                  <span className="text-xs md:text-sm text-white/80">Days</span>
                </div>
                <div className="flex flex-col items-center bg-white/4 rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-14">
                  <span className="text-2xl md:text-3xl font-semibold">{pad(hours)}</span>
                  <span className="text-xs md:text-sm text-white/80">Hours</span>
                </div>
                <div className="flex flex-col items-center bg-white/4 rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-14">
                  <span className="text-2xl md:text-3xl font-semibold">{pad(minutes)}</span>
                  <span className="text-xs md:text-sm text-white/80">Minutes</span>
                </div>
                <div className="flex flex-col items-center bg-white/4 rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-14">
                  <span className="text-2xl md:text-3xl font-semibold">{pad(seconds)}</span>
                  <span className="text-xs md:text-sm text-white/80">Seconds</span>
                </div>
              </div>
            </div>
          </div>

          <Image
            src="/grass.png"
            alt="Grass"
            width={360}
            height={140}
            className="fixed left-0 bottom-0 z-20 w-40 md:w-64 lg:w-80 pointer-events-none"
          />
        </div>
      </ClickSpark>
    </>
  );
}
