import React from 'react'
import AppointmentSection from './AppointmentSection'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import Hero1 from '../../../components/layout/Hero1'



const Appointment = () => {
  return (
    <div>
        <Header/>


       <Hero1
       
       title ="Appointments"
       text="Home"
       span ="Appointments"
       
       />

        
        <AppointmentSection
        text =" Apply Get a Consultation"
        info="Information"
        fN="First Name"
        LN ="Last Name"
        number ="Phone number"
        date ="Date"
        department = "Department"
        Email="Email Address"
        
        
        />
        <Footer/>
      
    </div>
  )
}

export default Appointment
