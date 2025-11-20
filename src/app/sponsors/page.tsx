'use client';
import React from "react";
import Link from "next/link";
import ClickSpark from "../../components/ClickSpark";

export default function SponsorsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <ClickSpark
                sparkColor="#8d001f"
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
              >
      <div className="w-full max-w-4xl give-you-glory font-bold tracking-widest  items-center justify-center mt-20 px-6">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-semibold text-white">Sponsor HerCode'26</h1>
          <p className="text-sm text-white/80 mt-2 font-bold">
            Partner with us to support a diverse pipeline of women in tech.
          </p>
        </header>

        <section className="prose prose-invert max-w-none text-white/90 space-y-4">
          <p>
            Imagine this: a space buzzing with ambition, resilience, and raw innovation. Hundreds of women in tech — designers, developers, thinkers, and builders — all united by one mission: to create something extraordinary.
          </p>

          <p>
            That’s HerCode’26.
          </p>

          <p>
            A 24-hour burst of creativity where confidence grows, ideas collide, and real solutions come alive. With your support, we empower women to lead, build, and break barriers — turning potential into prototypes and curiosity into impact.
          </p>

          <p>
            Join us with your tech, your mentorship, and your vision. Together, we’ll shape an experience that inspires far beyond the 24 hours.
          </p>

          <p className="font-semibold">
            Explore our sponsorship package. Our tiers and add-ons are flexible and designed to match your goals — whether it’s hiring, brand visibility, diversity initiatives, or community building.
          </p>

          <p>
            For more details, reach us at{" "}
            <a href="mailto:hercode.cy@gmail.com" className="underline text-white/90">
              0day.ashish@gmail.com
            </a>
            .
          </p>

          <div className="mt-6 flex flex-col sm:flex-col items-center gap-5">
            <a
              href="/sponsors/package.pdf"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-pink-500 text-black font-semibold shadow-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Sponsorship Package
            </a>

            <a
              href="mailto:0day.ashish@gmail.com"
              className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/20 text-white"
            >
              Contact Us
            </a>

            <Link href="/" className="text-sm text-white/80 underline mt-2 sm:mt-0">
              Back to home
            </Link>
          </div>
        </section>
      </div>
      </ClickSpark>
    </main>
  );
}