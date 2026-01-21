import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Molino Campestre Río Bravo - Lotes Exclusivos de 1000 m²",
  description: "Tu oportunidad de invertir en el futuro con terrenos con alta valorización. Lotes exclusivos de 1000 m² en Finca Río Bravo. Precio de lanzamiento: $70.000.000",
  keywords: ["lotes", "terrenos", "inversión", "Río Bravo", "Molino Campestre", "bienes raíces", "Colombia", "1000 m²", "finca"],
  authors: [{ name: "Riobravo" }],
  icons: {
    icon: "/favicon.ico", // Asegúrate de tener tu favicon en la carpeta public
  },
  openGraph: {
    title: "Molino Campestre Río Bravo - Lotes Exclusivos",
    description: "Oferta exclusiva de lanzamiento: Lotes de 1000 m² desde $70.000.000. Solo 3 lotes disponibles a este precio especial.",
    url: "https://molinocampestreriobravo.vercel.app",
    siteName: "Molino Campestre Río Bravo",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // Agrega una imagen Open Graph en tu carpeta public
        width: 1200,
        height: 630,
        alt: "Molino Campestre Río Bravo - Lotes Exclusivos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Molino Campestre Río Bravo - Lotes Exclusivos de 1000 m²",
    description: "Precio de lanzamiento: $70.000.000. Solo 3 lotes disponibles. Invierte en terrenos con alta valorización.",
    images: ["/og-image.jpg"], // La misma imagen que Open Graph
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
