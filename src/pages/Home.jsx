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
        <section className="px-6 md:px-32 flex flex-row my-20 py-20 gap-8 items-center bg-[#EEEAFC]">
        <div className="flex flex-row gap-10">
        <div className="">
            <img src={image7} alt="" />
            <img src={image8} alt="" className="relative  top-[-10rem] right-[-20rem]" />
        </div>
        </div>
        </section>
      </div>
    );
}
export default Home;