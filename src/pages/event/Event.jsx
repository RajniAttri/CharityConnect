import React from 'react'
import Header from '../../components/layout/Header'
import GeneralHero from '../../components/layout/GeneralHero'
import Footer from '../../components/layout/Footer'
import EventList from './components/EventList'
import image from '../../assets/images/Rectangle16.png'
import image26 from '../../assets/images/Rectangle 6.png'

import image17 from '../../assets/images/Rectangle17.jpg'
import image18 from "../../assets/images/Rectangle18.jpg";
import image19 from "../../assets/images/Rectangle19.jpg";
import image20 from "../../assets/images/Rectangle20.jpg";

import image13 from "../../assets/images/muslim.jpg";

import image21 from "../../assets/images/Rectangle21.jpg";
import image22 from "../../assets/images/Rectangle22.jpg";
import image23 from "../../assets/images/Rectangle23.jpg";
import Pagination from '../../components/Pagination'
import StatisticsSection from '../../components/layout/StatisticsSection'
import ReviewSection from '../home/components/ReviewSection'


const Event = () => {
  return (
    <div>
        <Header/>

        <GeneralHero
        title="Event"
        subTitle={Event?.title || "EventList"}
        image ={image}
      ></GeneralHero>
        {/* <GeneralHero
        title = "EventList"
        subtitle ="Event"
        /> */}

        <EventList
        image ={image17}
        image1 ={image26}
        
        
        />

      <EventList
        image ={image18}
        image1 ={image19} 
        />

     <EventList
        image ={image20}
        image1 ={image21} 
        />

     <EventList
        image ={image22}
        image1 ={image23} 
        />
        <Pagination/>

        <StatisticsSection/>
        <ReviewSection/>

        <Footer/>

       
      
    </div>
  )
}

export default Event
