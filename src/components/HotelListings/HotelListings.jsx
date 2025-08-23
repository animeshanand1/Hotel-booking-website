import React from 'react';
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
];


const HotelListings = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Featured Hotels</h2>
      <div className={styles.grid}>
        {hotels.map((hotel) => (
          <Card key={hotel.name} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};

export default HotelListings;