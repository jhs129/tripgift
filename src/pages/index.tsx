import Layout from '../components/Layout'
import TripCard from '../components/TripCard'
import { trips } from '../content/trips'

export default function Home() {
  const calculateTotalPrice = (trip: typeof trips[0]): number => {
    const flightPrice = parseFloat(trip.flights.price) || 0
    const hotelPrice = parseFloat(trip.hotel.price) || 0
    return flightPrice + hotelPrice
  }

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center text-primary">
          Choose Your Adventure
        </h1>
        <div className="grid gap-6 md:grid-cols-3">
          {trips.map((trip) => (
            <TripCard 
              key={trip.id} 
              id={trip.id}
              title={trip.title}
              image={trip.image}
              description={trip.description}
              totalPrice={calculateTotalPrice(trip)}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

