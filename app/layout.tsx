import "./global.css";
import { GeistSans } from "geist/font/sans";
import type { ReactNode } from "react";
import { Providers } from "./providers";
import { Metadata } from "next";

export const metadata = {
  title: "Adastra 使用手冊",
  description:
    "這是 Adastra 的使用手冊，您可以在這裡找到所有如何使用 Adastra 的資訊。",
  image: "/logo.png",
} as Metadata;

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="flex min-h-screen flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
