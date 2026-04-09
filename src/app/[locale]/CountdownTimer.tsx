"use client";

import { useEffect, useState } from "react";

interface CountdownLabels {
  days: string;
  hours: string;
  min: string;
  sec: string;
}

export function CountdownTimer({ labels }: { labels: CountdownLabels }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-04-17T20:00:00");

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
    { value: timeLeft.days, label: labels.days },
    { value: timeLeft.hours, label: labels.hours },
    { value: timeLeft.minutes, label: labels.min },
    { value: timeLeft.seconds, label: labels.sec },
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
