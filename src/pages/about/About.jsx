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
import Hero1 from '../../components/layout/Hero1';
import AboutSection from './components/AboutSection';
import View from './components/view';
import Footer from '../../components/layout/Footer';
import Header from '../../components/layout/Header';




//import image4 from "/images/Rectangle 5.png";

//{/**import image7 from "../../../assets/images/Rectangle 9.png";
//import image8 from "../../../assets/images/Rectangle 10.png";
//import image9 from "../../../assets/images/Rectangle 11.png";
//import image11 from "../../../assets/images/baby.jpg"; */}

const page = () => {
  return (
   <div className=''>
 {/**header */}
 <Header/>

        {/* About us*/}

        {/**hero1 */}
        <Hero1
        title = "About Us"
        text = "Home"
        span = "About Us"
        />

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

      
             
       

          <View

          author ="Adam Samson"
          text = "Senior Volunteer"
          image ={image14}
          description ="Lorem ipsum dolor sit amet consectetur
               adipisicing elit. Perspiciatis nemo natus sunt cumque voluptates 
               velit, ab tempora in vitae! Commodi? ab temporain vitae! Commodi?
               velit, ab tempora in vitae! Commodi? ab tempora in vitae! Commodi?"
          />
         
      


      {/**footer */}
      <Footer/>



    
   </div>
  )
}

export default page
