import Layout from '../components/Layout'
import TripCard from '../components/TripCard'
import { trips } from '../content/trips'


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

