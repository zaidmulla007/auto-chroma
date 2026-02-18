import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Rukn Al Alwan | Auto Paints & Spare Parts Trading LLC - Sharjah, UAE",
    template: "%s | Rukn Al Alwan",
  },
  description:
    "Rukn Al Alwan Auto Paints & Spare Parts Trading LLC - Leading supplier of automotive and industrial paints, coatings, and accessories in Sharjah, UAE. Authorized distributors of Nexa Autocolor, Sigma, Jotun, Hempel Paints & AutoChroma.",
  keywords: [
    "auto paints",
    "automotive paints",
    "industrial paints",
    "spare parts",
    "Sharjah",
    "UAE",
    "Rukn Al Alwan",
    "AutoChroma",
    "Pure Care",
    "Nexa Autocolor",
    "Sigma Paints",
    "Jotun",
    "Hempel",
    "car paint",
    "refinish",
    "coatings",
  ],
  openGraph: {
    title: "Rukn Al Alwan | Auto Paints & Spare Parts Trading LLC",
    description:
      "Leading supplier of automotive and industrial paints, coatings, and accessories in Sharjah, UAE.",
    type: "website",
    locale: "en_AE",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
