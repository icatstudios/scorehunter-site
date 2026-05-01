import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const alignment =
    align === "center" ? "items-center text-center" : "items-start text-left";
  return (
    <div className={`flex flex-col gap-3 ${alignment} ${className}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-semibold uppercase tracking-[0.2em] ring-1 ring-primary/20">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary tracking-tight max-w-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-secondary text-base sm:text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
