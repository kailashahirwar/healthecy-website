import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { CookieBanner } from "@/components/cookie-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: {
    default: "Healthecy | Healthcare, Made Easier",
    template: "%s | Healthecy",
  },
  description:
    "From medical consultation and treatment coordination to rehabilitation, clinical nutrition, mental wellbeing and lifestyle support, Healthecy brings the right care together around your healthcare journey.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${manrope.variable}`} data-scroll-behavior="smooth">
      <body className="flex min-h-screen flex-col bg-background font-sans antialiased text-[#0a0a0a]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieBanner />
      </body>
    </html>
  );
}
