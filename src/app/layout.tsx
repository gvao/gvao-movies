import './styles/globals.css'
import type { Metadata } from 'next'

import Header from '@/components/header'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Gvão movies',
  description: 'Gvão movies',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className='h-full'>
      <body className='min-h-screen bg-neutral-300'>

        <Header />

        <main className='mt-12 min-h-screen'>
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}