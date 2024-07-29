import React from "react";
import Logo from '/images/logo.png'
import heroImage from '/images/hero-image.png';
import icon from "/images/icon.png";
import icon2 from "/images/icon2.png";
import icon3 from "/images/icon3.png";
import image from "/images/Rectangle 2.png";
import image2 from "/images/Rectangle 4.png";
import image3 from "/images/Rectangle 3.png";
import image4 from "/images/Rectangle 5.png";
import image5 from "/images/Rectangle 6.png";
import image6 from "/images/image3.png";
import image7 from "/images/Rectangle 9.png";
import image8 from "/images/Rectangle 10.png";
import image9 from "/images/Ellipse 94.png";
import image10 from "/images/images 1.png";

function Home(){
    return (
      <div className="  ">
        <header className="mx-6 md:mx-32">
          <nav className="flex justify-between items-center py-6">
            <img src={Logo} alt="logo" className="w-20 " />
            <div className="  flex gap-4 text-sm">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Causes</a>
              <a href="#">Blog</a>
              <a href="#">Event</a>
              <a href="#">Contact Us</a>
            </div>
            <button className="primary-button ">
              Donate Now
              <i class="fa fa-angle-right"></i>
            </button>
          </nav>
          <div className="h-lvh flex flex-row items-center justify-between ">
            <div className="flex flex-col gap-7 md:w-2/3 w-full ">
              <p className=" text-3xl md:text-5xl font-bold">
                We Need Your Powerful Hands To
                <span className=" text-primary-color"> Change </span>The World.
              </p>
              <div className="flex gap-6">
                <button className="primary-button ">
                  All causes
                  <i class="fa fa-angle-right"></i>
                </button>
                <button className="secondary-button ">
                  Donate Now
                  <i class="fa fa-angle-right"></i>
                </button>
              </div>
            </div>

            <div className=" flex flex-col">
              <div className="border w-full h-full  bg-primary-color  relative left-11 bu "></div>
              <div className="">
                <img src={heroImage} alt="hero image" className="" />
              </div>
            </div>
          </div>
        </header>
        <section className="mx-6 md:mx-32 flex flex-col items-center my-20 gap-10">
          <p className=" text-3xl md:text-5xl font-bold ">How Could You Help</p>
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* card 1  */}
            <div className="flex flex-col gap-8 items-center py-10 px-8 border border-[#5A5A5A] rounded-3xl ">
              <img src={icon} alt="volunteer icon" />
              <div className="text-center">
                <p className="text-3xl font-medium">Become a Volunteer</p>
                <p className="text-center">
                  You can contribute your time, skills and knowledge through
                  volunteering with the UN.
                </p>
              </div>
              <button className="secondary-button">Read More</button>
            </div>
            {/* card 2 */}
            <div className="flex flex-col gap-8 items-center py-10 px-8 border  border-[#5A5A5A] rounded-3xl  ">
              <img src={icon2} alt="volunteer icon" />
              <div className="text-center">
                <p className="text-3xl font-medium">Become a Donation</p>
                <p className="text-center">
                  You can contribute your time, skills and knowledge through
                  volunteering with the UN.
                </p>
              </div>
              <button className="secondary-button">Read More</button>
            </div>
            {/* card 3 */}
            <div className="flex flex-col gap-8 items-center py-10 px-8 border  border-[#5A5A5A]  rounded-3xl ">
              <img src={icon3} alt="volunteer icon" />
              <div className="text-center">
                <p className="text-3xl font-medium">Send Donation</p>
                <p className="text-center">
                  You can contribute your time, skills and knowledge through
                  volunteering with the UN.
                </p>
              </div>
              <button className="secondary-button">Read More</button>
            </div>
          </div>
        </section>
        {/* about us section */}
        <section className="px-6 md:px-32 flex flex-row my-20 py-20 gap-8 items-center  bg-[#EEEAFC]">
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
                industry orem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown. Lorem Ipsum is simply
                dummy text of the printing and typesetting industry orem Ipsum
                has been the industry's standard dummy text ever since the
                1500s, when an unknown.Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an unknown.
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
            <button className="primary-button ">
              Donate Now
              <i class="fa fa-angle-right"></i>
            </button>
          </div>
        </section>
        {/* donate section  */}
        <section className="mx-6 md:mx-32 flex flex-col items-center my-20 gap-10">
          <p className=" text-3xl md:text-5xl font-bold text-center ">
            Donate For Poor People. <br />
            Causes of Givest
          </p>
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="flex flex-col gap-4 shadow-md">
              <img src={image4} alt="" />
              <div className="p-4 flex flex-col gap-5">
                <div className="flex flex-row justify-between ">
                  <div>
                    <p className="font-medium">Goal</p>
                    <p className="font-medium text-xl text-primary-color">
                      $40000
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Rise</p>
                    <p className="font-medium text-xl text-primary-color">
                      $30000
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">To Go</p>
                    <p className="font-medium text-xl text-primary-color">
                      $40000
                    </p>
                  </div>
                </div>

                <p className="font-bold text-xl">
                  Children Education Needs For Change The World.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the industry's since the
                  unknown.
                </p>

                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-4 text-primary-color">
                    <i class="fa fa-user-alt"></i>
                    <p>Adam</p>
                  </div>
                  <button className="secondary-button ">
                    Donate Now
                    <i class="fa fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* card 2  */}
            <div className="flex flex-col gap-4 shadow-md">
              <img src={image5} alt="" />
              <div className="p-4 flex flex-col gap-5">
                <div className="flex flex-row justify-between ">
                  <div>
                    <p className="font-medium">Goal</p>
                    <p className="font-medium text-xl text-primary-color">
                      $40000
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Rise</p>
                    <p className="font-medium text-xl text-primary-color">
                      $30000
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">To Go</p>
                    <p className="font-medium text-xl text-primary-color">
                      $40000
                    </p>
                  </div>
                </div>

                <p className="font-bold text-xl">
                  Children Education Needs For Change The World.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the industry's since the
                  unknown.
                </p>

                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-4 text-primary-color">
                    <i class="fa fa-user-alt"></i>
                    <p>Adam</p>
                  </div>
                  <button className="secondary-button ">
                    Donate Now
                    <i class="fa fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="flex flex-col gap-4 shadow-md">
              <img src={image6} alt="" />
              <div className="p-4 flex flex-col gap-5">
                <div className="flex flex-row justify-between ">
                  <div>
                    <p className="font-medium">Goal</p>
                    <p className="font-medium text-xl text-primary-color">
                      $40000
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Rise</p>
                    <p className="font-medium text-xl text-primary-color">
                      $30000
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">To Go</p>
                    <p className="font-medium text-xl text-primary-color">
                      $40000
                    </p>
                  </div>
                </div>

                <p className="font-bold text-xl">
                  Children Education Needs For Change The World.
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the industry's since the
                  unknown.
                </p>

                <div className="flex flex-row items-center justify-between">
                  <div className="flex flex-row gap-4 text-primary-color">
                    <i class="fa fa-user-alt"></i>
                    <p>Adam</p>
                  </div>
                  <button className="secondary-button ">
                    Donate Now
                    <i class="fa fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-1 ">
            <div className="w-4 h-4 rounded-lg bg-[#9483F1]"></div>
            <div className="w-16 h-4 rounded-lg bg-primary-color"></div>
            <div className="w-4 h-4 rounded-lg bg-[#9483F1]"></div>
          </div>
        </section>
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
              <button className="primary-button">
                Donate Now
                <i class="fa fa-angle-right"></i>
              </button>
              <button className="secondary-button ">
                Join Event
                <i class="fa fa-angle-right"></i>
              </button>
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
            <div className="w-1/3 px-20 text-center flex items-center bg-slate-600 bg-[ url('../../../public/images/Rectangle 11.png')]">
              <p className=" text-3xl md:text-4xl font-bold ">
                What People Say About Us
              </p>
            </div>
            <div className="flex flex-col gap-8 pr-20">
              <div>
                <img src={image9} alt="" className=" h-18 w-18 " />
                <p>
                  It is long established fact that reader will distract by the
                  readable content a page when looking atten layout. The point
                  of using and that it has a normal distribution of letters
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