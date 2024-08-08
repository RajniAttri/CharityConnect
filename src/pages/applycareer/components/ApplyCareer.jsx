import React from 'react'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import Hero1 from '../../../components/layout/Hero1'
import ApplyForm from './ApplyForm'



const ApplyCareer = () => {
  return (
    <div>

        <Header/>
        <Hero1
         title = "Apply Career"
         text = "Home"
         span = "Apply Career"
        
        />
        

        <ApplyForm
         text = "Apply Your Best Possible Work"
         info ="Information"
         fN = "  Name"
         LN = "Last Name"
         Email ="Email Address"
         number = "Phone Number"
         position = "Position"
         experience ="Experience"
         Cv ="Cv/Resume"
        
        />
        

        <Footer/>
      
    </div>
  )
}

export default ApplyCareer
