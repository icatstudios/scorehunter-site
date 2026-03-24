import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ScoreHunter — Coming Soon",
  description:
    "Something big is coming. Are you ready to hunt?",
  keywords: ["scorehunter", "coming soon", "mobile app", "gaming"],
  openGraph: {
    title: "ScoreHunter — Coming Soon",
    description: "Something big is coming. Are you ready to hunt?",
    url: "https://scorehunt.app",
    siteName: "ScoreHunter",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ScoreHunter - Coming Soon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ScoreHunter — Coming Soon",
    description: "Something big is coming. Are you ready to hunt?",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
