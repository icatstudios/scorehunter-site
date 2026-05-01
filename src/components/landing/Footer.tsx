import Link from "next/link";
import type { Locale } from "@/i18n/config";

interface FooterDict {
  copyright: string;
  tagline: string;
  columns: {
    product: { title: string; links: { features: string; faq: string } };
    legal: { title: string; links: { privacy: string; terms: string } };
    support: {
      title: string;
      links: { contact: string; deleteAccount: string };
    };
  };
}

export function Footer({
  dict,
  locale,
}: {
  dict: FooterDict;
  locale: Locale;
}) {
  const columns = [
    {
      title: dict.columns.product.title,
      links: [
        { href: `/${locale}/features`, label: dict.columns.product.links.features },
        { href: `/${locale}/faq`, label: dict.columns.product.links.faq },
      ],
    },
    {
      title: dict.columns.legal.title,
      links: [
        { href: `/${locale}/privacy-policy`, label: dict.columns.legal.links.privacy },
        { href: `/${locale}/terms-of-use`, label: dict.columns.legal.links.terms },
      ],
    },
    {
      title: dict.columns.support.title,
      links: [
        { href: `/${locale}/support`, label: dict.columns.support.links.contact },
        {
          href: `/${locale}/delete-account`,
          label: dict.columns.support.links.deleteAccount,
        },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-1">
            <Link href={`/${locale}`} className="text-lg font-bold tracking-tight inline-block">
              <span className="animate-shimmer">Score</span>
              <span className="text-text-primary">Hunter</span>
            </Link>
            <p className="mt-3 text-text-muted text-sm leading-relaxed max-w-xs">
              {dict.tagline}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-text-primary text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-text-secondary text-sm hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-text-muted text-xs">
          <span>{dict.copyright}</span>
          <span>iCat Studios · scorehunter.app</span>
        </div>
      </div>
    </footer>
  );
}
