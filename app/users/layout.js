import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Users',
  description: 'Generated Data',
  imageUrl: ' /Assets/Reflect.jpg',
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
        <main>{children}</main>
      </body>
    </html>
  )
}
