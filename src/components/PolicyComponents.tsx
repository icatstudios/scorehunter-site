import type { ReactNode } from "react";

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
      {children}
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-lg font-semibold text-text-primary mt-6">{children}</h3>
  );
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc list-outside pl-5 space-y-2 marker:text-primary">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function OrderedList({ items }: { items: ReactNode[] }) {
  return (
    <ol className="list-decimal list-outside pl-5 space-y-2 marker:text-primary">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ol>
  );
}

export function Strong({ children }: { children: ReactNode }) {
  return (
    <strong className="text-text-primary font-semibold">{children}</strong>
  );
}

export function Anchor({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      className="text-primary hover:underline break-words"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

export function Divider() {
  return <hr className="border-white/10" />;
}
