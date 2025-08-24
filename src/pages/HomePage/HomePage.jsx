import React from "react";
import Hero from "../../components/Hero/Hero";
import SecondaryHero from "../../components/Hero/SecondaryHero";
import HotelListings from "../../components/HotelListings/HotelListings";
import Testimonials from "../../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <SecondaryHero />
      <HotelListings/>
      <Testimonials/>
      {/* etc... */}
    </>
  );
};

export default HomePage;
