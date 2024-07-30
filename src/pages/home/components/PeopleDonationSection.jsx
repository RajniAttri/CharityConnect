import React from "react";
import image9 from "../../../assets/images/Ellipse 94.png";
import image8 from "../../../assets/images/Rectangle 10.png";
import image7 from "../../../assets/images/Rectangle 9.png";
import Button from "../../../components/Button";

function PeopleDonationSection() {
  return (
    <section className="px-6 md:px-32 flex flex-row my-20 py-20 gap-8 items-center  bg-[#EEEAFC]">
      <div className=" relative h-fit bg-primary-color ">
        <img src={image7} alt="" />
        <img src={image8} alt="" className="absolute top-[50%] right-[-20%] " />
      </div>
      <div className="w-[5rem]"></div>
      <div className="flex flex-col gap-6 w-1/2">
        <div className="flex flex-col">
          <p className=" text-3xl md:text-5xl font-bold ">
            Need Pure Water For Mozam bique People.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry ore
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="border border-primary-color py-2 px-8 h-fit">
            {" "}
            $20
          </div>
          <div className="border border-primary-color py-2 px-8 h-fit">
            {" "}
            $50
          </div>
          <div className="border border-primary-color py-2 px-8 h-fit">
            {" "}
            $200
          </div>
          <div className="border border-primary-color  py-2 px-8 h-fit">
            {" "}
            Custom
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <Button
            type="primary-button"
            text="All causes"
            icon={<i class="fa fa-angle-right"></i>}
          ></Button>
          <Button
            type="secondary-button"
            text="Join Event"
            icon={<i class="fa fa-angle-right"></i>}
          ></Button>
        </div>
        <div className="flex flex-col">
          <p className=" text-xl md:text-2xl font-medium ">Great Donners</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry Lorem.
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <img src={image9} alt="" className=" h-16 w-16 " />
          <img src={image9} alt="" className=" h-16 w-16 " />
          <img src={image9} alt="" className=" h-16 w-16" />
          <img src={image9} alt="" className=" h-16 w-16" />
          <div className="w-16 h-16 bg-primary-color text-white text-2xl font-bold text-center flex items-center rounded-full">
            +320
          </div>
        </div>
      </div>
    </section>
  );
}
export default PeopleDonationSection;
