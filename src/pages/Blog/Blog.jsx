import React from 'react'
import Header from "../../components/layout/Header";
import GeneralHero from "../../components/layout/GeneralHero";
import image1 from "../../assets/images/Rectangle 2.png";


import StatisticsSection from '../../components/layout/StatisticsSection';
import Footer from '../../components/layout/Footer';
import BlogList from './components /BlogList';

function Blog() {
   

  return (
    <>
    <Header outerCircle=""></Header>
      <GeneralHero title="Blog " subTitle="Blog List" image={image1}></GeneralHero>
     
     <BlogList></BlogList> 

    <StatisticsSection>

    </StatisticsSection>
    <Footer></Footer>
    </>
  )
}

export default Blog