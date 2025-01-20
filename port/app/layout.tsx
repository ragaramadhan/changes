import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IP Change Form and Button Grid",
  description: "A Next.js app with an IP change form and a button grid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* For a dark blue background, use: bg-blue-900 */}
      <body className={`${inter.className} bg-red-400 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
