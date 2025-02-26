import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Milestone X",
  description: "Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(dmSans.className, "antialiased")}
        style={{
          backgroundColor: '#000000',
          zIndex: -10
        }}
      >{children}</body>
    </html>
  );
}
