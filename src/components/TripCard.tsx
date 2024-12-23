import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

interface TripCardProps {
  id: string
  title: string
  image: string
  description: string
  totalPrice: number
}

export default function TripCard({ id, title, image, description, totalPrice }: TripCardProps) {
  const [isUnwrapped, setIsUnwrapped] = useState(false)
  const [isRotating, setIsRotating] = useState(false)

  const handleUnwrap = () => {
    setIsRotating(true)
    setTimeout(() => {
      setIsUnwrapped(true)
    }, 300)
  }

  if (!isUnwrapped) {
    return (
      <div 
        onClick={handleUnwrap}
        className={`bg-background rounded-lg shadow-md overflow-hidden border cursor-pointer
          transition-all duration-600 hover:scale-105
          ${isRotating ? 'rotate-y-180 opacity-0' : ''}`}
      >
        <div className="relative h-48">
          <Image
            src="/images/present-2.png"
            alt="Wrapped Present"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="p-4 text-center">
          <p className="text-lg font-semibold text-primary font-christmas">Click to unwrap your surprise!</p>
        </div>
      </div>
    )
  }

  return (
    <Link href={`/trip/${id}`} className="block">
      <div className={`bg-background rounded-lg shadow-md overflow-hidden 
        transition-all duration-600 hover:scale-105 border
        ${!isRotating ? 'rotate-y-0' : 'rotate-y-180'}`}
      >
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="p-4 font-raleway">
          <h2 className="text-2xl font-semibold mb-2 text-primary font-christmas">{title}</h2>
          <p className="text-foreground mb-2 text-xl">{description}</p>
          <p className="text-lg font-semibold text-secondary hidden">
            ${totalPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
          </p>
        </div>
      </div>
    </Link>
  )
}

