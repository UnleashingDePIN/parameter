import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const geistMono = localFont({src: "./fonts/GeistMonoVF.woff", variable: "--font-geist-mono", weight: "100 900",});

export const metadata: Metadata = {
  title: "Parameter Research",
  description: "A DePIN research and development collective."
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}