import "./globals.css";

export const metadata = {
  title: "Atividade Fake Api",
  description: "Atividade realizada e",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
