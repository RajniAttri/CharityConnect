import React from 'react'
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Hero1 from '../../components/layout/Hero1'

const DonationFailed = () => {
  return (
    <div>
      <Header/>
      <Hero1
      title="Donation Failed"
      text="Home"
      span ="Donation Failed"
      
      />

<div className="bg-primary-color mt-20 mx-[450px] w-[900px] h-[300px] text-slate-200">
    <h1 className="font-bold text-3xl pt-20 mx-14 ">We're sorry your donation failed.
        Please try it again or contact site support
    </h1>

  </div>



      <Footer/>
      
    </div>
  )
}

export default DonationFailed

