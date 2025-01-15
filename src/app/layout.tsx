import type { Metadata } from "next";
import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "YouSense - อัปเกรดประสบการณ์ด้วยเทคโนโลยีล้ำสมัย",
  description:
    "ยกระดับธุรกิจของคุณด้วยเทคโนโลยีเซ็นเซอร์อัจฉริยะและ AI จาก YouSense",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;500;600;700&family=Sarabun:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sarabun">{children}</body>
    </html>
  );
}
