"use client";

import Link from "next/link";
import { useState } from "react";

function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/15 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}

export default function DeleteAccount() {
  const [username, setUsername] = useState("");
  const [confirmCode, setConfirmCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !confirmCode.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent("Account Deletion Request");
    const body = encodeURIComponent(
      `Account Deletion Request\n\nUsername: ${username.trim()}\nConfirm Code: ${confirmCode.trim()}\n\nI would like to request the deletion of my account and all associated data.`
    );

    window.location.href = `mailto:support@scorehunter.app?subject=${subject}&body=${body}`;
  };

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <FloatingParticles />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full mx-auto">
        {/* Back to home */}
        <Link
          href="/"
          className="animate-fade-in self-start mb-8 text-text-muted hover:text-primary transition-colors text-sm flex items-center gap-1"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Home
        </Link>

        {/* Brand */}
        <div className="animate-slide-up mb-2">
          <h2 className="text-2xl font-bold tracking-tight">
            <span className="animate-shimmer">Score</span>
            <span className="text-text-primary">Hunter</span>
          </h2>
        </div>

        {/* Title */}
        <div className="animate-slide-up-delay-1 mb-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Delete Account
          </h1>
        </div>

        {/* Description */}
        <p className="animate-slide-up-delay-2 text-text-secondary text-sm mb-8 max-w-sm">
          To request the deletion of your account and all associated data,
          please fill in the form below. This will open your email client with a
          pre-filled message to our support team.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="animate-slide-up-delay-3 w-full space-y-4"
        >
          <div className="text-left">
            <label
              htmlFor="username"
              className="block text-text-secondary text-xs uppercase tracking-widest mb-2"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full glass-card px-4 py-3 bg-transparent text-text-primary placeholder-text-muted text-sm outline-none focus:border-primary/50 transition-colors"
            />
          </div>

          <div className="text-left">
            <label
              htmlFor="confirmCode"
              className="block text-text-secondary text-xs uppercase tracking-widest mb-2"
            >
              Confirm Code
            </label>
            <input
              id="confirmCode"
              type="text"
              value={confirmCode}
              onChange={(e) => setConfirmCode(e.target.value)}
              placeholder="Enter your confirm code"
              className="w-full glass-card px-4 py-3 bg-transparent text-text-primary placeholder-text-muted text-sm outline-none focus:border-primary/50 transition-colors"
            />
            <p className="text-text-muted text-[11px] mt-2">
              You can get your confirm code from the app settings.
            </p>
          </div>

          {error && (
            <p className="text-red-400 text-sm text-left">{error}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-2xl bg-primary text-bg-dark font-semibold text-sm hover:bg-primary-dark transition-colors cursor-pointer mt-2"
          >
            Submit Request
          </button>
        </form>

        {/* Info note */}
        <p className="animate-fade-in-delay text-text-muted text-[11px] mt-6 max-w-sm">
          Your request will be processed within 30 days. You will receive a
          confirmation email once your account has been deleted.
        </p>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-auto pt-12 pb-6 text-text-muted text-xs">
        © 2026 iCat Studios. All rights reserved.
      </footer>
    </main>
  );
}
