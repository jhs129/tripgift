import Head from 'next/head'
import Image from 'next/image'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Boopmas.org |A Very Boopadoop Christmas</title>
        <meta name="description" content="A special gift of three weekend trips" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="bg-primary py-6 mb-8">
          <div className="container mx-auto text-center text-light md:flex md:items-center lg:gap-16">
            <div className="px-4">
              <Image
                src="/images/boopmas.png"
                alt="Boopmas.org"
                width={125}
                height={100}
                className="mx-auto md:mx-0"
                priority
              />
            </div>
            <h1 className="text-3xl md:text-6xl font-bold mb-2 font-christmas md:block">
              Merry Christmas Boopadoop!
            </h1>
          </div>
        </header>
        <main className="container mx-auto px-4 pb-8 flex-grow bg-background">
          {children}
        </main>
        <footer className="bg-primary text-foreground-alt text-center py-4 font-christmas">
          <p>&copy; 2024 Doop Christmas Vacations Limited. All rights reserved.</p>
        </footer>
      </div>
    </>
  )
}

