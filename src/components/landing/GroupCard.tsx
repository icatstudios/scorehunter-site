/**
 * A titled card that holds one themed group of rules or steps.
 *
 * The rules copy used to be one long undifferentiated bullet list, which
 * gave the reader no landmarks. Splitting it into a handful of named
 * cards, each with its own icon, turns "21 things to read" into "three
 * things to skim", and lets someone jump straight to the part they came
 * for.
 */

/** Stroke paths keyed by the group keys used in the dictionaries. */
export const GROUP_ICONS: Record<string, string> = {
  // How to play
  week: "M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  scorehunt: "M13 10V3L4 14h7v7l9-11h-7z",
  minigames:
    "M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z",
  // Game rules
  list: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  scoring:
    "M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m4 0V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10m14 0H5",
  fairplay:
    "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  // Prize rules
  who: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  delivery:
    "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0zM13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1",
  legal:
    "M12 3v18M3 7h18M6.5 7L4 13h5L6.5 7zM17.5 7L15 13h5l-2.5-6zM8 21h8",
};

/** Fallback so a new dictionary key never renders an empty icon slot. */
const FALLBACK_ICON = "M5 13l4 4L19 7";

export function GroupCard({
  icon,
  title,
  children,
}: {
  icon?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-2xl ring-1 ring-white/10 bg-white/[0.02] p-5 sm:p-6 transition-colors hover:ring-white/20 hover:bg-white/[0.035]">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-xl bg-primary/10 ring-1 ring-primary/20 text-primary flex items-center justify-center shrink-0">
          <svg
            className="w-[18px] h-[18px]"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden
          >
            <path d={icon ?? FALLBACK_ICON} />
          </svg>
        </div>
        <h4 className="text-base font-bold text-text-primary">{title}</h4>
      </div>
      {children}
    </div>
  );
}
