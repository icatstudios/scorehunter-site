export interface WeeklyRewardsLabels {
  title: string;
  lockedBadge: string;
  intro: string;
  /** e.g. "Aktif oyuncu" - label above the progress bar */
  progressLabel: string;
  /** e.g. "hedef" - small label next to the target number */
  targetLabel: string;
  /** Explanation of what unlocks and why the threshold exists */
  explain: string;
  /** Call to action nudging players to invite friends */
  helpNote: string;
}

/**
 * Weekly prizes aren't live yet - they unlock once the player base is
 * large enough for a weekly prize pool to be sustainable. Rather than
 * hiding the feature, we show it locked with a progress bar so the
 * threshold reads as a shared goal instead of an arbitrary delay.
 */
export function WeeklyRewardsCard({
  labels,
  currentPlayers,
  targetPlayers,
}: {
  labels: WeeklyRewardsLabels;
  /** null when the API is unreachable - the bar is hidden in that case. */
  currentPlayers: number | null;
  targetPlayers: number;
}) {
  const pct =
    currentPlayers === null
      ? null
      : Math.min(100, Math.max(0, (currentPlayers / targetPlayers) * 100));

  return (
    <div className="relative rounded-2xl ring-1 ring-white/10 bg-white/[0.02] p-6 sm:p-8 overflow-hidden">
      {/* Soft backdrop so the locked card still feels like a feature,
          not an error state. */}
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-secondary/10 blur-[80px] pointer-events-none" />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-white/5 ring-1 ring-white/10 text-text-muted flex items-center justify-center shrink-0">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              viewBox="0 0 24 24"
              aria-hidden
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-text-primary">{labels.title}</h3>
          <span className="px-2.5 py-1 rounded-full bg-white/[0.06] text-text-muted text-[10px] font-bold uppercase tracking-wider ring-1 ring-white/10">
            {labels.lockedBadge}
          </span>
        </div>

        <p className="text-text-secondary text-sm leading-relaxed mb-6">
          {labels.intro}
        </p>

        {pct !== null && currentPlayers !== null && (
          <div className="mb-5">
            <div className="flex items-baseline justify-between gap-3 mb-2">
              <span className="text-text-muted text-[11px] uppercase tracking-[0.18em]">
                {labels.progressLabel}
              </span>
              <span className="text-text-secondary text-xs">
                <span className="text-primary font-bold tabular-nums">
                  {currentPlayers.toLocaleString()}
                </span>
                <span className="text-text-muted">
                  {" / "}
                  {targetPlayers.toLocaleString()} {labels.targetLabel}
                </span>
              </span>
            </div>
            <div
              className="h-2 rounded-full bg-white/[0.06] overflow-hidden ring-1 ring-white/5"
              role="progressbar"
              aria-valuenow={currentPlayers}
              aria-valuemin={0}
              aria-valuemax={targetPlayers}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary/70 to-primary transition-all"
                // Floor at 1.5% so early progress is still visible as a
                // sliver rather than an apparently empty bar.
                style={{ width: `${Math.max(pct, 1.5)}%` }}
              />
            </div>
          </div>
        )}

        <p className="text-text-secondary text-sm leading-relaxed mb-3">
          {labels.explain}
        </p>
        <p className="text-primary/90 text-sm leading-relaxed font-medium">
          {labels.helpNote}
        </p>
      </div>
    </div>
  );
}
