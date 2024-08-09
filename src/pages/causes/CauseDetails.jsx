import React from "react";
import image from "../../assets/images/Rectangle 2.png";
import { useParams } from "react-router-dom";
import Header from "../../components/layout/Header"
import GeneralHero from "../../components/layout/GeneralHero";
import { donations } from "../causes/data/data";

function CauseDetails() {
  const id = useParams().id;
  // Fetch cause data from an data store using the id parameter.
const cause = donations.find(donation => donation.id == id);





  return (
    <>
   <Header  outerCircle=""></Header>
   <GeneralHero title="Causes" subTitle={cause?.title||"no title"} image={image}></GeneralHero>

    </>
  );
}

export default CauseDetails;
