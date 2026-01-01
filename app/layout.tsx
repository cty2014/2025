import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "WiseVenture | AI Startup & Fintech Investment Fund",
  description: "WiseVenture provides zero-to-one capital and hands-on tech advisory for AI Native founders in Taiwan. We specialize in Bitfinex Lending strategies and AI infrastructure.",
  openGraph: {
    title: "WiseVenture | AI Startup & Fintech Investment Fund",
    description: "WiseVenture provides zero-to-one capital and hands-on tech advisory for AI Native founders in Taiwan. We specialize in Bitfinex Lending strategies and AI infrastructure.",
    url: "https://wisecom.biz",
    siteName: "WiseVenture",
    images: [
      {
        url: "https://wisecom.biz/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WiseVenture - AI Startup & Fintech Investment Fund",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WiseVenture | AI Startup & Fintech Investment Fund",
    description: "WiseVenture provides zero-to-one capital and hands-on tech advisory for AI Native founders in Taiwan. We specialize in Bitfinex Lending strategies and AI infrastructure.",
    images: ["https://wisecom.biz/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
