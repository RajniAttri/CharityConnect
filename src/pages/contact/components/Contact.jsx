import React from 'react'
import Header from '../../../components/layout/Header'
import Hero1 from '../../../components/layout/Hero1'
import Footer from '../../../components/layout/Footer'
import image23 from '../../../assets/images/map1.jpg'



const Contact = () => {
  return (
    <div>
        
        <Header></Header>
          {/**  <Hero1/>*/}

          <Hero1
        title = "Contact Us"
        text = "Home"
        span = "Contact Us"
        />

        <section>
        <div className=' flex pt-12  justify-center w-full'>
                <div className='bg-blue-700   h-96 '>
                    <h1 className='text-center text-slate-200 pt-1'>LET'S CONNECT</h1>
                    <form className='grid px-8 pr-10 gap-1 text-slate-200'>
                    <label form='fname' className='text-sm' >First Name</label>
                    <input type=' text' name='name'  placeholder='First Name ' className='bg-blue-700  border rounded-md px-2   focus:outline-none'/>

                    <label form='lname'   className='text-sm'>Last Name</label>
                    <input type='ttext' name='name'  placeholder='Last Name' className='bg-blue-700    border rounded-md px-2 focus:outline-none'/>
                    <label form='email'    className='text-sm'>Email Address</label>
                    <input type='' name=''  placeholder='Email Address' className='bg-blue-700   border rounded-md px-2 focus:outline-none'/>
                    <label form='password'   className='text-sm'>Password</label>
                    <input type='password' name='password'  placeholder='Password' className=' bg-blue-700   border rounded-md px-2 focus:outline-none'/>

                    <label form='message'  className='text-sm'>Message</label>
                    <textarea name='message' placeholder='message.....' className=' bg-blue-700  border rounded-md px-2 focus:outline-none'></textarea>


        
                    <a href='#' className='border w-20 p-1 rounded mt-5 mb-3    flex'>Submit
                    <i className="fa fa-angle-right pr-2  px-2  pt-1"></i>
                    </a>


                  


                    </form>
                </div>

                <div className=''>
                  <img src={image23} alt='' className='w-96 h-96'/>

                </div>
            </div>
        </section>




        <Footer/>
        
      
    </div>
  )
}

export default Contact
