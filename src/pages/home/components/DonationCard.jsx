import React from "react";
import image4 from "../../../assets/images/Rectangle 5.png";
import Button from "../../../components/Button";

function DonationCard(props) {
  const { title, description, image, author, items }=props;
  // console.log(image);
  return (
    <div className="flex flex-col gap-4 shadow-md  ">
      <img src={image} alt="" />

      <div className="p-4 flex flex-col gap-5">
        <div className="flex flex-row justify-between ">
          {
            items.map((item, index) => (
              <div key={index}>
                <p className="font-medium">{item.name}</p>
                <p className="font-medium text-xl text-primary-color">
                  {item.amount}
                </p>
              </div>
            ))}
        </div>

        <p className="font-bold text-xl">{title}</p>
        <p>{description}</p>

        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-4 text-primary-color">
            <i className="fa fa-user-alt"></i>
            <p>{author}</p>
          </div>
          <Button
            type="secondary-button"
            text="Donate Now"
            icon={<i className="fa fa-angle-right"></i>}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default DonationCard;
