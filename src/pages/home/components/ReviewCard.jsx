import React from "react";

function ReviewCard(props) {
  const { review_text, status, role, image } = props;
  return (
    <div className="flex flex-col gap-6">
      <div>
        <img src={image} alt="" className=" h-18 w-18 " />
        <p className="mt-2">{review_text}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-medium text-2xl">{status}</p>
        <p className="">{role}</p>
      </div>
    </div>
  );
}

export default ReviewCard;
