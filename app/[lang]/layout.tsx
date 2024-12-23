import "../globals.css";
import { cairo, poppins } from "../fonts";

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
      <body
        className={`${
          lang === "en" ? poppins.className : cairo.className
        } antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
