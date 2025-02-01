import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import GeneralHero from '../../components/layout/GeneralHero'
import career from '../career/Career'
const image = "/assets/images/Rectangle_2.png";
import CareerDetailSection from './components/CareerDetailSection'

const CareerDetails = () => {
  return (
    <div>

        <Header/>
        <GeneralHero
        title="Career"
        subTitle={career?.title || "Teacher Educator"}
        image={image}
      ></GeneralHero>

      <CareerDetailSection/>

        <Footer/>
      
    </div>
  )
}

export default CareerDetails

