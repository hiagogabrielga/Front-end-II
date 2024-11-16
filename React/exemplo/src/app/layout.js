//import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Projeto",
  description: "Aplicação simples",
  charset: 'UTF-8',
  author: 'Hiago Gabriel',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">

      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

