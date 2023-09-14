import Header from "@/components/Header";
import "./globals.css";
import type { Metadata } from "next";

import { Providers } from "./redux/Provider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
          <ToastContainer
            autoClose={2000}
            position="top-center"
            theme="light"
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
