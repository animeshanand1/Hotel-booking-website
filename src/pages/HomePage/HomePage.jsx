import React from "react";
import Hero from "../../components/Hero/Hero";
import SecondaryHero from "../../components/Hero/SecondaryHero";
import HotelListings from "../../components/HotelListings/HotelListings";
import Newsletter from "../../components/Newsletter/Newsletter";
import Testimonials from "../../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <SecondaryHero />
      <HotelListings/>
      <Testimonials/>
      <Newsletter/>
      {/* etc... */}
    </>
  );
};

export default HomePage;
