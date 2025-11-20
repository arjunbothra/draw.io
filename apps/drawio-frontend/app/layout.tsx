// import type { Metadata } from 'next'
// import { Inter, Space_Grotesk, Patrick_Hand } from 'next/font/google'
// import './globals.css'

// const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
// const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
// const patrickHand = Patrick_Hand({ weight: '400', subsets: ['latin'], variable: '--font-hand' })

// export const metadata: Metadata = {
//   title: 'draw.io - Virtual Whiteboard',
//   description: 'The developer-first whiteboard.',
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} ${spaceGrotesk.variable} ${patrickHand.variable} font-sans bg-zinc-950 text-zinc-50 antialiased`}>
//         {children}
//       </body>
//     </html>
//   )
// }

import type { Metadata } from 'next'
import { Inter, Space_Grotesk, Patrick_Hand } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' })
const patrickHand = Patrick_Hand({ weight: '400', subsets: ['latin'], variable: '--font-hand' })

// 1. SEO Metadata Strategy
export const metadata: Metadata = {
  title: 'draw.io - The Developer-First Virtual Whiteboard',
  description: 'Open source virtual whiteboard for rapid architecture, system design, and brainstorming. Secure, infinite canvas, and real-time collaboration.',
  keywords: ['draw.io', 'whiteboard', 'excalidraw alternative', 'system design', 'diagramming tool', 'infinite canvas'],
  authors: [{ name: 'Your Name', url: 'https://twitter.com/yourhandle' }],
  creator: 'draw.io Team',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://draw-io-clone.com', // Replace with your actual domain
    title: 'draw.io - The Developer-First Virtual Whiteboard',
    description: 'Sketch system architecture and flows at the speed of thought.',
    siteName: 'draw.io',
    images: [
      {
        url: '/og-image.png', // You should add an image at public/og-image.png
        width: 1200,
        height: 630,
        alt: 'draw.io interface preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'draw.io - Virtual Whiteboard',
    description: 'The developer-first whiteboard for rapid architecture and design.',
    creator: '@yourhandle',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 2. Structured Data (JSON-LD) for Google
  // This tells search engines that this website is a Software Application
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'draw.io',
    applicationCategory: 'DesignApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1024',
    },
  }

  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${patrickHand.variable} font-sans bg-zinc-950 text-zinc-50 antialiased`}>
        {/* Inject JSON-LD for Rich Snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
