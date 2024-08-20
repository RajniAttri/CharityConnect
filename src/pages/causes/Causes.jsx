import React from "react";
import Header from "../../components/layout/Header";
import GeneralHero from "../../components/layout/GeneralHero";
import image from "/assets/images/Rectangle 2.png";
import CausesSection from "./components/CausesSection";
import Pagination from "../../components/Pagination";
import StatisticsSection from "../../components/layout/StatisticsSection";
import ReviewSection from "../home/components/ReviewSection";
import Footer from "../../components/layout/Footer";



function Causes() {
  return (
    <div className="">
      <Header outerCircle=""></Header>
      <GeneralHero title="Causes" subTitle="Causes List" image={image}></GeneralHero>
      <CausesSection ></CausesSection>
      <Pagination></Pagination>
      <StatisticsSection></StatisticsSection>
      <ReviewSection></ReviewSection>
      <Footer></Footer>
    
    </div>
  );
}

export default Causes;
