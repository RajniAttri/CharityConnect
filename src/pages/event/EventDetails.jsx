import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import EventList from './components/EventList'
import image from '../../assets/images/Rectangle16.png';

import GeneralHero from '../../components/layout/GeneralHero';
import EventDetailSection from './components/EventDetailSection';


const EventDetails = () => {
  return (
    <div>

    <Header/>
    <GeneralHero
     title="Event Details"
     subTitle={Event?.title || "Need School For Mozambique Children"}
     image ={image}
     />

     <EventDetailSection/>

    
    <Footer/>


      
    </div>
  )
}

export default EventDetails
