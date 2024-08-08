import React from 'react'
import Header from '../../../components/layout/Header'
import Hero1 from '../../../components/layout/Hero1'
import Footer from '../../../components/layout/Footer'

const Section404 = () => {
  return (
    <div>

        <Header/>
        <Hero1
        title ="404"
        text="Home"
        span ="404"
    
        />

<div className="bg-primary-color mt-20 mx-[450px] w-[900px] h-[500px] text-slate-200 text-center">
<h1 className="font-bold text-5xl pt-20 mx-14 ">404</h1>
<h2 className='font-semibold text-3xl pt-8 '>Something went wrong.</h2>
<p className='text-xl pt-8 px-20 pr-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
    Enim ea mollitia, iusto ipsa voluptates cupiditate ad eaque quibusdam soluta quas!</p>

    <a href="#" className="border w-32 p-1 rounded  mb-3 mx-96 flex mt-20">
          Back to Home
          <i className="fa fa-angle-right pr-2  px-2  pt-1"></i>
        </a>
</div>




        <Footer/>
      
    </div>
  )
}

export default Section404

