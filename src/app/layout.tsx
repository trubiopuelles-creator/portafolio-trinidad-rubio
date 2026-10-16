import type { Metadata } from "next";
import { Inter, Fragment_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "M. Trinidad Rubio Puelles — Sistemas Microinformáticos y Redes",
  description:
    "Portafolio profesional de María Trinidad Rubio Puelles, estudiante de Sistemas Microinformáticos y Redes (SMR) apasionada por la tecnología, las redes y la seguridad informática.",
  keywords: [
    "Trinidad Rubio Puelles",
    "SMR",
    "Sistemas Microinformáticos y Redes",
    "portafolio",
    "redes",
    "seguridad informática",
  ],
  authors: [{ name: "María Trinidad Rubio Puelles" }],
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg` },
  openGraph: {
    title: "M. Trinidad Rubio Puelles — Portafolio",
    description:
      "Estudiante de Sistemas Microinformáticos y Redes (SMR). Redes, soporte técnico y seguridad informática.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${fragmentMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
