import Link from 'next/link'
import Image from 'next/image'

interface TripCardProps {
  id: string
  title: string
  image: string
  description: string
}

export default function TripCard({ id, title, image, description }: TripCardProps) {
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
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  )
}

