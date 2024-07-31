import React from 'react'
import DonationCard from '../../home/components/DonationCard'

function CausesSection() {
  return (
    <section className="mx-6 md:mx-32 flex flex-col items-center my-20 gap-10">
      <div className=" flex flex-col lg:grid lg:grid-cols-3 gap-6">
        {new Array(9).fill(null).map((_, index) => (
          <DonationCard key={index} className=""></DonationCard>
        ))}
      </div>
    </section>
  );
}

export default CausesSection
