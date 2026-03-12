import type { Metadata } from 'next'
import { Syne, DM_Sans, IBM_Plex_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CustomCursor } from '@/components/custom-cursor'
import './globals.css'

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '600', '700', '800'],
})
const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500'],
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Alae Ibnou Cheikh | CS Student & AI Developer',
  description: 'Portfolio of Alae Ibnou Cheikh - Computer Science student specialising in AI and Data Analysis. Building data-driven solutions and digital products.',
  icons: {
    icon: '/portfolio-icon.svg',
    shortcut: '/portfolio-icon.svg',
    apple: '/portfolio-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
        <body className={`${syne.variable} ${dmSans.variable} ${ibmPlexMono.variable} font-sans antialiased`}>
        <CustomCursor />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
