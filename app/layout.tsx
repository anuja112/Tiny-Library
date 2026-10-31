import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Tiny Library",
  description: "A simple library management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body 
        className={inter.className}
      > <Navbar />
        {children}
      </body>
    </html>
  );
}
