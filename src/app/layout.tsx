import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { NavigationMenuBar } from "@/components/navigation-menu-bar";

const inter = Lexend({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "Home IID 2024 - UMS",
  description:
    "The Creative Synergy of Young Investors Encourage Innovation for Human Life and Well-being - International Innovation Day 2024 - UMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavigationMenuBar/>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
