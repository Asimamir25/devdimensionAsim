import React from "react";
import Infobar from "../components/Infobar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import OurLeads from "../components/OurLeads";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Infobar/>
      <Navbar/>
      <Hero/>
      <HowItWorks/>
      <OurLeads/>
      <Pricing/>
      <Footer/>
    </div>
  );
};

export default Home;


