import type { Metadata } from "next";
import { Inter, Source_Serif_4, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import ProviderWrapper from "@/components/providers/provider-wrapper";
import Image from "next/image";
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
    absolute:"Authentication page | NextBio",
    template: "%s | NextBio",
  },
};

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <ProviderWrapper>
      <html
        lang="en"
        className={`${fontSans.variable} ${fontSerif.variable} ${fontMono.variable} antialiased`}
      >
        <body className="min-h-dvh grid grid-cols-1 lg:grid-cols-2 grid-rows-1">
          <div className="relative h-svh hidden lg:block">
            <Image
              src={"/images/auth-screen.svg"}
              alt="auth screen side image"
              fill
              loading="eager"
              className="object-contain size-full scale-90"
            />
          </div>
          <div className="h-full p-5 flex items-center justify-center">{children}</div>
        </body>
      </html>
    </ProviderWrapper>
  );
}
