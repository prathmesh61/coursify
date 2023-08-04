import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Figtree } from "next/font/google";
const inter = Inter({ subsets: ["latin"], weight: "800" });
const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coursify",
  description: "Launch a new career",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
