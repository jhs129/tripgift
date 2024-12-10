import Link from 'next/link'
import Image from 'next/image'

interface TripCardProps {
  id: string
  title: string
  image: string
  description: string
  totalPrice: number
}

export default function TripCard({ id, title, image, description, totalPrice }: TripCardProps) {
  return (
    <Link href={`/trip/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <p className="text-gray-600 mb-2">{description}</p>
          <p className="text-lg font-semibold text-blue-600">
            ${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </Link>
  )
}

