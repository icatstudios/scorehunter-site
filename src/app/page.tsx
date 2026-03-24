"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-04-10T20:00:00");

    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const blocks = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.minutes, label: "Min" },
    { value: timeLeft.seconds, label: "Sec" },
  ];

  return (
    <div className="flex gap-3 sm:gap-4">
      {blocks.map((block) => (
        <div key={block.label} className="flex flex-col items-center">
          <div className="glass-card w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
            <span className="text-2xl sm:text-3xl font-bold text-primary relative z-10 font-poppins">
              {String(block.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-text-secondary mt-2 uppercase tracking-widest">
            {block.label}
          </span>
        </div>
      ))}
    </div>
  );
}

function FloatingParticles() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Green glow blob - top right */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />

      {/* Purple glow blob - bottom left */}
      <div
        className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-secondary/15 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      {/* Small green glow - center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-primary/5 blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "1s" }}
      />

      {/* Subtle grid pattern */}
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

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <FloatingParticles />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Mascot */}
        <div className="animate-slide-up mb-4 sm:mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[60px] scale-75" />
            <Image
              src="/mascot.png"
              alt="ScoreHunter Mascot"
              width={220}
              height={220}
              className="relative z-10 animate-float drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Logo / Brand */}
        <div className="animate-slide-up-delay-1 mb-4">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight">
            <span className="animate-shimmer">Score</span>
            <span className="text-text-primary">Hunter</span>
          </h1>
        </div>

        {/* Tagline */}
        <p className="animate-slide-up-delay-2 text-text-secondary text-lg sm:text-xl mb-2 max-w-md">
          Something big is coming.
        </p>
        <p className="animate-slide-up-delay-2 text-text-muted text-sm mb-8">
          Are you ready to hunt?
        </p>

        {/* Countdown */}
        <div className="animate-slide-up-delay-3 mb-10">
          <CountdownTimer />
        </div>

        {/* Store badges - coming soon style */}
        <div className="animate-fade-in-delay flex flex-col sm:flex-row gap-3 items-center">
          <div className="glass-card w-44 h-14 flex items-center justify-center gap-3 opacity-60 hover:opacity-80 transition-opacity cursor-default">
            <svg
              className="w-6 h-6 text-text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-text-muted leading-none">
                Coming Soon
              </div>
              <div className="text-sm font-semibold text-text-primary leading-tight">
                App Store
              </div>
            </div>
          </div>

          <div className="glass-card w-44 h-14 flex items-center justify-center gap-3 opacity-60 hover:opacity-80 transition-opacity cursor-default">
            <svg
              className="w-6 h-6 text-text-primary"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 0 1 0 1.732l-2.808 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
            </svg>
            <div className="text-left">
              <div className="text-[10px] text-text-muted leading-none">
                Coming Soon
              </div>
              <div className="text-sm font-semibold text-text-primary leading-tight">
                Google Play
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-auto pt-12 pb-6 text-text-muted text-xs">
        © 2026 iCat Studios. All rights reserved.
      </footer>
    </main>
  );
}
