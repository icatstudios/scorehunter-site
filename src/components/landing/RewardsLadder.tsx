import { Reveal } from "./Reveal";

export interface RewardRow {
  /** "1", "2", … or a range like "6-10" */
  rank: string;
  /** Prize name. A " | " renders as an "A / B" winner's-choice pair. */
  prize: string;
  /** Small line under the prize (e.g. "Kazananın tercihi") */
  note?: string;
  /** When true, a "+ Sponsorlu Ödül" line is attached to the row. */
  sponsored?: boolean;
}

/** Splits "A | B" into its choices so we can render a visible separator. */
function Choices({ prize }: { prize: string }) {
  const parts = prize.split(" | ");
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && (
            <span className="text-text-muted font-normal mx-2">/</span>
          )}
          {p}
        </span>
      ))}
    </>
  );
}

/**
 * "+ Sponsorlu Ödül" marker. Deliberately a quiet green text line rather
 * than a filled pill: it repeats on ten consecutive rows, so a loud badge
 * turns into visual noise. Green is the site accent and stays legible on
 * the near-black background (the old purple `secondary` at low opacity
 * did not).
 */
function SponsoredLine({ label }: { label: string }) {
  // A plus glyph drawn as an icon rather than typed into the label, so the
  // same string can be reused as a plain prize name on the 11-20 row where
  // the sponsored prize IS the prize rather than an addition to one.
  return (
    <span className="inline-flex items-center gap-1.5 text-primary/90 text-xs sm:text-[13px] font-semibold">
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
        aria-hidden
      >
        <path strokeLinecap="round" d="M12 5v14M5 12h14" />
      </svg>
      {label}
    </span>
  );
}

type Tier = "gold" | "silver" | "bronze" | "plain";

const TIER = {
  gold: {
    ring: "ring-yellow-400/35",
    glow: "shadow-[0_0_50px_-18px_rgba(250,204,21,0.55)]",
    bg: "bg-gradient-to-br from-yellow-400/[0.10] via-transparent to-transparent",
    text: "text-yellow-400",
    pill: "bg-yellow-400/12 ring-yellow-400/35 text-yellow-400",
    strip: "from-yellow-400 via-yellow-400/50",
    device: "text-yellow-400/[0.09]",
  },
  silver: {
    ring: "ring-zinc-300/25",
    glow: "shadow-[0_0_40px_-20px_rgba(212,212,216,0.45)]",
    bg: "bg-gradient-to-br from-zinc-300/[0.07] via-transparent to-transparent",
    text: "text-zinc-300",
    pill: "bg-zinc-300/10 ring-zinc-300/30 text-zinc-300",
    strip: "from-zinc-300 via-zinc-300/50",
    device: "text-zinc-300/[0.07]",
  },
  bronze: {
    ring: "ring-amber-500/25",
    glow: "shadow-[0_0_40px_-20px_rgba(245,158,11,0.4)]",
    bg: "bg-gradient-to-br from-amber-500/[0.08] via-transparent to-transparent",
    text: "text-amber-500",
    pill: "bg-amber-500/10 ring-amber-500/30 text-amber-500",
    strip: "from-amber-500 via-amber-500/50",
    device: "text-amber-500/[0.07]",
  },
  // Ranks 4-5: still an individual winner, so still its own card - but no
  // medal, so no tint or glow.
  plain: {
    ring: "ring-white/10",
    glow: "",
    bg: "",
    text: "text-text-secondary",
    pill: "bg-white/[0.04] ring-white/10 text-text-secondary",
    strip: "from-white/40 via-white/15",
    device: "text-white/[0.035]",
  },
} as const;

const MEDALS: Tier[] = ["gold", "silver", "bronze"];

/**
 * Prize ladder. Reading order stays a strict 1 → 20 (no podium
 * reordering): hierarchy comes from size, tint and glow instead, which
 * also means long product names get the full column width.
 */
export function RewardsLadder({
  rows,
  sponsoredLabel,
}: {
  rows: RewardRow[];
  sponsoredLabel: string;
}) {
  // Single ranks ("4") are one named winner and each gets its own card.
  // Ranges ("6-10") cover a band of players and are grouped in one panel,
  // so the two kinds of entry don't read as the same thing.
  const singles = rows.filter((r) => !r.rank.includes("-"));
  const ranges = rows.filter((r) => r.rank.includes("-"));

  return (
    <div className="space-y-3">
      {singles.map((row, i) => (
        <Reveal key={row.rank} delay={i * 70}>
          <FeatureRow
            row={row}
            tier={MEDALS[i] ?? "plain"}
            isWinner={i === 0}
            sponsoredLabel={sponsoredLabel}
          />
        </Reveal>
      ))}

      {ranges.length > 0 && (
        <Reveal delay={singles.length * 70} className="!mt-5">
        <div className="rounded-2xl ring-1 ring-white/10 overflow-hidden bg-white/[0.02]">
          <ul className="divide-y divide-white/5">
            {ranges.map((row) => (
              <CompactRow
                key={row.rank}
                row={row}
                sponsoredLabel={sponsoredLabel}
              />
            ))}
          </ul>
        </div>
        </Reveal>
      )}
    </div>
  );
}

