import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic'
import { Providers } from "./providers";

const inter = Inter({ subsets: ['latin'] })

const NavBar = dynamic(() => import("@/components/NavBar"), {
  ssr: false,
});

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
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
