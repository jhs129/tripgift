import Head from 'next/head'
import Snowfall from 'react-snowfall'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>A Very Boopadoop Christmas</title>
        <meta name="description" content="A special gift of three weekend trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col relative bg-slate-200">
        <Snowfall 
          color="white"
          snowflakeCount={200}
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
            zIndex: 1000
          }}
        />
        <header className="bg-primary py-6 mb-8">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl font-bold mb-2 font-christmas">
              Merry Christmas Boopadoop! 🎄
            </h1>
          </div>
        </header>
        <main className="px-4 pb-8 flex-grow">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
        <footer className="bg-primary text-foreground-alt text-center py-4 font-christmas">
          <p>&copy; 2024 Doop Christmas Vacations Limited. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

