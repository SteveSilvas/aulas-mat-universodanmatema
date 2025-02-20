import { Open_Sans } from 'next/font/google';
import './globals.css';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ToastComponent from '@/components/Toast';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-default',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <title>Dan Matema</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${openSans.variable} font-sans flex flex-col min-h-screen`}>
        <header className="w-full fixed top-0 left-0 z-50">
          <div className="fixed z-50 right-0">
            {<ToastComponent />}
          </div>
          <Header />
          <Navbar />
        </header>
        <main className="flex-grow w-full mt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
