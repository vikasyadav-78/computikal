import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Computikal | Web & App Development Agency',
  description: 'Computikal provides accessible, cost-effective and reliable website, web application, Android and iOS development services.',
  keywords: 'Computikal, software development agency, web development, web applications, Android app development, iOS app development, custom software',
  authors: [{ name: 'Computikal' }],
  icons: {
    icon: '/logo/logo.png',
  },
  openGraph: {
    title: 'Computikal | Web & App Development Agency',
    description: 'Computikal provides accessible, cost-effective and reliable website, web application, Android and iOS development services.',
    siteName: 'Computikal',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFFFFF',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} bg-white text-slate-900 antialiased selection:bg-brand-blue selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
