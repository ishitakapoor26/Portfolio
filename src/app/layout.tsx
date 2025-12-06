/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import "../styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ishita Kapoor | Emerging Leader, Innovator, Speaker",
  description:
    "Official website of Ishita Kapoor — emerging leader, innovation founder, keynote speaker, and strategic advisor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />
    </head>
      <body className="bg-white text-neutral-900 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
