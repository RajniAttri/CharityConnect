import React from 'react'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import Hero1 from '../../../components/layout/Hero1'
import LeadershipSection from './LeadershipSection'


const Leadership = () => {
  return (
    <div>

        <Header/>

        <Hero1
          title = "LeaderShip"
          text = "Home"
          span = "LeaderShip"
        
        />

        <LeadershipSection/>

        <Footer/>
      
    </div>
  )
}

export default Leadership
