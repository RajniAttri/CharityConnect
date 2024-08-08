import React from 'react'
import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import Hero1 from '../../../components/layout/Hero1'

const ComingSoon = () => {
  return (
    <div>

        <Header/>
        <Hero1
        title="Coming Soon"
        text="Home"
        span="Coming Soon"
        
        />

            <div className="bg-primary-color mt-16 mx-[450px] w-[900px] h-[500px] text-slate-200 ">
            <h1 className="font-bold text-5xl pt-14 mx-14 text-center ">Something awesomeis <br/>coming soon</h1>
            <p className='text-xl pt-8 px-20 pr-20 text-center'>You can subcribe to get notice when your website is ready</p>

            <div className='flex justify-center mt-12'>
                <div>
                    <h1 className='text-5xl text-bold'>15:</h1>
                    <p>Days</p>
                </div>
                <div>
                    <h1 className='text-5xl text-bold'>20:</h1>
                    <p>Hours</p>
                </div>
                <div>
                    <h1 className='text-5xl text-bold'>30:</h1>
                    <p>Minutes</p>
                </div>
                <div>
                    <h1 className='text-5xl text-bold'>55:</h1>
                    <p>Seconds</p>
                </div>
            </div>

            <div className='flex gap-3 pt-6 justify-center'>

            <div>
            <label className="text-xl">Email Address</label>
            <div className="pt-3">
              <input
                type=" text"
                name="email"
                placeholder="Email Address "
                className="bg-primary-color  w-96 text-sm p-1   border rounded-md px-2 focus:outline-none"
              />
            </div>
          </div>

          <div className=''>
          <a href="#" className="border w-32 p-1 rounded mx-20 flex mt-10">
          Register Now
          <i className="fa fa-angle-right pr-2  px-2  pt-1"></i>
        </a>

          </div>
          



            </div>


</div>


        <Footer/>
      


    </div>
  )
}

export default ComingSoon
