import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Figtree } from "next/font/google";
import { Poppins } from "next/font/google";
import { Providers } from "./redux/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"], weight: "800" });
const figtree = Figtree({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: "600" });

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
      <body>
        <Providers>
          <Header />
          <ToastContainer />
          {children}
        </Providers>
      </body>
    </html>
  );
}
