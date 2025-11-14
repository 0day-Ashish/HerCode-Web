"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ClickSpark from "@/components/ClickSpark";


export default function Home() {
  // seconds remaining
  const [timeLeft, setTimeLeft] = useState<number>(30 * 24 * 60 * 60);
  const targetRef = useRef<number | null>(null);

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
        <div className="min-h-screen relative flex items-center justify-center">
          <Link href="/" className="absolute top-4 left-5 z-30">
            <Image
              src="/logo1.png"
              alt="Logo"
              width={300}
              height={200}
              className="block mt-0 pointer-events-none"
            />
          </Link>
          <Image
            src="/banner1.png"
            alt="Clock"
            width={280}
            height={280}
            className="absolute top-100 right-0 sm:right-5 z-10 pointer-events-none"
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
