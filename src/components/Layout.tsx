import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Weekend Trips Gift</title>
        <meta name="description" content="A special gift of three weekend trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto px-4 py-8 min-h-screen bg-gray-50">
        {children}
      </main>
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2023 Weekend Trips Gift. All rights reserved.</p>
      </footer>
    </>
  )
}

