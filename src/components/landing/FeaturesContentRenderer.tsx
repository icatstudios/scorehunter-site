import { FeatureBlock, FeatureNote } from "./FeatureBlock";

// Icons live here so every locale's content file stays string-only and the
// /features page renders identically across translations.
const iconClass = "w-7 h-7";

function IconScoreHunt() {
  return (
    <svg
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <path strokeLinecap="round" d="M12 1.5v3m0 15v3M1.5 12h3m15 0h3" />
    </svg>
  );
}

function IconMiniGames() {
  return (
    <svg
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 3l1.5 4L11 8.5 6.5 10 5 14l-1.5-4L-1 8.5 3.5 7 5 3z"
        transform="translate(3 0)"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 13l1 2.5L20.5 17 18 18l-1 2.5L16 18l-2.5-1L16 15.5 17 13z"
      />
    </svg>
  );
}

function IconLeagues() {
  return (
    <svg
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m3-5.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a3 3 0 100-6 3 3 0 000 6zm-9 0a3 3 0 100-6 3 3 0 000 6z"
      />
    </svg>
  );
}

function IconTrophies() {
  return (
    <svg
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 21h8m-4-4v4m-6-9V5h12v7a6 6 0 11-12 0zM6 5H3a3 3 0 003 5m12-5h3a3 3 0 01-3 5"
      />
    </svg>
  );
}

function IconLive() {
  return (
    <svg
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 12h3l3-9 4 18 3-9h5"
      />
    </svg>
  );
}

function IconPro() {
  return (
    <svg
      className={iconClass}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.539-1.118l1.519-4.674a1 1 0 00-.363-1.118L2.075 10.1c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.521-4.673z"
      />
    </svg>
  );
}

interface FeatureSectionData {
  title: string;
  intro: string;
  bullets: string[];
}

export interface FeaturesData {
  scoreHunt: FeatureSectionData;
  miniGames: FeatureSectionData;
  leagues: FeatureSectionData;
  trophies: FeatureSectionData;
  liveMatch: FeatureSectionData;
  pro: FeatureSectionData;
  note: { title: string; paragraphs: string[] };
}

export function FeaturesContentRenderer({ data }: { data: FeaturesData }) {
  return (
    <div className="space-y-6">
      <FeatureBlock
        icon={<IconScoreHunt />}
        title={data.scoreHunt.title}
        intro={data.scoreHunt.intro}
        bullets={data.scoreHunt.bullets}
      />
      <FeatureBlock
        icon={<IconMiniGames />}
        title={data.miniGames.title}
        intro={data.miniGames.intro}
        bullets={data.miniGames.bullets}
      />
      <FeatureBlock
        icon={<IconLeagues />}
        title={data.leagues.title}
        intro={data.leagues.intro}
        bullets={data.leagues.bullets}
      />
      <FeatureBlock
        icon={<IconTrophies />}
        title={data.trophies.title}
        intro={data.trophies.intro}
        bullets={data.trophies.bullets}
      />
      <FeatureBlock
        icon={<IconLive />}
        title={data.liveMatch.title}
        intro={data.liveMatch.intro}
        bullets={data.liveMatch.bullets}
      />
      <FeatureBlock
        icon={<IconPro />}
        title={data.pro.title}
        intro={data.pro.intro}
        bullets={data.pro.bullets}
      />
      <FeatureNote
        title={data.note.title}
        paragraphs={data.note.paragraphs}
      />
    </div>
  );
}
