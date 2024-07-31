import React from 'react'


function View(props){
const image = props.image;
const description = props.description;
const author = props.author;
const text = props.text;

        return (
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

         
        )
    
      }




export default View
