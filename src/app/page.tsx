"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FloatingDock } from "@/components/ui/floating-dock";
import GradualBlur from "@/components/GradualBlur";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandDiscord,
  IconBrandLinkedin,
  IconHome,
  IconPhoneCall,
  IconTerminal2,
  IconPlus,
  IconTrophy,
} from "@tabler/icons-react";
import ClickSpark from "@/components/ClickSpark";
import CurvedLoop from "@/components/CurvedLoop";
import { useRouter } from "next/navigation";
import useLenis from "@/lib/useLenis";

export default function Home() {
  useLenis({ lerp: 0.07 });
  const [timeLeft, setTimeLeft] = useState<number>(30 * 24 * 60 * 60);
  const targetRef = useRef<number | null>(null);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
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

  const faqItems = [
    {
      q: "Who can attend?",
      a: "HerCode'26 welcomes women and non-binary participants of all skill levels — students and professionals alike.",
    },
    {
      q: "Do I need a team?",
      a: "You can join solo or with a team. Team formation support will be available at the event.",
    },
    {
      q: "Do I need a team?",
      a: "You can join solo or with a team. Team formation support will be available at the event.",
    },
    {
      q: "Do I need a team?",
      a: "You can join solo or with a team. Team formation support will be available at the event.",
    },
    {
      q: "Is there a participation fee?",
      a: "Basic participation is free. Any paid workshops or extras will be announced in advance.",
    },
  ];

  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
  const toggleFaq = (i: number) => setFaqOpen((s) => ({ ...s, [i]: !s[i] }));

  const handleRegister = async () => {
    if (loading) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    router.push("/registrations");
  };

  return (
    <>
      <main>
        <Image
          src="/clouds.png"
          alt="Clouds"
          width={420}
          height={200}
          className="absolute top-2 right-2 z-10 pointer-events-none w-36 sm:w-48 md:w-64 opacity-95"
        />
        <ClickSpark sparkColor="#8d001f" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
          <div className="fixed top-90 left-3 z-40 flex flex-col items-start md:top-52 md:left-10">
            <FloatingDock mobileClassName="translate-y-20" items={links} />
          </div>

          <div className="min-h-screen relative flex items-center justify-center">
            <Link href="/" className="absolute top-6 left-5 z-30">
              <Image src="/logo1.png" alt="Logo" width={300} height={200} className="block mt-0 pointer-events-none" />
            </Link>

            <Image
              src="/welcome.png"
              alt="Welcome"
              width={280}
              height={280}
              className="absolute right-4 sm:right-5 bottom-0 md:bottom-0 top-auto z-10 pointer-events-none w-48 md:w-62 float-anim"
            />

            <div className="z-20">
              <div className="text-white font-bold p-6 md:p-8 flex flex-col items-center lg:mt-20">
                <p className="text-xl text-white/70 mb-5 uppercase tracking-widest rubiks font-bold">
                  Her Ideas. Her Team. HerCode.
                </p>
                <p className="text-white/90 mb-4 kanit">March 17-18, 2026 | In-Person | Adamas University</p>
                <div className="flex gap-3 md:gap-6">
                  <div className="flex flex-col items-center bg-white/4 rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-[72px] rubiks">
                    <span className="text-2xl md:text-3xl font-semibold">{days}</span>
                    <span className="text-xs md:text-sm text-white/80 font-bold rubiks">Days</span>
                  </div>
                  <div className="flex flex-col items-center bg-white/4 rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-14 rubiks">
                    <span className="text-2xl md:text-3xl font-semibold">{pad(hours)}</span>
                    <span className="text-xs md:text-sm text-white/80 font-bold rubiks">Hours</span>
                  </div>
                  <div className="flex flex-col items-center bg-white/4 rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-14 rubiks">
                    <span className="text-2xl md:text-3xl font-semibold">{pad(minutes)}</span>
                    <span className="text-xs md:text-sm text-white/80 font-bold rubiks">Minutes</span>
                  </div>
                  <div className="flex flex-col items-center bg-white/4 rounded-lg px-4 py-3 md:px-6 md:py-4 min-w-14 rubiks">
                    <span className="text-2xl md:text-3xl font-semibold">{pad(seconds)}</span>
                    <span className="text-xs md:text-sm text-white/80 font-bold rubiks">Seconds</span>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-center gap-4 kanit font-bold">
                  <button
                    onClick={handleRegister}
                    disabled={loading}
                    aria-busy={loading}
                    className="px-4 py-2 sm:px-7 sm:py-4 rounded-md bg-pink-500 text-white text-sm font-medium tracking-widest disabled:opacity-60 disabled:cursor-wait"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-3">
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Preparing...
                      </span>
                    ) : (
                      "Register"
                    )}
                  </button>

                  <Link
                    href="/sponsors"
                    className="px-4 py-2 sm:px-7 sm:py-4 rounded-md bg-transparent border border-white/20 text-white text-sm font-medium tracking-widest"
                  >
                    Sponsor
                  </Link>
                </div>
              </div>
            </div>

            <GradualBlur
              target="page"
              position="bottom"
              height="2rem"
              strength={2}
              divCount={5}
              curve="bezier"
              exponential={true}
              opacity={1}
              className="fixed bottom-0 w-full z-50 pointer-events-none"
            />

            <Image src="/grass.png" alt="Grass" width={360} height={140} className="fixed left-0 bottom-0 z-20 w-40 md:w-64 lg:w-80 pointer-events-none" />
          </div>

          <section id="about" className="rubiks">
            <div className="container max-w-5xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-50 mb-4 text-center">What is HerCode’26?</h2>
              <p className="text-center text-white/80 max-w-3xl mx-auto mb-20 font-bold kanit">
                HerCode’26 is a 24-hour, female-only hackathon hosted at Adamas University that empowers women to design, build, and showcase tech solutions across Ai-Ml, Web3, Cybersecurity, HealthTech, EdTech, IoT and more. We provide mentorship, workshops, and hands-on support — creating a safe, collaborative space for learners and innovators.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 tracking-widest">
                <div className="value-card bg-neutral-800 border border-white/6 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Empowerment</h3>
                  <p className="text-sm text-white/80 kanit">Creating opportunities for women to lead projects, learn new skills, and build confidence through practice and mentorship.</p>
                </div>

                <div className="value-card bg-neutral-800 border border-white/6 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Mentorship</h3>
                  <p className="text-sm text-white/80 kanit">Hands-on guidance from industry mentors and university faculty to help teams refine ideas and ship working prototypes.</p>
                </div>

                <div className="value-card bg-neutral-800 border border-white/6 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Innovation</h3>
                  <p className="text-sm text-white/80 kanit">Encouraging creative solutions for real-world problems using modern tech stacks and responsible design practices.</p>
                </div>

                <div className="value-card bg-neutral-800 border border-white/6 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-pink-400 mb-2">Community</h3>
                  <p className="text-sm text-white/80 kanit">Building a supportive network where participants connect, collaborate, and continue learning after the event.</p>
                </div>
              </div>
            </div>
            <Image src="/tree.png" alt="Tree" width={220} height={220} className="absolute right-0 bottom-8 sm:bottom-10 md:bottom-16 lg:bottom-24 z-0 pointer-events-none w-24 sm:w-32 md:w-40 lg:w-48" />
          </section>

          <CurvedLoop marqueeText="Women in tech ✦" className="rubiks" />

          <section id="tracks" className="font-bold">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl rubiks md:text-3xl font-semibold text-white mb-4">Event Tracks</h2>
              <p className="text-white/80 max-w-3xl mx-auto mb-8 kanit">Choose a track and build a project around focused challenges — mentorship and resources provided for each track.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/4 rounded-lg p-6 text-left">
                  <h3 className="text-lg font-semibold text-white rubiks">AI & ML</h3>
                  <p className="text-white/80 text-sm mt-2">Model building, data pipelines, and applied machine learning projects.</p>
                </div>

                <div className="bg-white/4 rounded-lg p-6 text-left">
                  <h3 className="text-lg font-semibold text-white rubiks">Web3</h3>
                  <p className="text-white/80 text-sm mt-2">Decentralized applications, blockchain development, and smart contracts.</p>
                </div>

                <div className="bg-white/4 rounded-lg p-6 text-left">
                  <h3 className="text-lg font-semibold text-white rubiks">HealthTech</h3>
                  <p className="text-white/80 text-sm mt-2">Solutions for healthcare delivery, diagnostics, and patient experience.</p>
                </div>

                <div className="bg-white/4 rounded-lg p-6 text-left">
                  <h3 className="text-lg font-semibold text-white rubiks">Cybersecurity</h3>
                  <p className="text-white/80 text-sm mt-2">Security-focused projects, threat modeling, and privacy-preserving designs.</p>
                </div>

                <div className="bg-white/4 rounded-lg p-6 text-left">
                  <h3 className="text-lg font-semibold text-white rubiks">Ed-Tech</h3>
                  <p className="text-white/80 text-sm mt-2">Educational technology projects, learning platforms, and digital classrooms.</p>
                </div>

                <div className="bg-white/4 rounded-lg p-6 text-left">
                  <h3 className="text-lg font-semibold text-white rubiks">IoT & Smart Systems</h3>
                  <p className="text-white/80 text-sm mt-2">Internet of Things projects, connected devices, and smart systems</p>
                </div>

                <div className="bg-white/4 rounded-lg p-6 text-left">
                  <h3 className="text-lg font-semibold text-white rubiks">Open Innovation</h3>
                  <p className="text-white/80 text-sm mt-2">Internet of Things projects, connected devices, and smart systems</p>
                </div>
              </div>
            </div>
          </section>

          <section id="prizes" className="mt-32 mb-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl rubiks md:text-3xl font-semibold text-white mb-4">Prizes</h2>
              <p className="text-white/80 max-w-3xl mx-auto mb-8 kanit">Win exciting rewards, mentorship and resources. Prizes will be awarded across tracks and special categories.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/4 rounded-lg p-6">
                  <IconTrophy className="h-8 w-8 mx-auto mb-3 text-amber-500" aria-hidden />
                  <h3 className="text-lg font-semibold text-pink-400 mb-2 rubiks">1st Place</h3>
                  <p className="text-white/80 text-sm kanit">Grand prize: cash award, mentorship & premium swag. - Revealing Soon!</p>
                </div>

                <div className="bg-white/4 rounded-lg p-6">
                  <IconTrophy className="h-8 w-8 mx-auto mb-3 text-gray-300" aria-hidden />
                  <h3 className="text-lg font-semibold text-pink-400 mb-2 rubiks">2nd Place</h3>
                  <p className="text-white/80 text-sm kanit">Runner-up prize: cash award and mentorship sessions. - Revealing Soon!</p>
                </div>

                <div className="bg-white/4 rounded-lg p-6">
                  <IconTrophy className="h-8 w-8 mx-auto mb-3 text-brown-400" aria-hidden />
                  <h3 className="text-lg font-semibold text-pink-400 mb-2 rubiks">3rd Place</h3>
                  <p className="text-white/80 text-sm kanit">Consolation prize: cash award and sponsor goodies. - Revealing Soon!</p>
                </div>

                <div className="bg-white/4 rounded-lg p-6">
                  <IconTrophy className="h-8 w-8 mx-auto mb-3 text-pink-300" aria-hidden />
                  <h3 className="text-lg font-semibold text-pink-400 mb-2 rubiks">Special Awards</h3>
                  <p className="text-white/80 text-sm kanit">Best Design, Best Social Impact, Best Technical Implementation and more.</p>
                </div>
              </div>
            </div>
          </section>

          <section id="sponsors" className="mt-32 mb-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl rubiks md:text-3xl font-semibold text-white mb-4">Sponsors</h2>
              <p className="text-white/80 max-w-3xl mx-auto mb-8 kanit">We gratefully acknowledge the organizations supporting HerCode'26.</p>

              <div className="space-y-10">
                <div>
                  <h3 className="text-xl rubiks font-semibold text-white mb-4">Community Sponsors</h3>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="w-40 h-16 bg-white/6 rounded flex items-center justify-center text-white/80">Community 1</div>
                    <div className="w-40 h-16 bg-white/6 rounded flex items-center justify-center text-white/80">Community 2</div>
                    <div className="w-40 h-16 bg-white/6 rounded flex items-center justify-center text-white/80">Community 3</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl rubiks font-semibold text-white mb-4">Gold Sponsors</h3>
                  <div className="flex flex-wrap items-center justify-center gap-6">
                    <div className="w-48 h-20 bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 rounded flex items-center justify-center text-yellow-200 font-bold">Gold Sponsor A</div>
                    <div className="w-48 h-20 bg-gradient-to-r from-yellow-400/10 to-yellow-400/5 border border-yellow-400/30 rounded flex items-center justify-center text-yellow-200 font-bold">Gold Sponsor B</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl rubiks font-semibold text-white mb-4">Silver Sponsors</h3>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="w-40 h-16 bg-white/6 rounded flex items-center justify-center text-white/80">Silver Sponsor A</div>
                    <div className="w-40 h-16 bg-white/6 rounded flex items-center justify-center text-white/80">Silver Sponsor B</div>
                    <div className="w-40 h-16 bg-white/6 rounded flex items-center justify-center text-white/80">Silver Sponsor C</div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl rubiks font-semibold text-white mb-4">Hospitality Sponsors</h3>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <div className="w-48 h-20 bg-white/6 rounded flex items-center justify-center text-white/80">Hospitality Sponsor</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="team" className="mt-32 mb-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
              <h2 className="text-3xl rubiks md:text-3xl font-semibold text-white mb-4">Team</h2>
              <p className="text-white/80 max-w-3xl mx-auto mb-8 kanit">Meet the people behind HerCode'26 — organizers, mentors and volunteers who make this possible.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div className="bg-white/4 rounded-lg p-6 flex flex-col items-center">
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-white/6 flex items-center justify-center">
                    <Image src="/team/alice.jpg" alt="Alice Doe" width={96} height={96} className="object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold rubiks">Alice Doe</h3>
                  <p className="text-sm text-white/80 kanit">Event Lead</p>
                  <p className="text-xs text-white/70 kanit mt-2">Coordinates partnerships, sponsors and event logistics.</p>
                  <div className="mt-3 flex gap-3">
                    <a href="#" className="text-white/80 hover:text-white"><IconBrandTwitter className="h-4 w-4" /></a>
                    <a href="#" className="text-white/80 hover:text-white"><IconBrandGithub className="h-4 w-4" /></a>
                  </div>
                </div>

                <div className="bg-white/4 rounded-lg p-6 flex flex-col items-center">
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-white/6 flex items-center justify-center">
                    <Image src="/team/bob.jpg" alt="Bob Smith" width={96} height={96} className="object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold rubiks">Bob Smith</h3>
                  <p className="text-sm text-white/80 kanit">Tech Lead</p>
                  <p className="text-xs text-white/70 kanit mt-2">Leads mentor coordination and technical workshops.</p>
                  <div className="mt-3 flex gap-3">
                    <a href="#" className="text-white/80 hover:text-white"><IconBrandTwitter className="h-4 w-4" /></a>
                    <a href="#" className="text-white/80 hover:text-white"><IconBrandGithub className="h-4 w-4" /></a>
                  </div>
                </div>

                <div className="bg-white/4 rounded-lg p-6 flex flex-col items-center">
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-white/6 flex items-center justify-center">
                    <Image src="/team/carol.jpg" alt="Carol Nguyen" width={96} height={96} className="object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold rubiks">Carol Nguyen</h3>
                  <p className="text-sm text-white/80 kanit">Design Lead</p>
                  <p className="text-xs text-white/70 kanit mt-2">Handles branding, UX workshops and mentor sessions.</p>
                  <div className="mt-3 flex gap-3">
                    <a href="#" className="text-white/80 hover:text-white"><IconBrandTwitter className="h-4 w-4" /></a>
                    <a href="#" className="text-white/80 hover:text-white"><IconBrandGithub className="h-4 w-4" /></a>
                  </div>
                </div>

                <div className="bg-white/4 rounded-lg p-6 flex flex-col items-center">
                  <div className="w-24 h-24 mb-4 rounded-full overflow-hidden bg-white/6 flex items-center justify-center">
                    <Image src="/team/dan.jpg" alt="Dan Lee" width={96} height={96} className="object-cover" />
                  </div>
                  <h3 className="text-lg font-semibold rubiks">Dan Lee</h3>
                  <p className="text-sm text-white/80 kanit">Volunteer Coordinator</p>
                  <p className="text-xs text-white/70 kanit mt-2">Manages volunteers and on-site operations.</p>
                  <div className="mt-3 flex gap-3">
                    <a href="#" className="text-white/80 hover:text-white"><IconBrandTwitter className="h-4 w-4" /></a>
                    <a href="#" className="text-white/80 hover:text-white"><IconBrandGithub className="h-4 w-4" /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="faq" className="mt-40 mb-20">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 text-center rubiks">FAQ</h2>

              <div className="space-y-3 kanit tracking-widest">
                {faqItems.map((item, idx) => {
                  const open = !!faqOpen[idx];
                  return (
                    <div key={idx} className="bg-white/4 rounded-lg p-2">
                      <div className="flex items-center">
                        <div className="flex-1">
                          <div className="text-white font-medium">{item.q}</div>
                        </div>
                        <button onClick={() => toggleFaq(idx)} aria-expanded={open} className="ml-4 text-white/80 p-2 rounded hover:bg-white/6">
                          <IconPlus className={`h-5 w-5 transform transition-transform duration-200 ${open ? "rotate-45" : "rotate-0"}`} />
                        </button>
                      </div>
                      <div className={`mt-2 overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                        <p className="text-white/80 text-sm">{item.a}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </ClickSpark>
      </main>

      {loading && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 backdrop-blur-sm pointer-events-auto">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            <div className="text-white kanit font-bold tracking-widest">Cooking registrations page for ya!…</div>
          </div>
        </div>
      )}

      <footer className="w-full border-t border-white/5 py-6 mt-8">
        <div className="max-w-5xl mx-auto px-6 text-center text-white/80">
          <p className="text-sm kanit font-bold">&copy; {new Date().getFullYear()} HerCode'26 — All rights reserved.</p>
          <div className="mt-3 flex items-center justify-center kanit font-bold gap-4">
            <Link href="/privacy" className="text-sm underline">Privacy</Link>
            <Link href="/terms" className="text-sm underline">Terms & Conditions</Link>
          </div>
          <div className="mt-3 flex items-center justify-center gap-6 mb-3">
            <a href="https://discord.gg/8PNRVMPa" target="_blank" rel="noopener noreferrer" aria-label="Discord" className="text-white/80 hover:text-white">
              <IconBrandDiscord className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-white/80 hover:text-white">
              <IconBrandTwitter className="h-5 w-5" />
            </a>
            <a href="https://instagram.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/80 hover:text-white">
              <IconBrandInstagram className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/YOUR_COMPANY" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white/80 hover:text-white">
              <IconBrandLinkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
