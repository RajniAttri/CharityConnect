import React from "react";
import DonationCard from "./DonationCard";

function DonationSection() {
  return (
    <section className="mx-6 md:mx-32 flex flex-col items-center my-20 gap-10">
      <p className=" text-3xl md:text-5xl font-bold text-center ">
        Donate For Poor People. <br />
        Causes of Givest
      </p>
      <div className="flex flex-col gap-8 lg:flex-row">
        <DonationCard></DonationCard>
        {/* card 2  */}
        <DonationCard></DonationCard>
        {/* card 3 */}
        <DonationCard></DonationCard>
      </div>

      <div className="flex flex-row gap-1 ">
        <div className="w-4 h-4 rounded-lg bg-[#9483F1]"></div>
        <div className="w-16 h-4 rounded-lg bg-primary-color"></div>
        <div className="w-4 h-4 rounded-lg bg-[#9483F1]"></div>
      </div>
    </section>
  );
}

export default DonationSection;
