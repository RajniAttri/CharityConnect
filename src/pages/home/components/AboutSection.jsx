import React from "react";
import image from "../../../assets/images/Rectangle 2.png";
import image3 from "../../../assets/images/Rectangle 3.png";
import image2 from "../../../assets/images/Rectangle 4.png";
import Button from "../../../components/Button";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="flex flex-col gap-6 ">
        <img src={image} alt="" />
        <div className="flex flex-row gap-6 ">
          <img src={image2} alt="" className="w-1/2 h-auto" />
          <img src={image3} alt="" className="w-1/2 h-auto" />
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <p className=" text-3xl md:text-5xl font-bold ">
            Givest is The Non Profitable Organization
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry orem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown. Lorem Ipsum is simply dummy text
            of the printing and typesetting industry orem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an
            unknown.Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown.
          </p>
        </div>
        <div className="flex flex-row gap-6 ">
          <p className="text-xl font-medium">
            Need your simple helpfor save children.
          </p>
          <div className=" border border-r-primary-color border-r-8"></div>
          <p className="text-xl font-medium">
            Need your simple helpfor save children.
          </p>
        </div>
        <Button
          type="secondary-button"
          text="Donate Now"
          icon={<i class="fa fa-angle-right"></i>}
        ></Button>
      </div>
    </section>
  );
}

export default AboutSection;
