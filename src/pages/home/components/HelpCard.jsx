import React from "react";
import Button from "../../../components/Button";

function HelpCard(props) {
  const icon = props.icon;
  const title = props.title;
  const description = props.description;

  return (
    <div className="help-card">
      <img src={icon} alt="volunteer icon" />
      <div className="text-center">
        <p className="text-3xl font-medium">{title}</p>
        <p className="text-center">{description}</p>
      </div>
      <Button
        type="secondary-button"
        text="Read More"
        // icon={<i className="fa fa-angle-right"></i>}
      ></Button>
      {/* <button className="secondary-button">Read More</button> */}
    </div>
  );
}

export default HelpCard;
