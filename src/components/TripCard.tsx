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
      <div className="bg-background rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 border">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2 text-primary">{title}</h2>
          <p className="text-foreground mb-2">{description}</p>
          <p className="text-lg font-semibold text-secondary">
            ${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </Link>
  )
}

