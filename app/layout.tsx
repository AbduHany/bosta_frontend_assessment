import type { Metadata } from "next";
import "./globals.css";
import { cairo } from "./fonts";

export const metadata: Metadata = {
  title: "Bosta Frontend Assessment",
  description: "Bosta Frontend Assessment by Abdelrahman Metawei",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cairo.className} antialiased`}>{children}</body>
    </html>
  );
}
