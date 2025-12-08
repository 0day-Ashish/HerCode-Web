"use client";
import React from "react";
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

export default function TermsPage() {
  useLenis({ lerp: 0.07 });

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

  return (
    <main className="min-h-screen flex flex-col items-center justify-center py-16 px-6">
      <div className="fixed top-90 left-3 z-40 flex flex-col items-start md:top-52 md:left-10">
                        <FloatingDock mobileClassName="translate-y-20" items={links} />
                      </div>
      <div className="w-full flex justify-start mb-6">
        <Link href="/" aria-label="Home">
          <Image src="/logo1.png" alt="HerCode'26" width={260} height={58} priority />
        </Link>
      </div>
      <div className="w-full max-w-4xl bg-white/6 backdrop-blur-sm border border-white/10 rounded-xl p-8 justify-center">
      
        <header className="mb-6">
          <h1 className="text-2xl font-semibold rubiks text-white">Terms &amp; Conditions</h1>
          <p className="text-sm text-white/80 mt-1 kanit font-bold">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <section className="prose prose-invert kanit font-bold max-w-none text-white/90 space-y-4 tracking-widest">
          <p>
            By registering for or using HerCode'26 resources you agree to comply with these Terms &amp; Conditions.
            Please read them carefully. 
          </p>

          <h2 className="font-bold text-xl">Use of Service</h2>
          <p>
            The event and related materials are provided for educational purposes. You agree to use the platform
            and participate in the event responsibly and respectfully.
          </p>

          <h2 className="font-bold text-xl">Code of Conduct</h2>
          <p>
            Harassment, discrimination, or abusive behavior is not tolerated. Participants must follow the event's
            code of conduct and any instructions from organizers or mentors.
          </p>

          <h2 className="font-bold text-xl">Intellectual Property</h2>
          <p>
            Participants retain ownership of their submissions. By presenting or submitting materials at the event,
            you grant the organizers a license to display and promote the work.
          </p>

          <h2 className="font-bold text-xl">Liability</h2>
          <p>
            HerCode'26 organizers are not liable for any damages or losses arising from participation. Participation
            is at your own risk.
          </p>

          <h2 className="font-bold text-xl">Privacy</h2>
          <p>
            Participant data will be used only for event administration and communication. See our Privacy policy for
            full details.
          </p>

          <h2 className="font-bold text-xl">Contact</h2>
          <p>
            For questions about these terms, email the organizers or visit the contact page.
          </p>

          <div className="mt-6">
            <Link href="/" className="inline-block px-4 py-2 bg-pink-500 text-white rounded-md">
              Back to home
            </Link>
          </div>
        </section>
        
      </div>
      <footer className="w-full border-t border-white/5 py-6 mt-38">
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
