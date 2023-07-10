import React from "react";
import Hero from "../containers/Hero";
import Cards from "../containers/Cards";
import CancellationGrid from "../containers/CancellationGrid";
import Payment from "../containers/Payment";

const Home = () => {
  return (
    <div className="bg-customWhite">
      <Hero />
      <Cards />
      <Payment />
      <CancellationGrid />

    </div>
  );
};

export default Home;
