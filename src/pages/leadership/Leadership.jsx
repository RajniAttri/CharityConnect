import React from "react";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Hero1 from "../../components/layout/Hero1";
import Pagination from "../../components/Pagination";
import LeadershipSection from "./components/LeadershipSection";

const Leadership = () => {
  return (
    <div>
      <Header />
      <Hero1 title="LeaderShip" text="Home" span="LeaderShip" />
      <LeadershipSection />
      <Pagination />
      <Footer />
    </div>
  );
};

export default Leadership;
