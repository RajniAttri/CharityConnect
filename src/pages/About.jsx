import React from 'react'
import '../index.css'
import Logo from '/images/logo.png'
import heroImage from '/images/hero-image.png';
import icon from "/images/icon.png";
import icon2 from "/images/icon2.png";
import icon3 from "/images/icon3.png";
import image from "/images/Rectangle 2.png";
import image2 from "/images/Rectangle 4.png";
import image3 from "/images/Rectangle 3.png";
import image4 from "/images/Rectangle 5.png";
import image5 from "/images/Rectangle 6.png";
import image6 from "/images/image3.png";
import image7 from "/images/Rectangle 9.png";
import image8 from "/images/Rectangle 10.png";
import image9 from "/images/Rectangle 11.png";
import image11 from "/images/baby.jpg";
import image10 from "/images/man.jpg";
import image12 from "/images/Rayon.jpg";
import image13 from "/images/muslim.jpg";
import image14 from "/images/Ellipse 94.png";




//import image4 from "/images/Rectangle 5.png";

const page = () => {
  return (
   <div className=''>
    <header className="mx-6 md:mx-32">
          <nav className="flex justify-between items-center py-6">
            <img src={Logo} alt="logo" className="w-20 " />
            <div className="  flex gap-4 text-sm">
              <a href="#">Home</a>
              <a href="about">About</a>
              <a href="#">Causes</a>
              <a href="#">Blog</a>
              <a href="#">Event</a>
              <a href="#">Contact Us</a>
            </div>
            <button className="primary-button ">
              Donate Now
              <i className="fa fa-angle-right"></i>
            </button>
          </nav>
          
        </header>

        {/* About us*/}

        <section>
          <div className=''>
          <div className="background">
            
            <div className=' grid items-center  justify-center '>
            <h1 className="  text-5xl pt-44 ">About Us</h1><br/>
  
         <a href='#' className='text-slate-200 pt-4 text-2xl'>
         Home 
         <i className="fa fa-angle-right pr-2"></i>
         <span>About Us</span></a>

            </div>
           
          </div>
          

          </div>             
        <div>
        <h1 className='font-bold text-4xl px-28 pt-24'>Givest is The Non Profitable<br/> Organization.</h1>

        <div className='flex flex-col  md:flex-row py-6'>
            
            <div className='md:w-1/2'>
           { /*<img src={image9} alt="woman" className='px-28 h-96 max-w-screen-sm'/> */} 
           <img src={image11} alt='' className='px-28'/>

            </div>
            <div className='md:w-1/2 flex flex-col  items-start pr-28 ' >
              <h2 className='font-bold pb-9 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
                 asperiores suscipit eius doloribus 
                perspiciatis nostrum libero ratione ex temporibus nesciunt!</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsam, 
                  at reprehenderit itaque quasi veritatis? Porro ab architecto beatae blanditiis.
                  consectetur adipisicing elit. Quaerat ipsam, 
                  at reprehenderit itaque quasi veritatis? Porro ab architecto beatae blanditiis.</p>


               <div className=' flex justify-between pt-14'>

                <div className=' bg-red-400 w-64 h-60 rounded-md text-white'>
                  <h1 className='text-center pt-3'>Our Mission </h1>
                  <p className='px-8  pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae 
                    deserunt eum veritatis autem quibusdam nulla, ut neque, praesentium sed laboriosam.</p>
                </div>

                <div className='bg-yellow-500 w-64 h-60 rounded-md mx-4 text-white'>
                <h1 className='text-center pt-3'>Our Vission </h1>
                  <p className='px-8  pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae 
                    deserunt eum veritatis autem quibusdam nulla, 
                    aut neque, praesentium sed laboriosam</p>
                </div>

               </div>
            </div>

            </div>
          </div> 
        </section>


        {/* meet  our volunteer */}

        <section>
          <div>
            <h1 className='font-bold text-2xl flex items-center justify-center pt-28 pb-11'>Meet Our Volunteer</h1>
          </div>
          <div className='flex g-3 justify-evenly'>
            <div>
              <img src={image10}  alt='' className='w-80 h-96'/>
            </div>
            <div>
              <img src={image13}  alt='' className='w-80 h-96'/>
            </div>
            <div>
              <img src={image12}  alt='' className='w-80 h-96'/>
            </div>

          </div>
        </section>

        {/* rating section */}
        <section className='mb-12'>
          <div  className='flex justify-between pt-28 px-28 pr-28'>
            <div>
              <h1 className='font-bold text-5xl text-center'>520k</h1>
              <p className='text-2xl pt-3 font-medium'>Poor People</p>
            </div>
            <div>
              <h1 className='font-bold text-5xl text-center'>842M</h1>
              <p className='text-2xl pt-3 font-medium'>Fund Rise</p>
            </div>
            <div>
              <h1 className='font-bold text-5xl text-center'>24k</h1>
              <p className='text-2xl pt-3 font-medium'>Active Members</p>
            </div>

          </div>
        </section>

        {/* senior volunteer */}

        <section className='bg-slate-200'>
          <div  className='flex justify-between  pt-16 pb-16 '>

            <div>
               <img src={image9} alt='' className='w-96 h-96'/>
            </div>

            <div className='px-16'>
              <img src={image14}  alt='' className=' w-28 h-28 rounded-full'/>
              <p className='pr-28 pt-11'>Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Perspiciatis nemo<br/> natus sunt cumque voluptates 
               velit, ab tempora in vitae! Commodi? ab tempora<br/> in vitae! Commodi?
               velit, ab tempora in vitae! Commodi? ab tempora in vitae! Commodi?</p>

                <div className='flex justify-between'>
                  <div>
                    <h1 className='font-semibold pt-7'>Adam Samson</h1>
                    <p className='pt-2'>Senior Volunteer</p>
                  </div>

                  <div>
                    <button className=' pt-7'>
                    <i className="fa fa-angle-right"></i>
                    </button>
                  </div>
                </div>
            </div>

          </div>
        </section>



    
   </div>
  )
}

export default page
