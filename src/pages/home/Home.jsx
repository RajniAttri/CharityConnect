import React from "react";

import "../../assets/styles/style.css";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import DonationSection from "./components/DonationSection";
import EventSection from "./components/EventSection";
import HelpSection from "./components/HelpSection";
import Hero from "./components/Hero";
import PeopleDonationSection from "./components/PeopleDonationSection";
<<<<<<< HEAD
=======
import EventSection from "./components/EventSection";
import StatisticsSection from "../../components/layout/StatisticsSection";
>>>>>>> 777b2ff6efa9ba24930fb1579fbbc526d1bf2dcf
import ReviewSection from "./components/ReviewSection";
import StatisticsSection from "./components/StatisticsSection";

function Home() {
  const OuterCircle = () => {
    return (
      <div className="w-[32rem] h-[32rem] border border-solid border-primary-color absolute -left-64 rounded-full -top-10 -z-10"></div>
    );
  };
  return (
    <>
      {/*  */}
      <Header outerCircle={<OuterCircle></OuterCircle>}>
        {/* Hero section */}
        <Hero></Hero>
      </Header>

      {/* Help section */}
      <HelpSection></HelpSection>

      {/* about us section */}
      <AboutSection></AboutSection>

      {/* donate section  */}

      <DonationSection></DonationSection>

      {/* people donation  */}
      <PeopleDonationSection> </PeopleDonationSection>
      {/* event cart  */}
      <EventSection></EventSection>

      {/* statistics section  */}
      <StatisticsSection></StatisticsSection>

      {/* review section  */}
      <ReviewSection></ReviewSection>

      {/* section news and blog  */}
      <BlogSection></BlogSection>
      <Footer></Footer>
    </>
  );
}
export default Home;
