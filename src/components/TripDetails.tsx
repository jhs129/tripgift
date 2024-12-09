import { FaPlane, FaHotel, FaListUl } from 'react-icons/fa'

interface TripDetailsProps {
  title: string
  flight: {
    departure: string
    arrival: string
    airline: string
  }
  hotel: {
    name: string
    address: string
  }
  activities: string[]
}

export default function TripDetails({ title, flight, hotel, activities }: TripDetailsProps) {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center">{title}</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaPlane className="mr-2" /> Flight Information
        </h2>
        <p><strong>Departure:</strong> {flight.departure}</p>
        <p><strong>Arrival:</strong> {flight.arrival}</p>
        <p><strong>Airline:</strong> {flight.airline}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaHotel className="mr-2" /> Hotel
        </h2>
        <p><strong>Name:</strong> {hotel.name}</p>
        <p><strong>Address:</strong> {hotel.address}</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaListUl className="mr-2" /> Key Activities
        </h2>
        <ul className="list-disc pl-5">
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

