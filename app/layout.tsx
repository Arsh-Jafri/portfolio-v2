import type { Metadata } from 'next'
import './globals.css'
import dynamic from 'next/dynamic'
import { Onest, Instrument_Serif } from 'next/font/google'

const FloatingDock = dynamic(() => import('@/components/FloatingDock'), {
  ssr: false,
})

const ScrollClamp = dynamic(() => import('@/components/ScrollClamp'), {
  ssr: false,
})

const onest = Onest({
  weight: '300', // Only using Onest Light
  subsets: ['latin'],
  variable: '--font-onest',
  display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  weight: '400', // Only using Instrument Serif Regular Italic
  subsets: ['latin'],
  style: 'italic',
  variable: '--font-instrument-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Arsh Jafri's Portfolio",
  description: "Arsh Jafri's Portfolio",
  icons: {
    icon: '/Favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${onest.variable} ${onest.className} ${instrumentSerif.variable}`}>
      <body>
        <ScrollClamp />
        {children}
        <FloatingDock />
      </body>
    </html>
  )
}

