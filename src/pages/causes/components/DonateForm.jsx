import React from 'react'
import Button from '../../../components/Button'

function DonateForm() {
  return (
    <div className=' mx-6 md:mx-32   my-20 flex flex-col gap-8  bg-primary-color text-white p-6 '>
        <p className=" text-2xl md:text-3xl font-bold ">
            Donate Now
          </p>
        
        <form className="flex flex-col gap-8">
        <div className="flex flex-row gap-8">
          <div className="border border-white py-2 px-8 h-fit">
            {" "}
            $20
          </div>
          <div className="border border-white  py-2 px-8 h-fit">
            {" "}
            $50
          </div>
          <div className="border border-white py-2 px-8 h-fit">
            {" "}
            $200
          </div>
          <div className="border border-white  py-2 px-8 h-fit">
            {" "}
            $200
          </div>
          <div className="border border-white   py-2 px-8 h-fit">
            {" "}
            Custom
          </div>
        </div>
            <div className='flex flex-col gap-6'> 
            <p className='font-bold'> Payment Method</p>
            <div className="flex flex-row gap-8">
                {/* radio boxes */}
            <div className=''>
                <input type="radio" id='testDonation' name='testDonation' value='testDonation' />
                <label className='ml-2' htmlFor='testDonation'>Test Donation</label>
            </div>
            <div className=''>
                <input type="radio" id='offlineDonation' name='offlineDonation' value='offlineDonation' />
                <label className='ml-2' htmlFor='offlineDonation'>Offline Donation</label>
            </div>
            <div className=''>
                <input type="radio" id='stripeCreditCard' name='stripeCreditCard' value='stripeCreditCard' />
                <label className='ml-2' htmlFor='stripeCreditCard'>Stripe-Credit Card</label>
            </div>

            </div>
            <p className='font-bold'> Personal Method</p>
            <div className='flex flex-col gap-6'>
                {/* row one */}
                <div className='flex flex-row items-center gap-8'>
                    <div className='flex flex-col w-1/2'>
                        <label  className='text-sm' htmlFor="fullName">FullName</label>
                        <input className="bg-transparent w-full border border-white rounded-lg p-2 text-sm" type="text" id='fullName' name='fullName' placeholder='Full Name'/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label  className='text-sm' htmlFor="email">Email Address</label>
                        <input className="bg-transparent w-full border border-white rounded-lg p-2 text-sm" type="text" id='email' name='email' placeholder='email address'/>
                    </div>
                </div>
                {/* row two  */}
                <div className='flex flex-row gap-8'>
                    <div className='flex flex-col w-1/2'>
                        <label  className='text-sm' htmlFor="tel">Phone number</label>
                        <input className="bg-transparent w-full border border-white rounded-lg p-2 text-sm" type="text" id='tell' name='tell' placeholder='phone number'/>
                    </div>
                    <div className='flex flex-col w-1/2'>
                        <label  className='text-sm' htmlFor="address"> Address</label>
                        <input className="bg-transparent w-full border border-white rounded-lg p-2 text-sm" type="text" id='address' name='address' placeholder=' address'/>
                    </div>
                </div>
                {/* row three */}
                <div className='flex flex-col w-full'>
                <label  className='text-sm' htmlFor="message"> Message</label>
                <input className="bg-transparent w-full border border-white rounded-lg p-2 text-sm h-40 text-top " type="text" id='message' name='message' placeholder='enter message here...'/>
                    
                </div>
            </div>
            </div>
         
          
          <button className='  text-white py-2 px-4 flex flex-row gap-4 rounded-[.4rem] items-center w-fit border-solid border-white border bg-transparent hover:bg-white hover:text-primary-color;'>
            <p>Donate Now</p>
            <i className="fa fa-angle-right"></i>
          </button>
        </form>
    </div>
  )
}

export default DonateForm
