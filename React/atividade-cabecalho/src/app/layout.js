import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Atividade cabeçalho",
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
      </body>

    </html>
  );
}
