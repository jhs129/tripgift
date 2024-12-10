import Head from 'next/head'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>A very Boopadoop Christmas</title>
        <meta name="description" content="A special gift of three weekend trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="bg-primary py-6 mb-8">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-3xl font-bold mb-2">
            Merry Christmas, Boopadoop! 🎄
          </h1>
          <p className="text-christmas-gold italic">
            Three magical weekends await your choice.
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8 min-h-screen bg-background">
        {children}
        <div className="pt-8 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      </main>
      <footer className="bg-primary text-foreground-alt text-center py-4">
        <p>&copy; 2024 Doop Christmas Vacations Limited. All rights reserved.</p>
      </footer>
    </>
  )
}

