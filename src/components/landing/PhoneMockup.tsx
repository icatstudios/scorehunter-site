import type { ReactNode } from "react";

export function PhoneMockup({
  label,
  title,
  subtitle,
  variant = "scoreHunt",
  className = "",
}: {
  label: string;
  title: string;
  subtitle: string;
  variant?: "scoreHunt" | "liveMatch" | "leaderboard";
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {/* Glow halo */}
      <div className="absolute -inset-6 rounded-[3rem] bg-primary/10 blur-3xl pointer-events-none" />

      {/* Phone frame */}
      <div className="relative w-[260px] sm:w-[280px] h-[540px] sm:h-[580px] rounded-[2.5rem] bg-gradient-to-b from-slate-900 to-slate-950 ring-2 ring-white/10 shadow-2xl shadow-black/50 p-2">
        {/* Notch / Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-10" />

        {/* Side buttons */}
        <div className="absolute -left-[3px] top-24 w-1 h-12 bg-slate-700 rounded-l-md" />
        <div className="absolute -left-[3px] top-44 w-1 h-20 bg-slate-700 rounded-l-md" />
        <div className="absolute -right-[3px] top-32 w-1 h-16 bg-slate-700 rounded-r-md" />

        {/* Screen */}
        <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-bg-dark">
          {/* Status bar simulation */}
          <div className="h-9 flex items-center justify-between px-6 pt-2 text-[10px] text-text-muted">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 17l5-5 4 4 7-7v3l-7 7-4-4-5 5z" />
              </svg>
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 12c5-3 15-3 20 0v4c-5-3-15-3-20 0v-4z" />
              </svg>
              <span>100</span>
            </div>
          </div>

          {/* Top bar / brand */}
          <div className="px-5 pt-2 pb-3 flex items-center justify-between">
            <span className="text-xs font-bold">
              <span className="text-primary">Score</span>
              <span className="text-text-primary">Hunter</span>
            </span>
            <span className="text-[10px] text-text-muted uppercase tracking-wider">
              {label}
            </span>
          </div>

          {/* Hero card on the screen */}
          <div className="mx-4 rounded-2xl p-4 bg-gradient-to-br from-primary/15 to-secondary/10 ring-1 ring-primary/30">
            <div className="text-text-primary text-base font-semibold leading-tight">
              {title}
            </div>
            <div className="text-text-muted text-[11px] mt-1">{subtitle}</div>
          </div>

          {/* Variant content */}
          <div className="mt-4 px-4 space-y-3">
            {variant === "scoreHunt" && <ScoreHuntList />}
            {variant === "liveMatch" && <LiveMatch />}
            {variant === "leaderboard" && <Leaderboard />}
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ left, right }: { left: ReactNode; right: ReactNode }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-white/[0.03] ring-1 ring-white/5 px-3 py-2.5">
      <div className="text-[11px] text-text-secondary truncate pr-2">{left}</div>
      <div className="text-[11px] text-text-primary font-semibold whitespace-nowrap">
        {right}
      </div>
    </div>
  );
}

function ScoreHuntList() {
  const matches = [
    ["Real Madrid · Barcelona", "2 – 1"],
    ["Bayern · Dortmund", "3 – 0"],
    ["Liverpool · Man City", "1 – 1"],
    ["Inter · Juventus", "2 – 2"],
    ["PSG · Lyon", "3 – 0"],
  ];
  return (
    <>
      {matches.map(([m, s], i) => (
        <Row
          key={i}
          left={
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary/50" />
              {m}
            </span>
          }
          right={s}
        />
      ))}
    </>
  );
}

function LiveMatch() {
  return (
    <>
      <div className="rounded-xl bg-white/[0.03] ring-1 ring-white/5 px-3 py-3 text-center">
        <div className="text-[10px] text-primary font-semibold uppercase tracking-wider mb-1">
          Live · 67&apos;
        </div>
        <div className="flex items-center justify-around">
          <div className="text-center">
            <div className="w-8 h-8 rounded-full bg-secondary/30 mx-auto" />
            <div className="text-[10px] mt-1 text-text-secondary">ARS</div>
          </div>
          <div className="text-2xl font-bold text-text-primary">2 – 1</div>
          <div className="text-center">
            <div className="w-8 h-8 rounded-full bg-primary/30 mx-auto" />
            <div className="text-[10px] mt-1 text-text-secondary">CHE</div>
          </div>
        </div>
      </div>
      <Row left="Your prediction" right={<span className="text-primary">2 – 1</span>} />
      <Row left="Outcome (1X2)" right={<span className="text-primary">+ 30 pts</span>} />
      <Row left="Exact score" right={<span className="text-primary">+ 50 pts</span>} />
      <Row left="Goal scorer" right="Pending" />
    </>
  );
}

function Leaderboard() {
  const rows = [
    ["1", "futbolFan_42", "1240", "—"],
    ["2", "you", "1185", "↑ 14"],
    ["3", "predictor.99", "1150", "↓ 2"],
    ["4", "scoreHunterPro", "1080", "—"],
    ["5", "fanzone", "1020", "↑ 6"],
  ];
  return (
    <>
      {rows.map(([rank, name, pts, delta], i) => {
        const isYou = name === "you";
        return (
          <div
            key={i}
            className={`flex items-center justify-between rounded-xl px-3 py-2.5 ring-1 ${
              isYou
                ? "bg-primary/15 ring-primary/40"
                : "bg-white/[0.03] ring-white/5"
            }`}
          >
            <div className="flex items-center gap-2">
              <span
                className={`text-[11px] font-bold w-5 ${
                  isYou ? "text-primary" : "text-text-muted"
                }`}
              >
                {rank}
              </span>
              <span
                className={`text-[11px] truncate max-w-[100px] ${
                  isYou ? "text-text-primary font-semibold" : "text-text-secondary"
                }`}
              >
                {name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-text-primary font-semibold">
                {pts}
              </span>
              <span
                className={`text-[10px] w-8 text-right ${
                  delta.startsWith("↑")
                    ? "text-primary"
                    : delta.startsWith("↓")
                      ? "text-red-400"
                      : "text-text-muted"
                }`}
              >
                {delta}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
}
