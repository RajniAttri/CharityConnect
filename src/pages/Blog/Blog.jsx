import React from "react";
import image1 from "../../assets/images/Rectangle 2.png";
import GeneralHero from "../../components/layout/GeneralHero";
import Header from "../../components/layout/Header";

import Footer from "../../components/layout/Footer";
import StatisticsSection from "../../components/layout/StatisticsSection";
import BlogList from "./components/BlogList";

function Blog() {
  return (
    <>
      <Header outerCircle=""></Header>
      <GeneralHero
        title="Blog "
        subTitle="Blog List"
        image={image1}
      ></GeneralHero>

      <BlogList></BlogList>

      <StatisticsSection></StatisticsSection>
      <Footer></Footer>
    </>
  );
}

export default Blog;
