"use client";

import { useEffect, useState } from "react";

interface CountdownLabels {
  days: string;
  hours: string;
  min: string;
  sec: string;
}

// Turkey time (UTC+3), fixed launch moment — identical for every viewer worldwide.
const TARGET_TS = new Date("2026-04-24T20:00:00+03:00").getTime();

function calcTimeLeft() {
  const diff = TARGET_TS - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

type TimeLeft = ReturnType<typeof calcTimeLeft>;
const ZERO: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

export function CountdownTimer({ labels }: { labels: CountdownLabels }) {
  // Start with zeros on the server so SSR/hydration matches.
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(ZERO);

  useEffect(() => {
    // Compute the real value immediately after hydration — no 1-second gap.
    setTimeLeft(calcTimeLeft());

    // Align subsequent ticks to the start of each real second so the display
    // updates feel crisp instead of drifting.
    const msUntilNextSecond = 1000 - (Date.now() % 1000);
    let interval: ReturnType<typeof setInterval> | undefined;

    const initial = setTimeout(() => {
      setTimeLeft(calcTimeLeft());
      interval = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    }, msUntilNextSecond);

    return () => {
      clearTimeout(initial);
      if (interval) clearInterval(interval);
    };
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
            <span
              key={block.value}
              className="text-2xl sm:text-3xl font-bold text-primary relative z-10 font-poppins tabular-nums animate-tick"
            >
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
