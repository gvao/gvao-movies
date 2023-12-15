import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import { Title } from '@/components/typografy'

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
    <html lang="en">
      <body>

        <header>
          <Link href={'/'}>
            <Title>Gvão Movies</Title>
          </Link>
        </header>

        {children}

      </body>
    </html>
  )
}
