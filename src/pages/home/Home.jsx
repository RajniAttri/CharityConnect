import React from "react";
import image9 from "../../assets/images/Ellipse 94.png";
import image10 from "../../assets/images/images 1.png";
import image8 from "../../assets/images/Rectangle 10.png";
import image7 from "../../assets/images/Rectangle 9.png";
import "../../assets/styles/style.css";
import Button from "../../components/Button";
import Header from "../../components/layout/Header";
import DonationSection from "./components/DonationSection";
import HelpSection from "./components/HelpSection";
import Hero from "./components/Hero";

function Home() {
  const OuterCircle = () => {
    return (
      <div className="w-[32rem] h-[32rem] border border-solid border-primary-color absolute -left-64 rounded-full -top-10 -z-10"></div>
    );
  };
  return (
    <div className="">
      {/*  */}
      <Header outerCircle={<OuterCircle></OuterCircle>}>
        {/* Hero section */}
        <Hero></Hero>
      </Header>

      {/* Help section */}
      <HelpSection></HelpSection>

      {/* about us section */}
      

      {/* donate section  */}

      <DonationSection></DonationSection>

      {/* people donation  */}
      <section className="px-6 md:px-32 flex flex-row my-20 py-20 gap-8 items-center  bg-[#EEEAFC]">
        <div className=" relative h-fit bg-primary-color ">
          <img src={image7} alt="" />
          <img
            src={image8}
            alt=""
            className="absolute top-[50%] right-[-20%] "
          />
        </div>
        <div className="w-[5rem]"></div>
        <div className="flex flex-col gap-6 w-1/2">
          <div className="flex flex-col">
            <p className=" text-3xl md:text-5xl font-bold ">
              Need Pure Water For Mozam bique People.
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry ore
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="border border-primary-color py-2 px-8 h-fit">
              {" "}
              $20
            </div>
            <div className="border border-primary-color py-2 px-8 h-fit">
              {" "}
              $50
            </div>
            <div className="border border-primary-color py-2 px-8 h-fit">
              {" "}
              $200
            </div>
            <div className="border border-primary-color  py-2 px-8 h-fit">
              {" "}
              Custom
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <Button
              type="secondary-button"
              text="All causes"
              icon={<i class="fa fa-angle-right"></i>}
            ></Button>
            <Button
              type="secondary-button"
              text="Join Event"
              icon={<i class="fa fa-angle-right"></i>}
            ></Button>
            {/* <button className="primary-button">
              Donate Now
              <i class="fa fa-angle-right"></i>
            </button> */}
            {/* <button className="secondary-button ">
              Join Event
              <i class="fa fa-angle-right"></i>
            </button> */}
          </div>
          <div className="flex flex-col">
            <p className=" text-xl md:text-2xl font-medium ">Great Donners</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry Lorem.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <img src={image9} alt="" className=" h-16 w-16 " />
            <img src={image9} alt="" className=" h-16 w-16 " />
            <img src={image9} alt="" className=" h-16 w-16" />
            <img src={image9} alt="" className=" h-16 w-16" />
            <div className="w-16 h-16 bg-primary-color text-white text-2xl font-bold text-center flex items-center rounded-full">
              +320
            </div>
          </div>
        </div>
      </section>

      {/* event cart  */}
      <section className="px-6 md:px-32 flex flex-row my-20 py-20 gap-8 items-center ">
        <div className="flex flex-col w-1/3 gap-6 ">
          <p className=" text-3xl md:text-5xl font-bold ">
            Multiple Event & Conference
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry ore
          </p>
          <button className="primary-button">
            Donate Now
            <i class="fa fa-angle-right"></i>
          </button>
        </div>
        <div>
          <div className="flex flex-row gap-6 shadow-lg p-4">
            <img src={image10} alt="" />
            <div>
              <p className="text-2xl font-medium">
                Use Hashtags To Support Online
              </p>
              <p>JANUARY 17, 2024 @ 12:00 AM - JANUARY 30, 2024 @ 11:59 PM</p>
            </div>
            <div className=" border border-r-gray-400 border-r-2"></div>
            <div>
              <p className="text-2xl font-medium">Event Location:</p>
              <p>Mitchell, 57301 United States</p>
            </div>
          </div>
        </div>
      </section>
      {/* statistics section  */}
      <section className="px-6 md:px-32 flex flex-row my-20 py-20 gap-8 items-center">
        <div className="flex flex-col w-1/3 gap-6 items-center">
          <p className=" text-3xl md:text-5xl font-bold ">520k</p>
          <p className="font-bold text-3xl">Poor People</p>
        </div>
        <div className="flex flex-col w-1/3 gap-6 items-center">
          <p className=" text-3xl md:text-5xl font-bold ">842M</p>
          <p className="font-bold text-3xl">Fund Rise</p>
        </div>
        <div className="flex flex-col w-1/3 gap-6 items-center">
          <p className=" text-3xl md:text-5xl font-bold ">24k</p>
          <p className="font-bold text-3xl">Active Member</p>
        </div>
      </section>

      {/* review section  */}
      <section className=" flex flex-row my-20 py-20 gap-8 items-center  bg-[#EEEAFC]">
        <div className="flex flex-row gap-10">
          <div className="w-1/3 h-full p-20 py-28 text-center flex items-center section-volunteer text-white">
            <p className="text-7xl md:text-4xl font-bold ">
              What People Say About Us
            </p>
          </div>
          <div className="flex flex-col gap-8 pr-20">
            <div>
              <img src={image9} alt="" className=" h-18 w-18 " />
              <p>
                It is long established fact that reader will distract by the
                readable content a page when looking atten layout. The point of
                using and that it has a normal distribution of letters
              </p>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col gap-2">
                <p className="font-medium text-2xl">Active Member</p>
                <p className="">Volunteer</p>
              </div>
              <div className="flex flex-row p-4 items-start gap-4 text-2xl w-1/3  bg-primary-color text-white">
                <i class="fa fa-arrow-circle-o-left"></i>
                <i class="fa fa-arrow-circle-o-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section news and blog  */}
      <section className="mx-6 md:mx-32 flex flex-col items-center my-20 gap-10">
        <p className=" text-3xl md:text-5xl font-bold text-center ">
          Latest News From <br /> Givest Blog
        </p>
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* card 2  */}

          {/* card 3 */}
        </div>

        <div className="flex flex-row gap-1 ">
          <div className="w-4 h-4 rounded-lg bg-[#9483F1]"></div>
          <div className="w-16 h-4 rounded-lg bg-primary-color"></div>
          <div className="w-4 h-4 rounded-lg bg-[#9483F1]"></div>
        </div>
      </section>
    </div>
  );
}
export default Home;
