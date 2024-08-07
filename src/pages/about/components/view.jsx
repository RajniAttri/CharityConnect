import React from 'react'


function View(props){
const image = props.image;
const description = props.description;
const author = props.author;
const text = props.text;

        return (


          <section className=" flex flex-row my-20 py-20 gap-8 items-center  bg-[#EEEAFC]">
          <div className="flex flex-row gap-10">
            <div className="w-1/3 h-full p-20 py-28 text-center flex items-center section-volunteer text-white">
              <p className="text-7xl md:text-4xl font-bold ">
                What People Say About Us
              </p>
            </div>
          
            <div className='flex flex-col gap-8 pr-20 px-20'>

                <div>
                <img src={image} alt='' className='h-18 w-18'/>
                <p className='pr-28'>{description}</p>

              </div>
            
              <div className="flex flex-row justify-between items-center">
             
              <div className="flex flex-col gap-2">
                <p className="font-medium text-2xl">{author} </p>
                <p className="">{text}</p>
              </div>
             

              <div className='flex flex-row flex-end p-4 items-start gap-4 text-2xl w-1/2 bg-primary-color text-white'>
              <i className="fa fa-arrow-circle-o-left"></i>
              <i className="fa fa-arrow-circle-o-right"></i>
              
              </div>
              </div>
            </div>
            </div>
            </section>

         
        )
    
      }




export default View
