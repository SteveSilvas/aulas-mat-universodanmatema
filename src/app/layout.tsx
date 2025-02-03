import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientLayout from "@/components/ClientLayout"; 

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-default",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <title>Aulas com Dan Matema</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${openSans.variable} font-sans flex flex-col min-h-screen`}>
        <header className="w-full fixed top-0 left-0 z-50">
          <Header />
        </header>
        
        <ClientLayout>
          <main className="flex-grow w-full mt-[100px]">{children}</main>
        </ClientLayout>

        <Footer />
      </body>
    </html>
  );
}
