"use client";

import { useState } from "react";

interface ScoringRow {
  label: string;
  points: number;
}

interface ScoringTable {
  title: string;
  rows: ScoringRow[];
}

interface MiniGameItem {
  name: string;
  rule: string;
  points: number;
}

interface RulesTabsDict {
  // How to play
  howTitle: string;
  howIntro: string;
  howItems: string[];

  // Scoring
  scoringTitle: string;
  scoringIntro: string;
  scoringLabel: string;
  scoringTable: ScoringTable;
  rareTable: ScoringTable;
  scoringNote: string;
  miniGamesLabel: string;
  miniGamesIntro: string;
  miniGames: MiniGameItem[];

  // General rules
  generalRulesTitle: string;
  generalRulesItems: string[];

  // Rewards
  rewardsTitle: string;
  rewardsPlaceholder: string;
}

type TabKey = "how" | "scoring" | "rules" | "rewards";

const TAB_ICONS: Record<TabKey, string> = {
  how: "M13 10V3L4 14h7v7l9-11h-7z",
  scoring:
    "M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m4 0V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10m14 0H5",
  rules:
    "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  rewards:
    "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
};

function CheckBullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
      <svg
        className="shrink-0 w-5 h-5 mt-0.5 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
        />
      </svg>
      <span>{children}</span>
    </li>
  );
}

function NumberedItem({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
      <span className="shrink-0 w-6 h-6 mt-0.5 rounded-full bg-primary/10 ring-1 ring-primary/20 text-primary text-xs font-semibold flex items-center justify-center">
        {number}
      </span>
      <span>{children}</span>
    </li>
  );
}

function ScoringTableCard({ table }: { table: ScoringTable }) {
  return (
    <div className="rounded-xl ring-1 ring-white/10 overflow-hidden bg-white/[0.02]">
      <div className="px-4 py-2.5 bg-primary/10 border-b border-primary/20">
        <h5 className="text-primary text-[11px] font-bold tracking-[0.18em]">
          {table.title}
        </h5>
      </div>
      <ul className="divide-y divide-white/5">
        {table.rows.map((row, i) => (
          <li
            key={i}
            className="flex items-center justify-between gap-4 px-4 py-3"
          >
            <span className="text-text-secondary text-sm">{row.label}</span>
            <span className="text-primary font-semibold text-sm shrink-0">
              +{row.points}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniGameCard({ game }: { game: MiniGameItem }) {
  return (
    <div className="rounded-xl ring-1 ring-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center justify-between gap-3 mb-1.5">
        <h6 className="text-text-primary font-semibold text-sm">{game.name}</h6>
        <span className="text-primary font-bold text-sm shrink-0">
          +{game.points}
        </span>
      </div>
      <p className="text-text-muted text-xs leading-relaxed">{game.rule}</p>
    </div>
  );
}

function TabButton({
  active,
  iconPath,
  label,
  onClick,
}: {
  active: boolean;
  iconPath: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-selected={active}
      role="tab"
      className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
        active
          ? "bg-primary/15 text-primary ring-1 ring-primary/40 shadow-lg shadow-primary/10"
          : "bg-white/[0.02] text-text-secondary ring-1 ring-white/5 hover:bg-white/[0.04] hover:text-text-primary"
      }`}
    >
      <svg
        className="w-4 h-4 shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d={iconPath}
        />
      </svg>
      <span className="truncate">{label}</span>
    </button>
  );
}

export function RulesTabs({ dict }: { dict: RulesTabsDict }) {
  const [tab, setTab] = useState<TabKey>("how");

  const tabs: { key: TabKey; label: string }[] = [
    { key: "how", label: dict.howTitle },
    { key: "scoring", label: dict.scoringTitle },
    { key: "rules", label: dict.generalRulesTitle },
    { key: "rewards", label: dict.rewardsTitle },
  ];

  return (
    <div className="glass-card p-5 sm:p-7 lg:p-9">
      {/* Tab strip */}
      <div
        role="tablist"
        className="flex flex-wrap gap-2 mb-7 -mx-1 px-1 sm:mx-0 sm:px-0"
      >
        {tabs.map((t) => (
          <TabButton
            key={t.key}
            active={tab === t.key}
            iconPath={TAB_ICONS[t.key]}
            label={t.label}
            onClick={() => setTab(t.key)}
          />
        ))}
      </div>

      {/* Tab content */}
      <div role="tabpanel" className="min-h-[400px]">
        {tab === "how" && (
          <div>
            {dict.howIntro && (
              <p className="text-text-secondary text-sm mb-5 leading-relaxed">
                {dict.howIntro}
              </p>
            )}
            <ul className="space-y-3">
              {dict.howItems.map((item, i) => (
                <CheckBullet key={i}>{item}</CheckBullet>
              ))}
            </ul>
          </div>
        )}

        {tab === "scoring" && (
          <div>
            <h4 className="text-text-primary text-sm font-semibold tracking-wider mb-2">
              {dict.scoringLabel}
            </h4>
            {dict.scoringIntro && (
              <p className="text-text-secondary text-sm mb-5 leading-relaxed">
                {dict.scoringIntro}
              </p>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <ScoringTableCard table={dict.scoringTable} />
              <ScoringTableCard table={dict.rareTable} />
            </div>

            {dict.scoringNote && (
              <p className="text-text-muted text-xs leading-relaxed mb-7 italic">
                {dict.scoringNote}
              </p>
            )}

            <div className="border-t border-white/5 pt-6">
              <h4 className="text-text-primary text-sm font-semibold tracking-wider mb-2">
                {dict.miniGamesLabel}
              </h4>
              {dict.miniGamesIntro && (
                <p className="text-text-secondary text-sm mb-5 leading-relaxed">
                  {dict.miniGamesIntro}
                </p>
              )}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dict.miniGames.map((game, i) => (
                  <MiniGameCard key={i} game={game} />
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "rules" && (
          <ol className="space-y-3">
            {dict.generalRulesItems.map((item, i) => (
              <NumberedItem key={i} number={i + 1}>
                {item}
              </NumberedItem>
            ))}
          </ol>
        )}

        {tab === "rewards" && (
          <div className="space-y-5 text-text-secondary text-sm leading-relaxed">
            {dict.rewardsPlaceholder.split(/\n\n+/).map((para, i) => (
              <p
                key={i}
                className="relative pl-5 border-l-2 border-primary/40"
              >
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-primary"
                />
                {para}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
