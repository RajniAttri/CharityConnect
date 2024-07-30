import React from "react";
import image9 from "../../assets/images/Ellipse 94.png";
import image10 from "../../assets/images/Images 1.png";

import "../../assets/styles/style.css";
import Button from "../../components/Button";
import Header from "../../components/layout/Header";
import AboutSection from "./components/AboutSection";
import DonationSection from "./components/DonationSection";
import HelpSection from "./components/HelpSection";
import Hero from "./components/Hero";
import PeopleDonationSection from "./components/PeopleDonationSection";
import EventSection from "./components/EventSection";
import StatisticsSection from "./components/StatisticsSection";
import ReviewSection from "./components/ReviewSection";

function Home() {
  const OuterCircle = () => {
    return (
      <div className="w-[32rem] h-[32rem] border border-solid border-primary-color absolute -left-64 rounded-full -top-10 -z-10"></div>
    );
  };
  return (
    <div className="">
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
      <section className="mx-6 md:mx-32 flex flex-col items-center my-20 gap-10">
        <p className=" text-3xl md:text-5xl font-bold text-center ">
          Latest News From <br /> Givest Blog
        </p>
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* card 2  */}

          {/* card 3 */}
        </div>

        <div className="flex flex-row gap-1 ">
          <div className="w-4 h-4 rounded-lg bg-[#9483F1]"></div>
          <div className="w-16 h-4 rounded-lg bg-primary-color"></div>
          <div className="w-4 h-4 rounded-lg bg-[#9483F1]"></div>
        </div>
      </section>
    </div>
  );
}
export default Home;
