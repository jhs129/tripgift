import Layout from '../components/Layout'
import TripCard from '../components/TripCard'

const trips = [
  {
    id: 'vegas',
    title: 'What Happens in Vegas',
    image: '/images/vegas-hero.webp',
    description: 'What happens in Vegas stays in Vegas.'
  },
  {
    id: 'newmexico',
    title: 'Albuquerque & Santa Fe',
    image: '/images/nm-hero.webp',
    description: 'Discover Adventure and Native American Culture'
  },
  {
    id: 'jackson',
    title: 'Why O Ming!',
    image: '/images/wy-hero.jpg',
    description: 'Weekend Getaway in Jackson Hole'
  }
]

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center">Choose Your Adventure</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {trips.map((trip) => (
            <TripCard key={trip.id} {...trip} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

