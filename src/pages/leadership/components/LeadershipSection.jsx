import React from 'react'
import image17 from '../../../assets/images/Rectangle17.jpg'
import image18 from '../../../assets/images/Rectangle18.jpg'
import image19 from '../../../assets/images/Rectangle19.jpg'
import image20 from '../../../assets/images/Rectangle20.jpg'
import image14 from '../../../assets/images/Ellipse 94.png'
import image10 from "../../../assets/images/man.jpg";
import image12 from "../../../assets/images/Rayon.jpg";

import image13 from "../../../assets/images/muslim.jpg";

import image21 from "../../../assets/images/Rectangle21.jpg"
import image22 from "../../../assets/images/Rectangle22.jpg";
import image23 from "../../../assets/images/Rectangle23.jpg";




const LeadershipSection = () => {
  return (
    <div className=' mt-20'>
        <h1 className='text-4xl pb-7 font-semibold text-center'>Meet Our Volunteer</h1>
        <p className=' text-center pb-10 text-2xl px-28 pr-28'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem suscipit dolor architecto. 
            Repudiandae quae aut beatae tempora. Voluptatibus, doloremque ullam!</p>



            <div className='flex g-3 justify-evenly '>
            <div>
            <img src={image19}  alt='' className='w-80 h-96'/>
            </div>
            <div>
              <img src={image17}  alt='' className='w-80 h-96'/>
            </div>
            <div>
              <img src={image20}  alt='' className='w-80 h-96'/>
            </div>

          </div>

          <div className='flex g-3 justify-evenly pt-6'>
            <div>
            <img src={image12}  alt='' className='w-80 h-96'/>
             
            </div>
            <div>
              <img src={image18}  alt='' className='w-80 h-96'/>
            </div>
            <div>
              <img src={image19}  alt='' className='w-80 h-96'/>
            </div>

          </div>

          <div className='flex g-3 justify-evenly pt-6'>
            <div>
            <img src={image10}  alt='' className='w-80 h-96'/>
            </div>
            <div>
              <img src={image22}  alt='' className='w-80 h-96'/>
            </div>
            <div>
              <img src={image13}  alt='' className='w-80 h-96'/>
            </div>

          </div>

          <div className='flex g-3 justify-evenly pt-6'>
            <div>
            <img src={image21}  alt='' className='w-80 h-96'/>
            </div>
            <div>
              <img src={image12}  alt='' className='w-80 h-96'/>
            </div>
            <div>
              <img src={image23}  alt='' className='w-80 h-96'/>
            </div>

          </div>

           
      
    </div>
  )
}

export default LeadershipSection
