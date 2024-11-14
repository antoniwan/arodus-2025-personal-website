import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { textFont } from "@/utility/fonts";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Antonio Rodríguez",
  description: "From Puerto Rico, to the World!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <SpeedInsights />
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
      </body>
    </html>
  );
}
