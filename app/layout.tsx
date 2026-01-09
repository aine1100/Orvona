import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/custom-cursor";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "K&C Design | Integrated Architecture & Engineering",
  description: "Georgia-based multidisciplinary firm providing coordinated architecture, engineering, and consulting services nationwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} font-dm-sans antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
