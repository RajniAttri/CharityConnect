import React from 'react'
import Logo from '../../../assets/images/logo.png';
import heroImage from '../../../assets/images/hero-image.png';
import icon from "../../../assets/images/icon.png";
import icon2 from "../../../assets/images/icon2.png";
import icon3 from "../../../assets/images/icon3.png";
import image from "../../../assets/images/Rectangle 2.png";
import image2 from "../../../assets/images/Rectangle 4.png";
import image3 from "../../../assets/images/Rectangle 3.png";
import image4 from "../../../assets/images/Rectangle 5.png";
import image5 from "../../../assets/images/Rectangle 6.png";
import image6 from "../../../assets/images/image3.png";
import image10 from "../../../assets/images/man.jpg";
import image12 from "../../../assets/images/Rayon.jpg";
import image13 from "../../../assets/images/muslim.jpg";
import image14 from "../../../assets/images/Ellipse 94.png";
import Hero1 from '../../../components/layout/Hero1';
import AboutSection from '../components/AboutSection';
import View from '../components/view';




//import image4 from "/images/Rectangle 5.png";

{/**import image7 from "../../../assets/images/Rectangle 9.png";
import image8 from "../../../assets/images/Rectangle 10.png";
import image9 from "../../../assets/images/Rectangle 11.png";
import image11 from "../../../assets/images/baby.jpg"; */}

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

        {/**hero1 */}
        <Hero1/>

       <AboutSection/>


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

          <div className="flex flex-row gap-1 justify-center pt-4 ">
          <div className="w-3 h-3 rounded-lg bg-[#9483F1]"></div>
          <div className="w-14 h-3 rounded-lg bg-primary-color"></div>
          <div className="w-3 h-3 rounded-lg bg-[#9483F1]"></div>
        </div>
        </section>

        {/* senior volunteer 

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
        </section>*/}

<section className=" flex flex-row my-20 py-20 gap-8 items-center  bg-[#EEEAFC]">
        <div className="flex flex-row gap-10">
          <div className="w-1/3 h-full p-20 py-28 text-center flex items-center section-volunteer text-white">
            <p className="text-7xl md:text-4xl font-bold ">
              What People Say About Us
            </p>
          </div>
          <View

          author ="Adam Samson"
          text = "Senior Volunteer"
          image ={image14}
          description ="Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Perspiciatis nemo natus sunt cumque voluptates 
               velit, ab tempora in vitae! Commodi? ab temporain vitae! Commodi?
               velit, ab tempora in vitae! Commodi? ab tempora in vitae! Commodi?"
          />
        </div>
      </section>



    
   </div>
  )
}

export default page
