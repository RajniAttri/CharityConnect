import React from 'react'
// import '../../../index.css'



function Hero1(props){

  const title = props.title;
  const text = props.text;
  const span = props.span;

    
        return (
          <div>
            <div className=''  >
          <div className="Hero-background">
            
            <div className=' grid items-center  justify-center '>
            <h1 className="  text-5xl pt-28 ">{title}</h1>
  
         <a href='#' className='text-slate-200 pt-4 text-2xl'>
         {text} 
         <i className="fa fa-angle-right pr-2 px-2"></i>
         <span>{span}</span></a>

            </div>
           
          </div>
          

          </div>
          </div>
        )
    

}


export default Hero1
