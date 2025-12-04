import type { Metadata } from 'next';
import { Almarai } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const almarai = Almarai({
  variable: '--font-almarai',
  weight: ['300', '400', '700', '800'],
  subsets: ['arabic'],
});

export const metadata: Metadata = {
  title: 'مناحل الثنيان',
  description: 'أعسال طبيعية مكفولة من انتاج مناحلنا',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'مناحل الثنيان',
    description: 'أعسال طبيعية مكفولة من انتاج مناحلنا',
    siteName: 'مناحل الثنيان',
    images: [
      {
        url: '/Logo.png', // ضع الصورة هنا
        width: 1200,
        height: 630,
        alt: 'مناحل الثنيان',
      },
    ],
    locale: 'ar_AR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${almarai.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
