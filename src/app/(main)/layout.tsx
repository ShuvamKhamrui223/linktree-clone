import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import ProviderWrapper from "@/components/providers/provider-wrapper";
import Footer from "@/components/ui/layout/footer";
import Navbar from "@/components/ui/layout/navbar";
import { seoConfig } from "@/constants/meta-info";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

const fontMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: `${seoConfig.publicPages.homepage.title} | NextBio`,
    template: `${seoConfig.publicPages.homepage.title} | NextBio`,
  },
  description: seoConfig.publicPages.homepage.description,
};

export default function AppLayout({ children }: LayoutProps<"/">) {
  return (
    <ProviderWrapper>
      <html
        lang="en"
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        <body className="flex flex-col text-on-surface bg-surface antialiased">
          <Navbar />
          <main className="min-h-svh">{children}</main>
          <Footer />
        </body>
      </html>
    </ProviderWrapper>
  );
}
