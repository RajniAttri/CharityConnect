import React from 'react'

import image3 from '../../../assets/images/Image3.png'
import image12 from '../../../assets/images/Rectangle 12.png'
import Button from '../../../components/Button'
import image22 from '../../../assets/images/Rectangle22.jpg'
import image23 from '../../../assets/images/Rectangle23.jpg'
import image20 from '../../../assets/images/Rectangle20.jpg'


const EventDetailSection = () => {
  return (
    

    <div className=' flex   grid-cols-2  mx-28 mt-14 gap-52'>
    
     <div className=" flex flex-col gap-6">
             <p className=" text-2xl md:text-3xl font-bold ">Causes Category</p>
            <div className="flex flex-row justify-between text-xl">
              <p>Water</p>
              <p className=' text-xl'>(01)</p>
            </div>
            <div className="flex flex-row justify-between text-xl">
             <p>Education </p>
               <p className=' text-xl'>(02)</p>
          </div>
            <div className="flex flex-row justify-between text-xl">
               <p>Water</p>
               <p className=' text-xl'>(03)</p>
            </div>
             <div className="flex flex-row justify-between text-xl">
              <p>Education </p>
               <p className=''>(04)</p>
           </div>

           <div className=''>
            <h1 className='font-bold text-2xl md:text-3xl mb-3'>Urgent Causes</h1>
            <img src={image12}  alt='' className='w-[670px] h-[409px] pt-8'/>
            <h2 className='gap-4 font-semibold text-xl md:text-2xl pt-5'>Children Education Needs For Change The World</h2>
            <p className='pt-4'>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. In, harum. adipisicing elit. In, harum.</p>

           </div>
           <div className='flex gap-40'>
            <div className='flex flex-col'>
                <p className='text-xl'>Goal</p>
                <p className='text-primary-color font-semibold text-2xl mt-3'>$400</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-xl'>Rise</p>
                <p className='text-primary-color font-semibold text-2xl mt-3'>$3000</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-xl'>To Go</p>
                <p className='text-primary-color font-semibold text-2xl mt-3'>$1000</p>
            </div>
           </div>


           <div>
           <progress className="progress text-primary-color w-[40rem] rounded-full" value="70" max="100"></progress>

           </div>

           <div className=' flex gap-5 p-4'>   
            <button className='border  w-16 h-14 '>$40</button>
            <button className='border  w-16 h-14 '>$50</button> 
            <button className='border  w-20 h-14 '>$100</button>
            <button className='border   w-20 h-14 '>$200</button>
            <button className='border   w-24 h-14 '>$500</button>
           </div>

           <div className='mx-48'>

           <Button

          type="primary-button"
          text="Donate  Now"
          icon={<i className="fa fa-angle-right"></i>}
           />
           </div>

          </div> 


            <div className=''>
             <div>
            <img src={image3} alt='' className='w-[900px] h-[500px]'/>
            </div>

            <div className='flex mt-5 gap-52'>
            <div>
            <i className="fa fa-calendar text-primary-color fa-2x "></i>
            <p className='text-xl'>15 Feb 2024</p>
            </div>
            <div>
            <i className="fa fa-clock-o text-primary-color fa-2x"></i>
            <p className='text-xl'>10:00AM - 04:00PM</p>
            </div>
            <div>
            <i className="fa fa-map-marker text-primary-color  fa-2x" ></i>
            <p className='text-xl'>Mitchell, 57301 USA</p>
            </div>

            </div>

            <div className=''>
              <h1 className='text-xl md:text-2xl  font-semibold pt-4'>Need School For Mozambique Children</h1>
              <p className='text-xl pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore quae perspiciatis repellat eveniet ut
                 repudiandae ratione distinctio harum iure ipsa 
                 obcaecati perferendis alias doloribus
                 veniam voluptatem saepe, odio vel in?</p>
            </div>

            <div className=''>
              <h1 className='text-xl md:text-2xl  font-semibold pt-4'>Old Education Needs For Change The World.</h1>
              <p className='text-xl pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore quae perspiciatis repellat eveniet ut
                 repudiandae ratione distinctio harum iure ipsa 
                 obcaecati perferendis alias doloribus
                 veniam voluptatem saepe, odio vel in?</p>
            </div>

            <div className='flex gap-4 mt-5 '>
              <img src={image20} alt='' className='w-72 h-72'/>
              <img src={image22} alt='' className='w-72 h-72'/>
              <img src={image23} alt='' className='w-72 h-72'/>
            </div>
            <p className='text-xl pt-3 '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ab harum 
              tenetur optio voluptatum veritatis quibusdam, animi quaerat
               fugiat officia nihil doloribus adipisci libero voluptates 
               modi mollitia cumque placeat hic?</p>

               <div className=''>
              <h1 className='text-xl md:text-2xl  font-semibold pt-4'>Current Sponsors.</h1>
              <p className='text-xl pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore quae perspiciatis repellat eveniet ut
                 repudiandae ratione distinctio harum iure ipsa 
                 obcaecati perferendis alias doloribus
                 veniam voluptatem saepe, odio vel in?</p>
            </div>
            <div className=''>
              <h1 className='text-xl md:text-2xl  font-semibold pt-4'>Why Jion This Event?</h1>
              <p className='text-xl pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Inventore quae perspiciatis repellat eveniet ut
                 repudiandae ratione distinctio harum iure ipsa 
                 obcaecati perferendis alias doloribus
                 veniam voluptatem saepe, odio vel in?</p>
            </div>

            </div>    

      
    </div>
  )
}

export default EventDetailSection
