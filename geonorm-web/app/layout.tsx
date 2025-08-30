import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GeoNorm API - La API de Direcciones para América Latina',
  description: 'Estandariza, valida y enriquece direcciones postales en Colombia con una API simple, rápida y confiable.',
  keywords: ['API', 'direcciones', 'geolocalización', 'Colombia', 'normalización', 'validación'],
  authors: [{ name: 'GeoNorm' }],
  openGraph: {
    title: 'GeoNorm API',
    description: 'La API de direcciones más confiable para América Latina',
    type: 'website',
    locale: 'es_ES',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}