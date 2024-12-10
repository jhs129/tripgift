import { FaPlane, FaHotel, FaListUl } from 'react-icons/fa'

interface FlightInfo {
  departure: string
  arrival: string
  airline: string
  flightNumber: string
}

interface HotelInfo {
  name: string
  address: string
  description: string
  link: string
  image: string
}

interface TripDetailsProps {
  title: string
  image: string
  flights: {
    outbound: FlightInfo
    return: FlightInfo
  }
  hotel: HotelInfo
  activities: string[]
}

export default function TripDetails({ title, image, flights, hotel, activities }: TripDetailsProps) {
  return (
    <div className="space-y-8">
      <div className="relative w-full h-[400px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg" />
        <h1 className="absolute bottom-6 left-6 text-4xl font-bold text-white">
          {title}
        </h1>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaPlane className="mr-2" /> Flight Information
        </h2>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24">
          <div>
            <h3 className="text-xl font-medium mb-2">Outbound Flight</h3>
            <p><strong>Departure:</strong> {flights.outbound.departure}</p>
            <p><strong>Arrival:</strong> {flights.outbound.arrival}</p>
            <p><strong>Airline:</strong> {flights.outbound.airline}</p>
            <p><strong>Flight Number:</strong> {flights.outbound.flightNumber}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-2">Return Flight</h3>
            <p><strong>Departure:</strong> {flights.return.departure}</p>
            <p><strong>Arrival:</strong> {flights.return.arrival}</p>
            <p><strong>Airline:</strong> {flights.return.airline}</p>
            <p><strong>Flight Number:</strong> {flights.return.flightNumber}</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <FaHotel className="mr-2" /> Hotel
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2">
            <div className="relative  rounded-lg overflow-hidden">
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p><strong>Name:</strong> {hotel.name}</p>
            <p><strong>Address:</strong> {hotel.address}</p>
            <p><strong>Description:</strong> {hotel.description}</p>
          </div>
        </div>
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

