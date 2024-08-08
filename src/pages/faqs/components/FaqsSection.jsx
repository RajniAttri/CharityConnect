import React from "react";

const FaqsSection = () => {
  return (
    <div className="mt-10 text-center">
      <h1 className="text-4xl font-semibold">Frequently Asked Questions</h1>
      <p className="text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        adipisci. Perspiciatis explicabo modi exercitationem, nulla praesentium
        pariatur ipsam suscipit magni?
      </p>

      <div className="flex justify-evenly pt-10">
        <button className="bg-primary-color text-white p-5 rounded-md"> General FAQ'S</button>
        <p>DONATIONS FAQ'S</p>
        <p>CHARITY FAQ'S</p>
      </div>

      <div className="p-10 bg-white text-gray-700">
        <div className="relative w-[1400px] overflow-hidden mx-28">
          <input
            type="checkbox"
            className="peer absolute top-0
             inset-x-0 w-full h-12
             opacity-0 z-10 cursor-pointer"
          />

          <div
            className="
           bg-primary-color h-16 w-full flex items-center pl-5 "
          >
            <h1 className="text-lg font font-semibold text-white">
              
              How do i apply to get a charity bib?
            </h1>
          </div>

          <div
            className="absolute top-3 right-3 text-white transition-transform duration-500
           rotate-0   peer-checked:rotate-180"
          >
            {/**arrow */}
            <i className="fa fa-angle-down pr-2 px-2"></i>
          </div>

          <div
            className="
    bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
            {/**content */}
            <div className="p-4">
              <p className="text-center  text-2xl">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati quo numquam molestias sunt quas, fugit quod
                perspiciatis iste itaque ut!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati quo numquam molestias sunt quas, fugit quod
                perspiciatis iste itaque ut!
              </p>
            </div>
          </div>
        </div>
          
      </div>

        
      

         {/*second collapse*/}
      <div className="p-10 bg-white text-gray-700">

<div className="relative w-[1400px] overflow-hidden mx-28">
  <input
    type="checkbox"
    className="peer absolute top-0
     inset-x-0 w-full h-12
     opacity-0 z-10 cursor-pointer"
  />
  <div
    className="
   bg-primary-color h-16 w-full flex items-center pl-5 "
  >
    <h1 className="text-lg font font-semibold text-white">
      
      How much money do i have to raise and who pay my entry fee?
    </h1>
  </div>

  <div
    className="absolute top-3 right-3 text-white transition-transform duration-500
   rotate-0   peer-checked:rotate-180"
  >
    {/**arrow */}
    <i className="fa fa-angle-down pr-2 px-2"></i>
  </div>

  <div
    className="
bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
    {/**content */}
    <div className="p-4">
      <p className="text-center text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Obcaecati quo numquam molestias sunt quas, fugit quod
        perspiciatis iste itaque ut!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Obcaecati quo numquam molestias sunt quas, fugit quod
        perspiciatis iste itaque ut!
      </p>
    </div>
  </div>
</div>
</div>


 {/*third collapse*/}
 <div className="p-10 bg-white text-gray-700">

<div className="relative w-[1400px] overflow-hidden mx-28">
  <input
    type="checkbox"
    className="peer absolute top-0
     inset-x-0 w-full h-12
     opacity-0 z-10 cursor-pointer"
  />
  <div
    className="
   bg-primary-color h-16 w-full flex items-center pl-5 "
  >
    <h1 className="text-lg font font-semibold text-white">
      Is there a training program and group runs?
    </h1>
  </div>

  <div
    className="absolute top-3 right-3 text-white transition-transform duration-500
   rotate-0   peer-checked:rotate-180"
  >
    {/**arrow */}
    <i className="fa fa-angle-down pr-2 px-2"></i>
  </div>

  <div
    className="
bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
    {/**content */}
    <div className="p-4">
      <p className="text-center text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Obcaecati quo numquam molestias sunt quas, fugit quod
        perspiciatis iste itaque ut!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Obcaecati quo numquam molestias sunt quas, fugit quod
        perspiciatis iste itaque ut!
      </p>
    </div>
  </div>
</div>
</div>


 {/*fourth collapse*/}
 <div className="p-10 bg-white text-gray-700">

<div className="relative w-[1400px] overflow-hidden mx-28">
  <input
    type="checkbox"
    className="peer absolute top-0
     inset-x-0 w-full h-12
     opacity-0 z-10 cursor-pointer"
  />
  <div
    className="
   bg-primary-color h-16 w-full flex items-center pl-5 "
  >
    <h1 className="text-lg font font-semibold text-white">
      
      Will there be fundraising support?
    </h1>
  </div>

  <div
    className="absolute top-3 right-3 text-white transition-transform duration-500
   rotate-0   peer-checked:rotate-180"
  >
    {/**arrow */}
    <i className="fa fa-angle-down pr-2 px-2"></i>
  </div>

  <div
    className="
bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
    {/**content */}
    <div className="p-4">
      <p className="text-center text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Obcaecati quo numquam molestias sunt quas, fugit quod
        perspiciatis iste itaque ut!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Obcaecati quo numquam molestias sunt quas, fugit quod
        perspiciatis iste itaque ut!
      </p>
    </div>
  </div>
</div>
</div>
 {/*firth collapse*/}
 <div className="p-10 bg-white text-gray-700">

<div className="relative w-[1400px] overflow-hidden mx-28">
  <input
    type="checkbox"
    className="peer absolute top-0
     inset-x-0 w-full h-12
     opacity-0 z-10 cursor-pointer"
  />
  <div
    className="
   bg-primary-color h-16 w-full flex items-center pl-5 "
  >
    <h1 className="text-lg font font-semibold text-white">
      
      What if i don't meet my fundraising obligation?
    </h1>
  </div>

  <div
    className="absolute top-3 right-3 text-white transition-transform duration-500
   rotate-0   peer-checked:rotate-180"
  >
    {/**arrow */}
    <i className="fa fa-angle-down pr-2 px-2"></i>
  </div>

  <div
    className="
bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
    {/**content */}
    <div className="p-4">
      <p className="text-center text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Obcaecati quo numquam molestias sunt quas, fugit quod
        perspiciatis iste itaque ut!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Obcaecati quo numquam molestias sunt quas, fugit quod
        perspiciatis iste itaque ut!
      </p>
    </div>
  </div>
</div>
</div>
 {/*six collapse*/}
 <div className="p-10 bg-white text-gray-700">

<div className="relative w-[1400px] overflow-hidden mx-28">
  <input
    type="checkbox"
    className="peer absolute top-0
     inset-x-0 w-full h-12
     opacity-0 z-10 cursor-pointer"
  />
  <div
    className="
   bg-primary-color h-16 w-full flex items-center pl-5 "
  >
    <h1 className="text-lg font font-semibold text-white">
      
      When should i book my travel and what dates should i plan for?
    </h1>
  </div>

  <div
    className="absolute top-3 right-3 text-white transition-transform duration-500
   rotate-0   peer-checked:rotate-180"
  >
    {/**arrow */}
    <i className="fa fa-angle-down pr-2 px-2"></i>
  </div>

  <div
    className="
bg-white overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40">
    {/**content */}
    <div className="p-4">
      <p className="text-center text-2xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Obcaecati quo numquam molestias sunt quas, fugit quod
        perspiciatis iste itaque ut!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Obcaecati quo numquam molestias sunt quas, fugit quod
        perspiciatis iste itaque ut!
      </p>
    </div>
  </div>
</div>
</div>


      
    </div>
  );
};

export default FaqsSection;
