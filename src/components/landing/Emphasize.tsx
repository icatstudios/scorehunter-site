import { Fragment } from "react";

// Numbers carry most of the meaning in the rules copy ("10 ana tahmin",
// "2X joker", "90 dakika", "%20"), so pulling them out of the sentence
// gives the eye something to scan. Matches an optional leading percent
// (Turkish writes "%20"), digits with thousands/decimal separators, and an
// optional trailing X or % (English writes "20%").
const NUMERIC = /(%?\d[\d.,]*(?:\s?[X×%])?)/g;

/**
 * Renders text with numeric tokens highlighted in the brand accent.
 * Everything else passes through untouched, so translations stay intact
 * and no locale needs markup baked into its strings.
 */
export function Emphasize({ text }: { text: string }) {
  const parts = text.split(NUMERIC);
  return (
    <>
      {parts.map((part, i) =>
        // split() with one capture group puts matches at odd indices.
        i % 2 === 1 ? (
          <span key={i} className="text-primary font-semibold tabular-nums">
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
