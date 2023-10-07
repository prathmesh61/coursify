import Header from "@/components/base/Header";
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
            style={{ width: "280px" }}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
