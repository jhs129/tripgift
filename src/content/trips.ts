export const trips = [
  {
    id: "vegas",
    title: "What Happens in Vegas",
    image: "/images/vegas-hero.webp",
    description: "...stays in Vegas.",
    flights: {
      outbound: {
        departure: "Friday March 21, 2025 11:15 AM",
        arrival: "Friday March 2, 2025 12:55 PM",
        airline: "Delta Airlines",
        flightNumber: "DL824",
      },
      return: {
        departure: "Monday, March 24, 2025 09:20 AM",
        arrival: "Monday, March 24, 2025 4:06 PM",
        airline: "Delta Airlines",
        flightNumber: "DL834",
      },
      price: "1707.90",
    },
    hotel: {
      name: "The Boulevard Hilton Grand Vacations",
      link: "https://www.hiltongrandvacations.com/en/resorts-and-destinations/las-vegas/the-boulevard-a-hilton-grand-vacations-club",
      address: "3600 S Las Vegas Blvd, Las Vegas, NV 89109, United States",
      description:
        "The Boulevard, a Hilton Grand Vacations Club is a family-inspired Las Vegas timeshare resort located on the north end of the Las Vegas Strip, known for its Desert Deco design and large multi-bedroom suites. Make yourself comfortable in a studio with a kitchenette, or maximize your space with a 3-bedroom suite complete with a full kitchen, living and dining areas, and Jacuzzi tub. No matter which accommodations you choose, you’ll always wake up to a range of special amenities, including the world-renowned eforea Spa located on property and a private resort-style pool area.",
      images: [
        "/images/hotels/hgv/blvd-1.avif",
        "/images/hotels/hgv/blvd-2.avif",
        "/images/hotels/hgv/blvd-3.avif",
        "/images/hotels/hgv/blvd-4.avif",
      ],
      price: "1209.00",
    },
    activities: [
      {
        text: "Admire the Bellagio's iconic Fountains and seasonal Conservatory & Botanical Gardens",
        image: "/images/activities/vegas/fountains.webp",
      },
      {
        text: "Experience a fine dining meal at one of the Bellagio's signature restaurants",
        image: "/images/activities/vegas/dining.jpeg",
      },
      {
        text: "Attend the Cirque du Soleil 'O' show at the Bellagio",
        image: "/images/activities/vegas/cirque.jpg",
      },
      {
        text: "Try your luck at the Bellagio's world-class casino and sportsbook, especially during March Madness",
        image: "/images/activities/vegas/gambling.jpg",
      },
      {
        text: "Take a helicopter tour of the Las Vegas Strip or a day excursion to the Hoover Dam",
        image: "/images/activities/vegas/chopper.jpg",
      },
    ],
  },
];
