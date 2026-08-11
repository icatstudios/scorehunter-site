"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades and lifts its children into view the first time they cross the
 * viewport.
 *
 * Renders visible on the server, so the content is present for crawlers
 * and for anyone without JS; the hidden state is only applied after mount
 * and only to elements that are still below the fold, which means nothing
 * the reader can already see ever flashes.
 *
 * Honours prefers-reduced-motion by skipping the animation entirely.
 */
export function Reveal({
  children,
  /** Stagger offset in ms, for animating a list one item after another. */
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // `null` = server / pre-mount, render plainly with no animation classes.
  const [state, setState] = useState<null | "hidden" | "shown">(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      setState("shown");
      return;
    }

    // Already on screen at mount: show it without animating, so above-fold
    // content never blinks out and back in during hydration.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      setState("shown");
      return;
    }

    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const motion =
    state === null
      ? ""
      : state === "hidden"
        ? "opacity-0 translate-y-5"
        : "opacity-100 translate-y-0";

  return (
    <div
      ref={ref}
      className={`${state !== null ? "transition-all duration-700 ease-out" : ""} ${motion} ${className}`}
      style={state === "hidden" ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
