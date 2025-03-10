import React from "react";
import heroImage from "/assets/images/hero-image.png";
import Button from "../../../components/Button";
function Hero() {
  return (
    <div className="h-lvh flex flex-row items-center justify-between ">
      <div className="flex flex-col gap-7 md:w-2/3 w-full ">
        <p className=" text-3xl md:text-5xl font-bold">
          We Need Your Powerful Hands To
          <span className=" text-primary-color"> Change </span>The World.
        </p>
        <div className="flex gap-6">
        <Button
              className="w-full"
              type="primary-link"
              text="All Causes"
              icon={<i className="fa fa-angle-right"></i>}
              href={`/causes`}
            ></Button>
          <Button
            type="secondary-link"
            text="Donate Now"
            href={`/donate`}
            icon={<i className="fa fa-angle-right"></i>}
          ></Button>
        </div>
      </div>

      <div className="relative border-2 border-solid border-primary-color flex flex-col rounded-full">
        <div className="w-20 h-20 bg-primary-color absolute -right-8 rounded-full top-24"></div>
        <div className="relative top-10 right-10 -z-10 ">
          <img src={heroImage} alt="hero image" className="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
