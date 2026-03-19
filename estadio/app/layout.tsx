import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paraíso Serra Negra",
  description: "Encontre as melhores hospedagens em Serra Negra",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
