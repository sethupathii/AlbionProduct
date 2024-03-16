import { Inter } from 'next/font/google'
import Head from 'next/head'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create metaData',
  description: 'App',
  imageUrl: '/Assets/newone.gif',
}

export default function RootLayout({ children, header, footer }) {
  return (
    <html lang="en">
      <Head>
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={metadata.imageUrl} />
      </Head>
      <body className={inter.className}>
        <header style={{ position: 'fixed', top: '0px' }}>{header}</header>
        <main>{children}</main>
        <footer style={{ position: 'fixed', bottom: '0px' }}>{footer}</footer>
      </body>
    </html>
  )
}
