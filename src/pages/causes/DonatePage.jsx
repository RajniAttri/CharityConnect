import React from "react";
import image from "../../assets/images/Rectangle 2.png";
import Footer from "../../components/layout/Footer";
import GeneralHero from "../../components/layout/GeneralHero";
import Header from "../../components/layout/Header";
import DonateForm from "./components/DonateForm";

function DonatePage() {
  return (
    <>
      <Header outerCircle=""></Header>

      <GeneralHero
        title="Causes"
        subTitle="Donate Form"
        image={image}
      ></GeneralHero>
      <DonateForm></DonateForm>
      <Footer></Footer>
    </>
  );
}

export default DonatePage;
