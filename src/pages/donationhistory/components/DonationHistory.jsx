import React from 'react'
import Header from '../../../components/layout/Header'
import Hero1 from '../../../components/layout/Hero1'
import Footer from '../../../components/layout/Footer'

const DonationHistory = () => {
  return (
    <div>
      <Header/>
      <Hero1
      title="Donation History"
      text="Home"
      span ="Donation History"
      
      />


      <div className="bg-primary-color mt-20 mx-[450px] w-[900px] h-[500px] text-slate-200">
    <h1 className="font-bold text-3xl pt-20 mx-14 ">Please verify your email to access your donation history</h1>
    

    <div className=" mx-14">
      <form className="flex-col mt-10"> 
      <div>
            <label className="text-xl">Donation Email</label>
            <div className="pt-3">
              <input
                type=" text"
                name="email"
                placeholder="Email Address "
                className="bg-primary-color  w-96 text-sm p-2   border rounded-md px-2 focus:outline-none"
              />
            </div>
          </div>


        <a href="#" className="border w-32 p-2 rounded  mb-3  flex mt-20">
          Verify Email
          <i className="fa fa-angle-right pr-2  px-2  pt-1"></i>
        </a>
      </form>
    </div>
  </div>

      <Footer/>
    </div>
  )
}

export default DonationHistory
