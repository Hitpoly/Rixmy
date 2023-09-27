import './globals.css'
import React from 'react'
import { ReactDOM } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rixmy',
  description: 'Agencia de Marketing Internacional. Ayudamos a que marcas y empresas establescan una relacion duradera con su audiencia, convirtiendolos en embajadores',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
