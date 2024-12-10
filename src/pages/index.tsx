import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import TripCard from '../components/TripCard'
import { trips } from '../content/trips'

export default function Home() {
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [password, setPassword] = useState('')
  const RELEASE_DATE = new Date('2024-12-25')
  
  useEffect(() => {
    const currentDate = new Date()
    if (currentDate >= RELEASE_DATE) {
      setIsAuthorized(true)
    }
  }, [])

  const calculateTotalPrice = (trip: typeof trips[0]): number => {
    const flightPrice = parseFloat(trip.flights.price) || 0
    const hotelPrice = parseFloat(trip.hotel.price) || 0
    return flightPrice + hotelPrice
  }

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'doop') {
      setIsAuthorized(true)
    }
  }

  if (!isAuthorized) {
    return (
      <Layout>
        <div className="space-y-8 text-center">
          <h1 className="text-4xl font-bold text-primary">
            Shhh... Santa is still working! 🎅
          </h1>
          <p className="text-xl">Come back on Christmas Day or enter the secret password:</p>
          
          <form onSubmit={handlePasswordSubmit} className="max-w-sm mx-auto space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md"
              placeholder="Enter password"
            />
            <button
              type="submit"
              className="px-6 py-2 text-white bg-primary rounded-md hover:bg-primary/80"
            >
              Submit
            </button>
          </form>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-4xl font-bold text-center text-primary">
          Ok, it's time for the presents, I mean pressence!
        </h1>
        <div className="text-xl text-center"><p>Open this gift with that glint in your eye,
pick your perfect weekend, and get ready to fly!
Three chances at "badulting," just you wait you'll and see</p>
<p>Just choose your favorite weekend to spend with me! </p></div>
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
        <div className="text-center mt-4 hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</div>
      </div>
    </Layout>
  )
}

