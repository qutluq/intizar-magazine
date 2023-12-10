import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Интизар журнали',
  description: 'Аяллар журнали',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
