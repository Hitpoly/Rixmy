import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import Head from 'next/head';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rixmy - Agencia de Marketing Internacional',
  description: 'Ayudamos a marcas y empresas a establecer relaciones duraderas con sus audiencias, convirtiéndolos en embajadores. Servicios de marketing internacional.',
  keywords: 'Agencia de Marketing, Marketing Internacional, Estrategias de Marketing, Embajadores de Marca, Campañas Publicitarias, Marketing de Contenidos, Optimización de Conversión, SEO Multilingüe, Publicidad en Redes Sociales, Desarrollo de Estrategias de Marca, Consultoría de Marketing, Posicionamiento Web, Publicidad Online, Branding Internacional, Estrategias de Contenidos, Promoción de Marca, Marketing Digital, Creatividad Publicitaria, Servicios de Marketing, Agencia Digital, Innovación en Marketing, Marketing Estratégico, Gestión de Campañas, Publicidad Creativa, Estrategias Digitales, Marketing Online, Consultoría Estratégica, Marketing Global, Servicios de Publicidad.',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
      <meta http-equiv="Cache-Control" content="public, max-age=3600" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
