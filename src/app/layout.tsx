import NavBar from '@/components/NavBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Techno vit 2023',
  description: 'Light of the Future, its AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/assets/logo.svg" sizes="any" />  
        <link rel="icon" href="/assets/logo.svg" type="image/x-icon" sizes="any"></link>      
        </head>
        <body className={inter.className}>
          <NavBar/>
          {children}
          </body>
    </html>
  )
}
