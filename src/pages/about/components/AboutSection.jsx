import React from 'react'
import image11 from "../../../assets/images/baby.jpg";


function AboutSection(){


        return (

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
        )
    

}


export default AboutSection
