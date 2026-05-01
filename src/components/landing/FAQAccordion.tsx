"use client";

import { useState } from "react";

export interface FAQItem {
  q: string;
  a: string;
}

export function FAQAccordion({
  items,
  defaultOpenIndex = -1,
}: {
  items: FAQItem[];
  defaultOpenIndex?: number;
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`glass-card overflow-hidden transition-colors ${
              isOpen ? "bg-primary/[0.04]" : ""
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-white/[0.02] transition-colors"
            >
              <span className="flex-1 text-text-primary font-medium text-base">
                {item.q}
              </span>
              <span
                className={`shrink-0 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                  isOpen
                    ? "bg-primary/20 text-primary rotate-45"
                    : "bg-white/5 text-text-secondary"
                }`}
              >
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 5v14m-7-7h14"
                  />
                </svg>
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="px-5 sm:px-6 pb-5 text-text-secondary text-sm leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
