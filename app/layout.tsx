import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariele Marques · Mentoria de Recolocação de Carreira",
  description:
    "Mentoria especializada em recolocação de carreira com método estruturado. Certificada Gupy Experts. Fundadora da MAM Consultoria.",
  openGraph: {
    title: "Mariele Marques · Mentoria de Recolocação de Carreira",
    description:
      "Mentoria especializada em recolocação de carreira com método estruturado. Certificada Gupy Experts.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" data-theme="mariele">
      <body>{children}</body>
    </html>
  );
}
