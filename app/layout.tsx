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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body
        className={`${textFont.className} antialiased bg-white dark:bg-stone-950 text-black dark:text-white`}
      >
        <div className="animated-colors">
          <Navigation />
        </div>
        <main className="container mx-auto">
          <div className="mx-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
