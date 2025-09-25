import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Club de Lucha Massanassa - Jiujitsu, Capoeira, Kick Boxing, MMA, Grappling y Musculación",
  description: "Club de Lucha Massanassa, con más de 20 años de experiencia en Jiujitsu Brasileno, Capoeira, Kick Boxing, MMA, Grappling y sala de musculación completa. Ofrecemos programas para todas las edades en un ambiente profesional y seguro.",
  keywords: ["jiujitsu brasileno", "capoeira", "kick boxing", "MMA", "grappling", "musculacion", "fitness", "artes marciales", "Massanassa", "Valencia", "deporte", "defensa personal", "entrenamiento", "niños", "juveniles", "adultos", "gimnasio"],
  authors: [{ name: "Club de Lucha Massanassa" }],
  openGraph: {
    title: "Club de Lucha Massanassa - Artes Marciales y Fitness",
    description: "Formando campeones en Jiujitsu, Capoeira, Kick Boxing, MMA, Grappling y Musculación con disciplina, respeto y pasión desde 2003",
    url: "https://clubdeluchamassanassa.com",
    siteName: "Club de Lucha Massanassa",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Club de Lucha Massanassa - Artes Marciales y Fitness",
    description: "Formando campeones en Jiujitsu, Capoeira, Kick Boxing, MMA, Grappling y Musculación con disciplina, respeto y pasión desde 2003",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Script src="/js/main.js" strategy="afterInteractive" />
        <Toaster />
      </body>
    </html>
  );
}
