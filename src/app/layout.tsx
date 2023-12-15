import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'

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

        <main className='mt-12 '>
          {children}
        </main>

      </body>
    </html>
  )
}