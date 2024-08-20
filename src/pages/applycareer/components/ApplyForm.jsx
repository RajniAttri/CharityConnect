import React from 'react'

function ApplyForm (props) {

    const  text = props.text
    const info = props.info
    const fN = props.fN
    const LN = props.LN
    const Email = props.Email
    const number = props.number
    const position = props.position
    const experience= props.experience
    const Cv= props.Cv


  return (
    <div className="bg-primary-color mt-20 mx-[450px] w-[900px] h-[700px] text-slate-200">
    <h1 className="font-bold text-3xl pt-10 mx-14 ">{text}</h1>
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
            <label className="text-xl">{position}</label>
            <div className="pt-3">
              <input
                type=" text"
                name=""
                placeholder="Age "
                className="bg-primary-color   w-96 text-sm p-1   border rounded-md px-2 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="inline-block text-xl">{experience}</label>
            <div className="pt-3">
              <input
                type=" text"
                name=""
                placeholder="Region "
                className="bg-primary-color  w-96 text-sm p-1   border rounded-md px-2 focus:outline-none"
              />
            </div>
          </div>
        </div>


        <div className="grid pt-14">
        <label form="message" className="text-xl">
          {Cv}
        </label>

        <div className="inline-block pt-3">
        <input
                type=" text"
                name=""
                placeholder="Submit your google drive link "
                className="bg-primary-color   w-full text-sm p-1   border rounded-md px-2 focus:outline-none"
              />

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

export default ApplyForm
