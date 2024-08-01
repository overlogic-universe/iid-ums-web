import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { metadataConstant } from "@/constants/metadata-constants";
import SettingsDrawerDialog from "@/components/common/settings/settings";
import CookiesConcent from "@/components/common/cookies-concent/cookie-concent";

const inter = Lexend({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = metadataConstant;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster />
        <SettingsDrawerDialog />
        <CookiesConcent/>
      </body>
    </html>
  );
}
