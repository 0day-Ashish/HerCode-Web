"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function RegistrationsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim()) {
      setError("Please enter your name and email.");
      return;
    }

    // simple email pattern check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // mock submit (replace with real API call as needed)
    setSubmitted(true);
    // clear form (optional)
    setName("");
    setEmail("");
    setNotes("");
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-xl bg-white/6 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-white">Register for HerCode'26</h1>
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
    </main>
  );
}
