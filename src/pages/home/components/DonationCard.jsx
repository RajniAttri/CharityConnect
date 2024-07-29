import React from "react";
import image4 from "../../../assets/images/Rectangle 5.png";
import Button from "../../../components/Button";

function DonationCard() {
  return (
    <div className="flex flex-col gap-4 shadow-md">
      <img src={image4} alt="" />
      <div className="p-4 flex flex-col gap-5">
        <div className="flex flex-row justify-between ">
          <div>
            <p className="font-medium">Goal</p>
            <p className="font-medium text-xl text-primary-color">$40000</p>
          </div>
          <div>
            <p className="font-medium">Rise</p>
            <p className="font-medium text-xl text-primary-color">$30000</p>
          </div>
          <div>
            <p className="font-medium">To Go</p>
            <p className="font-medium text-xl text-primary-color">$40000</p>
          </div>
        </div>

        <p className="font-bold text-xl">
          Children Education Needs For Change The World.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the industry's since the unknown.
        </p>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-4 text-primary-color">
            <i class="fa fa-user-alt"></i>
            <p>Adam</p>
          </div>
          <Button
            type="secondary-button"
            text="Donate Now"
            icon={<i class="fa fa-angle-right"></i>}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default DonationCard;
