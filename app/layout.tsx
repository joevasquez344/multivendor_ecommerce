// Next.js
import type { Metadata } from "next";
import { Inter, Barlow, Geist } from "next/font/google";

// Global CSS
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// Fonts
const interFont = Inter({ subsets: ["latin"] });
const barlowFont = Barlow({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "GoShop",
  description:
    "Welcome to GoShop, your ultimate destination for seamless online shopping? Discover a vast...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("h-full antialiased", "font-sans", geist.variable)}>
      <body className={`${interFont.className} ${barlowFont.variable} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
