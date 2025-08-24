import React, { useState } from 'react';
import Card from '../ui/Card/Card';
import styles from './HotelListings.module.css';

const hotels = [
  {
    name: "Hotel Sunshine",
    image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    rating: 4.5,
    location: "IGI Colony, New Delhi",
    price: 1250,
   amenities: [
      { icon: "📶", label: "Unlimited Wifi" },
      { icon: "🍴", label: "Lunch Included" },
      { icon: "❄️", label: "AC Rooms" },
    ],
  },
  {
    name: "Mountain Retreat",
    image:"https://images.unsplash.com/photo-1549294413-26f195200c16?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    rating: 4.8,
    location: "Villey Park, Chennai",
    price: 4000,
     amenities: [
      { icon: "📶", label: "Unlimited Wifi" },
      { icon: "🍴", label: "Lunch Included" },
      { icon: "❄️", label: "AC Rooms" },
      { icon: "🏊‍♂️", label: "Swimming Pool" },
      { icon: "🏋️", label: "Gym" },
    ],
  },
  {
    name: "City Center Inn",
    image:"https://images.unsplash.com/photo-1549294413-26f195200c16?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    rating: 4.2,
    location: "Bandra West, Mumbai",
    price: 3000,
    amenities: [
      { icon: "📶", label: "Unlimited Wifi" },
      { icon: "🍴", label: "Lunch Included" },
      { icon: "❄️", label: "AC Rooms" },
      { icon: "🏊‍♂️", label: "Swimming Pool" },
      { icon: "🏋️", label: "Gym" },
    ],
  },
  {
    name: "Beachside Resort",
    image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    rating: 4.7,
    location: "Goa, India",
    price: 5000,
    amenities: [
      { icon: "📶", label: "Unlimited Wifi" },
      { icon: "🍴", label: "Breakfast Included" },
      { icon: "❄️", label: "AC Rooms" },
      { icon: "🏊‍♂️", label: "Swimming Pool" },
    ],
  },
  {
    name: "Luxury Palace",
    image:"https://images.unsplash.com/photo-1582719508461-905c673771fd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    rating: 4.9,
    location: "Udaipur, Rajasthan",
    price: 10000,
    amenities: [
      { icon: "📶", label: "Unlimited Wifi" },
      { icon: "🍴", label: "All Meals Included" },
      { icon: "❄️", label: "AC Rooms" },
      { icon: "🏊‍♂️", label: "Swimming Pool" },
      { icon: "🏋️", label: "Gym" },
      { icon: "💆‍♀️", label: "Spa" },
    ],
  },
];

const HotelListings = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextHotels = () => {
    if (startIndex < hotels.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevHotels = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Hotels</h2>
        <div className={styles.controls}>
          <button onClick={prevHotels} disabled={startIndex === 0}>←</button>
          <button onClick={nextHotels} disabled={startIndex >= hotels.length - 4}>→</button>
        </div>
      </div>
      <div className={styles.grid}>
        {hotels.slice(startIndex, startIndex + 4).map((hotel) => (
          <Card key={hotel.name} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelListings;
