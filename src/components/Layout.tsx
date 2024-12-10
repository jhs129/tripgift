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
      <main className="container mx-auto px-4 py-8 min-h-screen bg-background">
        {children}
      </main>
      <footer className="bg-primary text-foreground-alt text-center py-4">
        <p>&copy; 2024 Doop Christmas Vacations Limited. All rights reserved.</p>
      </footer>
    </>
  )
}

