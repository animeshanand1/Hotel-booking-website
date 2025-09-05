import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../ui/Card/Card";
import styles from "./HotelListings.module.css";
import { selectAllHotels } from "../../features/hotels/hotelsSlice";
import { useHotels } from "../../hooks/useHotels";

const HotelListings = () => {
  const dispatch = useDispatch();
  const { hotels, status, error, refetch } = useHotels();
  console.log('hotels',status)
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

  if (status === "loading" ) {
    return <div>Loading...</div>;
  }



  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Hotels</h2>
        <div className={styles.controls}>
          <button onClick={prevHotels} disabled={startIndex === 0}>
            ←
          </button>
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
