import "../globals.css";
import { cairo } from "../fonts";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className={`${cairo.className} antialiased`}>{children}</body>
    </html>
  );
}
