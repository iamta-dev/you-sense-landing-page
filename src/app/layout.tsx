import type { Metadata } from 'next';
import { Prompt, Itim } from 'next/font/google';
import "~/styles/globals.css";

// Font configuration
const prompt = Prompt({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  display: 'swap',
  variable: '--font-prompt',
});

const itim = Itim({
  weight: ['400'],
  subsets: ['thai', 'latin'],
  display: 'swap',
  variable: '--font-itim',
});

// Metadata configuration
export const metadata: Metadata = {
  title: 'ONSAT - ระบบชำระเงินออนไลน์ที่คุณไว้วางใจ',
  description: 'ระบบรับเงินโดเนทอัจฉริยะ ที่สตรีมเมอร์ไว้วางใจ พร้อมระบบแจ้งเตือนอัตโนมัติ และรายงานสรุปที่ดูง่าย',
  keywords: 'payment gateway, donation, streamer, online payment, Thailand',
  authors: [{ name: 'ONSAT' }],
  creator: 'ONSAT',
  publisher: 'ONSAT',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="th" 
      className={`${prompt.variable} ${itim.variable}`}
      suppressHydrationWarning
    >
      <body className={`
        min-h-screen
        font-[Prompt]
        antialiased
        bg-white
        text-gray-900
        selection:bg-[#40BFB4]/30
        `}
      >
        {children}
        
        {/* Analytics Script (เพิ่มในอนาคต) */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics หรือ Script อื่นๆ */}
          </>
        )}
      </body>
    </html>
  );
}