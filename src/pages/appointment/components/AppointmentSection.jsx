import React from 'react'

function AppointmentSection(props){
    const  text = props.text
    const info = props.info
    const fN = props.fN
    const LN = props.LN
    const Email = props.Email
    const number = props.number
    const department =props.department
    const date = props.date


  return (

    <div className="bg-primary-color mt-20 mx-[450px] w-[900px] h-[700px] text-slate-200">
    <h1 className="font-bold text-3xl pt-20 mx-14 ">{text}</h1>
    <h2 className="font-semibold text-xl mt-3 mb-3     mx-14">{info}</h2>

    <div className=" mx-14">
      <form className="flex-col"> 
        <div className="flex gap-5">
          <div className="">
            <label className="text-xl">{fN}</label>
            <div className="pt-3">
              <input
                type=" text"
                name="name"
                placeholder="First Name "
                className="bg-primary-color w-96 text-sm p-1  border rounded-md px-2  focus:outline-none"
              />
            </div>
          </div>

          <div className="">
            <label className="inline-block text-xl">{LN}</label>
            <div className="pt-3">
              <input
                type=" text"
                name="name"
                placeholder="Last Name"
                className="bg-primary-color  w-96 text-sm p-1   border rounded-md px-2 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-5 pt-6">
          <div>
            <label className="text-xl">{Email}</label>
            <div className="pt-3">
              <input
                type=" text"
                name="email"
                placeholder="Email Address "
                className="bg-primary-color  w-96 text-sm p-1   border rounded-md px-2 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="inline-block text-xl">{number}</label>
            <div className="pt-3">
              <input
                type=" text"
                name=""
                placeholder="Phone Number "
                className="bg-primary-color  w-96  text-sm p-1   border rounded-md px-2 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-5 pt-6">
          <div>
            <label className="text-xl">{department}</label>
            <div className="pt-3">
              <input
                type=" text"
                name=""
                placeholder="Department "
                className="bg-primary-color   w-96 text-sm p-1   border rounded-md px-2 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="inline-block text-xl">{date}</label>
            <div className="pt-3">
              <input
                type=" date"
                name=""
                placeholder="Date "
                className="bg-primary-color  w-96 text-sm p-1   border rounded-md px-2 focus:outline-none"
              />
            </div>
          </div>
        </div>


        <a href="#" className="border w-20 p-1 rounded  mb-3  flex mt-20">
          Submit
          <i className="fa fa-angle-right pr-2  px-2  pt-1"></i>
        </a>
      </form>
    </div>
  </div>
    
  )
}

export default AppointmentSection
