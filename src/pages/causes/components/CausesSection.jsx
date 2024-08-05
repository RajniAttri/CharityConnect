import React from 'react'
import DonationCard from '../../home/components/DonationCard'
import image from "../../../assets/images/Rectangle 5.png";


text={image}
function CausesSection() {
  const donations = [
    {
      id: 1,
      title: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown",
      image: { image },
      author: "Adam",
      items: [
        { name: "Goal", amount: "$40000" },
        { name: "Rice", amount: "$30000" },
        { name: "To Go", amount: "$40000" },
      ],
    },
    {
      id: 2,
      title: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown",
      image: { image },
      author: "Adam",
      items: [
        { name: "Goal", amount: "$40000" },
        { name: "Rice", amount: "$30000" },
        { name: "To Go", amount: "$40000" },
      ],
    },
    {
      id: 3,
      title: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown",
      image: { image },
      author: "Adam",
      items: [
        { name: "Goal", amount: "$40000" },
        { name: "Rice", amount: "$30000" },
        { name: "To Go", amount: "$40000" },
      ],
    },
    {
      id: 4,
      title: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown",
      image: { image },
      author: "Adam",
      items: [
        { name: "Goal", amount: "$40000" },
        { name: "Rice", amount: "$30000" },
        { name: "To Go", amount: "$40000" },
      ],
    },
    {
      id: 5,
      title: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown",
      image: { image },
      author: "Adam",
      items: [
        { name: "Goal", amount: "$40000" },
        { name: "Rice", amount: "$30000" },
        { name: "To Go", amount: "$40000" },
      ],
    },
    {
      id: 6,
      title: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown",
      image: { image },
      author: "Adam",
      items: [
        { name: "Goal", amount: "$40000" },
        { name: "Rice", amount: "$30000" },
        { name: "To Go", amount: "$40000" },
      ],
    },
    {
      id: 7,
      title: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown",
      image: { image },
      author: "Adam",
      items: [
        { name: "Goal", amount: "$40000" },
        { name: "Rice", amount: "$30000" },
        { name: "To Go", amount: "$40000" },
      ],
    },
    {
      id: 8,
      title: "Children Education Needs For Change The World.",
      description:
        "Lorem Ipsum is simply dummy text of the industry's since the unknown",
      image: { image },
      author: "Adam",
      items: [
        { name: "Goal", amount: "$40000" },
        { name: "Rice", amount: "$30000" },
        { name: "To Go", amount: "$40000" },
      ],
    },

  ];
  return (
    <section className="mx-6 md:mx-32 flex flex-col items-center my-20 gap-10">
      <div className=" flex flex-col lg:grid lg:grid-cols-3 gap-6">
        {/* {new Array(9).fill(null).map((_, index) => (
          <DonationCard key={index} className=""></DonationCard>
        ))} */}
  {
    donations.map((donation,index)=>(
    
      <DonationCard key={index} {...donation}/>

    ))
  }

      </div>
    </section>
  );
}

export default CausesSection
