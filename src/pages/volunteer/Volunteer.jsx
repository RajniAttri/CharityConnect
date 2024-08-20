import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import StatisticsSection from '../../components/layout/StatisticsSection'
import VolunteerForm from './components/VolunteerForm'
import Hero1 from '../../components/layout/Hero1'

const Volunteer = () => {
  return (
    <div>
      <Header/>
      <Hero1 
      title="Become Volunteer"
      text="Home" 
      span="Become Volunteer" 
/>


      <VolunteerForm
      text="Jion With Us As A Volunteer "
      info="Personal"
      fN=" First Name"
      LN="Last Name"
      Email="Email Address"
      number="Phone Number"
      age ="Age"
      region="Region"
      message="Message"

      
      
      />

      <StatisticsSection/>
      <Footer></Footer>
    </div>
  )
}

export default Volunteer
