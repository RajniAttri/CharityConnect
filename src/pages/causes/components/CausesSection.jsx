import React from 'react'
import DonationCard from '../../home/components/DonationCard'

function CausesSection() {
  return (
    <div>
      {new Array(8).fill(null).map((_, index) => (
        <DonationCard key={index} >
            </DonationCard>
      ))}
    </div>
  );
}

export default CausesSection