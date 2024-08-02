import React from 'react'
import Hero1 from '../../../components/layout/Hero1'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import CareerHeader from './CareerHeader'
import CareerSection from './CareerSection'



const career = () => {
  return (
    
    <div>
        <Header/>

        {/**  <Hero1/>*/}

        <Hero1
        title = "Career"
        text = "Home"
        span = "Career"
        />
        
          
        
          {/**career */}

<section>

    <div>

   <CareerHeader/>

   <CareerSection
    title ="Refugee Education Research Specialist"
    location ="New York"
    type = "Full Time"
    applyLink = "Apply Now"
      />

<CareerSection
    title ="Marketing Volunteer"
    location ="New York"
    type = "Full Time"
    applyLink = "Apply Now"
      />

<CareerSection
    title ="Refugee Education Research Specialist"
    location ="New York"
    type = "Full Time"
    applyLink = "Apply Now"
      />

<CareerSection
    title ="Teacher Educator"
    location ="New York"
    type = "Full Time"
    applyLink = "Apply Now"
      />

<CareerSection
    title ="Education Management Advisor"
    location ="New York"
    type = "Full Time"
    applyLink = "Apply Now"
      />

<CareerSection
    title ="Social Cohesion and Tolerance Adviser"
    location ="New York"
    type = "Full Time"
    applyLink = "Apply Now"
      />


  

    </div>
   
</section>

   <Footer/>

   </div>
    
    
  )
}

export default career

