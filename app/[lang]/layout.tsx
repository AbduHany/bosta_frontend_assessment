import "../globals.css";
import { cairo, poppins } from "../fonts";
import { ConfigProvider } from "antd";

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
        {/* Antd Configuration */}
        <ConfigProvider
          theme={{
            token: { colorPrimary: "#0098A5" },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
