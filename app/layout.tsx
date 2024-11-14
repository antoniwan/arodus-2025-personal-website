import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { textFont } from "@/utility/fonts";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Antonio Rodriguez 🇵🇷",
    default: "Antonio Rodriguez 🇵🇷",
  },
  description:
    "Enjoyer of Learning and Getting Things Done, Parent, Technical Program Manager, Web Developer, Product Leader, Amateur Philosopher, Striving for Health, Consciousness, Strength, and Self-Transcendence ✨",
  keywords: [
    "portfolio",
    "technical program manager",
    "web developer",
    "amateur philosopher",
    "creative projects",
    "web applications",
    "react",
    "nextjs",
    "team building",
    "project management",
    "engineering management",
    "digital marketing",
    "digital marketing technologies",
    "javascript",
  ],
  openGraph: {
    images: ["/share-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <body
        className={`${textFont.className} antialiased bg-white dark:bg-stone-950 text-black dark:text-white`}
      >
        <div className="animated-colors">
          <Navigation />
        </div>
        <main className="container mx-auto mb-12">
          <div className="mx-8">{children}</div>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