// Descending emphasis: the winner is the loudest, medals sit a step down,
// and the medal-less individual ranks a step below that - so the ladder
// still reads top-down even where the tint stops changing.
const SIZE = {
  lg: {
    pad: "px-5 sm:px-7 py-6 sm:py-7",
    pill: "w-12 h-12 text-xl",
    prize: "text-xl sm:text-2xl",
    watermark: "text-[7rem]",
  },
  md: {
    pad: "px-5 sm:px-6 py-5",
    pill: "w-10 h-10 text-base",
    prize: "text-base sm:text-lg",
    watermark: "text-[5rem]",
  },
  sm: {
    pad: "px-5 py-4",
    pill: "w-9 h-9 text-sm",
    prize: "text-[15px] sm:text-base",
    watermark: "text-[3.5rem]",
  },
} as const;

function FeatureRow({
  row,
  tier,
  isWinner,
  sponsoredLabel,
}: {
  row: RewardRow;
  tier: Tier;
  isWinner: boolean;
  sponsoredLabel: string;
}) {
  const t = TIER[tier];
  const s = SIZE[isWinner ? "lg" : tier === "plain" ? "sm" : "md"];

  return (
    <div
      className={`relative overflow-hidden rounded-2xl ring-1 ${t.ring} ${t.glow} ${t.bg} bg-white/[0.02] ${s.pad}`}
    >
      {/* Leading-edge light strip, brightest at the top and fading out. */}
      <span
        aria-hidden
        className={`absolute start-0 inset-y-0 w-[3px] bg-gradient-to-b to-transparent ${t.strip}`}
      />

      {/* Only the winner sweeps - on every card it would be restless. */}
      {isWinner && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent animate-prize-sweep"
        />
      )}
      {/* Oversized rank digit behind the content - the same device the
          How-it-works step cards use, so the page stays on-brand. */}
      <span
        aria-hidden
        dir="ltr"
        className={`absolute -top-2 end-3 font-bold leading-none select-none ${t.device} ${s.watermark}`}
      >
        {row.rank}
      </span>

      <div className="relative flex items-center gap-4">
        <span
          className={`shrink-0 inline-flex items-center justify-center rounded-xl font-bold ring-1 ${t.pill} ${s.pill}`}
        >
          {row.rank}
        </span>

        <div className="min-w-0 flex-1 pe-14 sm:pe-20">
          <div
            className={`text-text-primary font-bold leading-snug text-balance ${s.prize}`}
          >
            <Choices prize={row.prize} />
          </div>
          {row.note && (
            <div className="text-text-muted text-xs sm:text-[13px] mt-1.5">
              {row.note}
            </div>
          )}
          {row.sponsored && (
            <div className="mt-2">
              <SponsoredLine label={sponsoredLabel} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function CompactRow({
  row,
  sponsoredLabel,
}: {
  row: RewardRow;
  sponsoredLabel: string;
}) {
  // Rows with no note and no sponsored line are a single line of text, so
  // top-aligning them leaves the label floating above the rank pill.
  // Centre those; keep multi-line rows top-aligned.
  const singleLine = !row.note && !row.sponsored;

  return (
    <li
      className={`flex gap-3 sm:gap-4 px-4 sm:px-5 py-4 ${
        singleLine ? "items-center" : "items-start"
      }`}
    >
      <span
        className={`shrink-0 inline-flex items-center justify-center h-9 rounded-lg text-sm font-bold ring-1 ring-white/10 bg-white/[0.04] text-text-secondary ${
          row.rank.includes("-") ? "px-2.5 min-w-[3.75rem]" : "w-9"
        }`}
      >
        {row.rank}
      </span>

      <div className="min-w-0 flex-1">
        <div className="text-text-primary font-semibold text-sm sm:text-[15px] leading-snug">
          <Choices prize={row.prize} />
        </div>
        {row.note && (
          <div className="text-text-muted text-[11px] sm:text-xs mt-1">
            {row.note}
          </div>
        )}
        {row.sponsored && (
          <div className="mt-1.5">
            <SponsoredLine label={sponsoredLabel} />
          </div>
        )}
      </div>
    </li>
  );
}
