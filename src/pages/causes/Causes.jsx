import React from "react";
import Header from "../../components/layout/Header";
import GeneralHero from "../../components/layout/GeneralHero";
import image from "../../assets/images/Rectangle 2.png";

function Causes() {
  return (
    <div className="">
      <Header outerCircle="">
        <GeneralHero title="Causes" image={image}></GeneralHero>
      </Header>
    </div>
  );
}

export default Causes;
