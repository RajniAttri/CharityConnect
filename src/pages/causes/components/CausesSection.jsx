import React from "react";
import DonationCard from "../../home/components/DonationCard";
import { donations } from "../data/data";

function CausesSection() {
 
  return (
    <section className="mx-6 md:mx-32 flex flex-col items-center my-20 gap-10">
      <div className=" flex flex-col lg:grid lg:grid-cols-3 gap-6">
      
        {donations.map((donation, index) => (
          <DonationCard key={donation.id} {...donation} />
        ))}
      </div>
    </section>
  );
}

export default CausesSection;
