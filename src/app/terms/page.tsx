"use client";
import React from "react";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex items-start justify-center py-16 px-6">
      <div className="w-full max-w-4xl bg-white/6 backdrop-blur-sm border border-white/10 rounded-xl p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold give-you-glory text-white">Terms &amp; Conditions</h1>
          <p className="text-sm text-white/80 mt-1 give-you-glory font-bold">Last updated: {new Date().toLocaleDateString()}</p>
        </header>

        <section className="prose prose-invert give-you-glory font-bold max-w-none text-white/90 space-y-4 tracking-widest">
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
    </main>
  );
}
