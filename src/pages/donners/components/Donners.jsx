import React from 'react'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import Hero1 from '../../../components/layout/Hero1'
import Pagination from '../../../components/Pagination'
import DonnersSection from './DonnersSection'

const Donners = () => {
  return (
    <div>

        <Header/>

        <Hero1
        title="Donners"
        text = "Home"
        span ="Donners"
        
        />

        <DonnersSection/>


        <Pagination/>
        <Footer/>
      
    </div>
  )
}

export default Donners
