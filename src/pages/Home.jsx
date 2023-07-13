import React from "react";
import Hero from "../containers/Hero";
import Cards from "../containers/Cards";
import CancellationGrid from "../containers/CancellationGrid";
import Payment from "../containers/Payment";
import Destinations from "../containers/Destinations";
import Blog from "../containers/Blog";

const Home = () => {
  return (
    <main className="bg-customWhite">
      <Hero />
      <Cards />
      <Payment />
      <Destinations />
      <CancellationGrid />
      <Blog />
    </main>
  );
};

export default Home;
