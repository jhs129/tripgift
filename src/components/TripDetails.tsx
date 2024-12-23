import { FaPlane, FaHotel, FaListUl, FaPause, FaPlay } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useRef, useState } from "react";

interface FlightInfo {
  departure: string;
  arrival: string;
  airline: string;
  flightNumber: string;
}

interface HotelInfo {
  name: string;
  address: string;
  description: string;
  link: string;
  images: string[];
  price: string;
  videoUrl?: string;
}

interface ActivityInfo {
  text: string;
  image: string;
}

interface TripDetailsProps {
  title: string;
  image: string;
  videoUrl?: string;
  flights: {
    outbound: FlightInfo;
    return: FlightInfo;
    price: string;
  };
  hotel: HotelInfo;
  activities: ActivityInfo[];
}

export default function TripDetails({
  title,
  image,
  videoUrl,
  flights,
  hotel,
  activities,
}: TripDetailsProps) {
  const totalPrice =
    (parseFloat(flights.price) || 0) + (parseFloat(hotel.price) || 0);

  const formatPrice = (price: string) => {
    return parseFloat(price || "0").toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const sliderSettings = {
    dots: hotel.images.length > 0,
    infinite: hotel.images.length > 0,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: hotel.images.length > 0,
    swipe: hotel.images.length > 0,
  };

  const hotelSlider = useRef<Slider | null>(null);
  const activitiesSlider = useRef<Slider | null>(null);

  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="space-y-8">
      <section className="relative w-full h-[600px] overflow-hidden">
        <div className="relative w-full h-full">
          {/* Video Background */}
          <div className="absolute inset-0">
            <div className="relative w-full h-full">
              <iframe
                src={videoUrl}
                className="absolute w-full h-full"
                style={{
                  transform: "scale(1.5)",
                  transformOrigin: "center",
                }}
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                allowFullScreen
              />
            </div>
          </div>

          {/* Title Overlay - Moved to bottom left */}
          <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/60 to-transparent">
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold font-christmas text-white">
                {title}
              </h1>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="bg-light rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold flex items-center font-christmas">
              <FaHotel className="mr-2" /> Hotel
            </h2>
            <div className="text-xl font-semibold text-primary hidden">
              ${formatPrice(hotel.price)}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/2">
              {hotel.images.length > 0 ? (
                <div className="max-w-3xl mx-auto">
                  <Slider {...sliderSettings} ref={hotelSlider}>
                    {hotel.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative h-[300px] w-[800px] cursor-pointer"
                        onClick={() => hotelSlider.current?.slickNext()}
                      >
                        <Image
                          src={image}
                          alt={`${hotel.name} - Image ${index + 1}`}
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              ) : null}
            </div>
            <div className="md:w-1/2">
              <p>
                <strong>Name:</strong>{" "}
                <a
                  href={hotel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-primary underline"
                >
                  {hotel.name}
                </a>
              </p>
              <p>
                <strong>Address:</strong> {hotel.address}
              </p>
              <p>
                <strong>Description:</strong> {hotel.description}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold flex items-center font-christmas">
              <FaPlane className="mr-2" /> Flight Information
            </h2>
            <div className="text-xl font-semibold text-primary hidden">
              ${formatPrice(flights.price)}
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-24">
            <div>
              <h3 className="text-xl font-medium mb-2">Outbound Flight</h3>
              <p>
                <strong>Departure:</strong> {flights.outbound.departure}
              </p>
              <p>
                <strong>Arrival:</strong> {flights.outbound.arrival}
              </p>
              <p>
                <strong>Airline:</strong> {flights.outbound.airline}
              </p>
              <p>
                <strong>Flight Number:</strong> {flights.outbound.flightNumber}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-2">Return Flight</h3>
              <p>
                <strong>Departure:</strong> {flights.return.departure}
              </p>
              <p>
                <strong>Arrival:</strong> {flights.return.arrival}
              </p>
              <p>
                <strong>Airline:</strong> {flights.return.airline}
              </p>
              <p>
                <strong>Flight Number:</strong> {flights.return.flightNumber}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-light rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 flex items-center font-christmas">
            <FaListUl className="mr-2" /> Key Activities
          </h2>
          <div className="max-w-3xl mx-auto lg:max-w-full">
            <Slider {...sliderSettings} ref={activitiesSlider}>
              {activities.map((activity, index) => (
                <div
                  key={index}
                  className="px-2 cursor-pointer"
                  onClick={() => activitiesSlider.current?.slickNext()}
                >
                  <div className="relative aspect-w-16 aspect-h-9 mb-4 h-[300px]">
                    <Image
                      src={activity.image}
                      alt={activity.text}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-center text-lg">{activity.text}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
