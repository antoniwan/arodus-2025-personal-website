import type { Metadata } from "next";
import { Lora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const textFont = Lora({
  subsets: ["latin"],
  display: "swap",
});

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
      <body
        className={`${textFont.className} antialiased bg-white dark:bg-black text-black dark:text-white`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
