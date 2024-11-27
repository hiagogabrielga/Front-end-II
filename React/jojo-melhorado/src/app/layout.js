import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Projeto-jojo-melhorado",
  description: "Esse site servirá para mostrar a minha evolução dentro de 6 meses após a criação do meu primeiro site em HTML e CSS.",
  charset: 'UTF-8',
  author: 'Hiago Gabriel',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
