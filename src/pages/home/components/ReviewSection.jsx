import React from "react";
import image9 from "../../../assets/images/Ellipse 94.png";
import ReviewCard from "./ReviewCard";

function ReviewSection() {
  return (
    <section className=" flex flex-row my-20 py-20 gap-8 items-center  bg-[#EEEAFC]">

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-1/3 h-full p-20 py-28 text-center flex items-center section-volunteer text-white">

          <p className="text-7xl md:text-4xl font-bold ">
            What People Say About Us
          </p>
        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="p-10">
            <ReviewCard
              image={image9}
              review_text=" It is long established fact that reader will distract by the readable
          content a page when looking atten layout. The point of using and that
          it has a normal distribution of letters"
              // We don't need this here. It will affect our styles
              // role="Volunteer"
            ></ReviewCard>
          </div>

          <div className="flex justify-between pl-10">
            <div className="flex flex-col gap-1">
              <p className="text-2xl font-bold">Spyke Lionel</p>
              <p>Volunteer</p>
            </div>
            <div className="flex flex-row p-4 items-start gap-4 text-2xl w-1/3  bg-primary-color text-white ">
              <div className="border w-10 h-10 rounded-full text-center cursor-pointer">
                <i class="fa fa-arrow-left"></i>
              </div>
              <div className="border w-10 h-10 rounded-full text-center cursor-pointer">
                <i class="fa fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewSection;
