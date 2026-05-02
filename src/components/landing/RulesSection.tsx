import { SectionHeading } from "./SectionHeading";
import { RulesTabs } from "./RulesTabs";

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

interface RulesDict {
  eyebrow: string;
  title: string;

  // Tab 1: Nasıl oynanır?
  howTitle: string;
  howIntro: string;
  howItems: string[];

  // Tab 2: Puanlama
  scoringTitle: string;
  scoringIntro: string;
  scoringLabel: string;
  scoringTable: ScoringTable;
  rareTable: ScoringTable;
  scoringNote: string;
  miniGamesLabel: string;
  miniGamesIntro: string;
  miniGames: MiniGameItem[];

  // Tab 3: Kurallar
  generalRulesTitle: string;
  generalRulesItems: string[];

  // Tab 4: Ödüller
  rewardsTitle: string;
  rewardsPlaceholder: string;
}

export function RulesSection({ dict }: { dict: RulesDict }) {
  return (
    <section
      id="how-to-play"
      className="relative py-20 sm:py-28 px-4 sm:px-6 scroll-mt-20"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading eyebrow={dict.eyebrow} title={dict.title} />

        <div className="mt-14">
          <RulesTabs dict={dict} />
        </div>
      </div>
    </section>
  );
}
