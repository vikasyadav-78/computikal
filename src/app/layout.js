import './globals.css';

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
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-white text-slate-900 antialiased selection:bg-brand-blue selection:text-white">
        {children}
      </body>
    </html>
  );
}
