import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import TripDetails from '../../components/TripDetails'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const trips = {
  vegas: {
    title: 'What Happens in Vegas',
    flight: {
      departure: 'Friday, 8:00 AM',
      arrival: 'Friday, 3:00 PM',
      airline: 'Air France'
    },
    hotel: {
      name: 'Le Grand Paris',
      address: '1 Rue de la Paix, 75002 Paris, France'
    },
    activities: [
      'Visit the Eiffel Tower',
      'Explore the Louvre Museum',
      'Romantic Seine River cruise',
      'Dinner at a Michelin-starred restaurant'
    ]
  },
  newmexico: {
    title: 'Relaxing Beach Retreat',
    flight: {
      departure: 'Friday, 10:00 AM',
      arrival: 'Friday, 2:00 PM',
      airline: 'Coastal Airlines'
    },
    hotel: {
      name: 'Seaside Resort & Spa',
      address: '123 Ocean Drive, Beachtown, BT 12345'
    },
    activities: [
      'Couples massage at the hotel spa',
      'Sunset beach walk',
      'Snorkeling adventure',
      'Beachfront dinner under the stars'
    ]
  },
  jackson: {
    title: 'Mountain Adventure',
    flight: {
      departure: 'Friday, 7:00 AM',
      arrival: 'Friday, 9:00 AM',
      airline: 'Mountain Air'
    },
    hotel: {
      name: 'Alpine Lodge',
      address: '789 Peak View, Mountainville, MV 67890'
    },
    activities: [
      'Scenic hike to a hidden waterfall',
      'Couples yoga session with mountain views',
      'Gourmet picnic in the wilderness',
      'Stargazing from a private hot tub'
    ]
  }
}

export default function TripPage() {
  const router = useRouter()
  const { id } = router.query
  const trip = trips[id as keyof typeof trips]

  if (!trip) {
    return (
      <Layout>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Trip not found</h1>
          <Link href="/" className="text-blue-500 hover:underline">
            Return to homepage
          </Link>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="space-y-6">
        <Link href="/" className="inline-flex items-center text-blue-500 hover:underline">
          <FaArrowLeft className="mr-2" /> Back to All Trips
        </Link>
        <TripDetails {...trip} />
      </div>
    </Layout>
  )
}

