import React from 'react'
import image14 from "../../../assets/images/Ellipse 94.png";
import Header from '../../../components/layout/Header'
import Hero1 from '../../../components/layout/Hero1'
import View from '../../about/components/view'
import Footer from '../../../components/layout/Footer';
import VolunteerForm from './VolunteerForm';
import StatisticsSection from '../../../components/layout/StatisticsSection';

const Volunteer = () => {
  return (
    <div>
        <Header/>

        <Hero1
        title = "Become Volunteer"
        text = "Home"
        span = "Become Volunteer"
        />

     <VolunteerForm/>


 <StatisticsSection/>
   <View

          author ="Adam Samson"
          text = "Senior Volunteer"
          image ={image14}
          description ="Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Perspiciatis nemo natus sunt cumque voluptates 
               velit, ab tempora in vitae! Commodi? ab temporain vitae! Commodi?
               velit, ab tempora in vitae! Commodi? ab tempora in vitae! Commodi?"
          />

          <Footer/>
      
    </div>
  )
}

export default Volunteer
