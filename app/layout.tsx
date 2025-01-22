import "./global.css";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Providers } from "./providers";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Adastra 使用手冊",
  description:
    "這是 Adastra 的使用手冊，您可以在這裡找到所有如何使用 Adastra 的資訊。",
  image: "/logo.png",
} as Metadata;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="flex min-h-screen flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
