import Layout from '../components/Layout'
import TripCard from '../components/TripCard'

const trips = [
  {
    id: 'paris',
    title: 'Romantic Paris Getaway',
    image: '/images/paris.jpg',
    description: 'Experience the city of love with your special someone.'
  },
  {
    id: 'beach',
    title: 'Relaxing Beach Retreat',
    image: '/images/beach.jpg',
    description: 'Unwind and rejuvenate on pristine sandy beaches.'
  },
  {
    id: 'mountain',
    title: 'Mountain Adventure',
    image: '/images/mountain.jpg',
    description: 'Embark on an exciting journey through breathtaking landscapes.'
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

