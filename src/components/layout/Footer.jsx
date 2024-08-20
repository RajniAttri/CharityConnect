import React from "react";
import { Link } from "react-router-dom";
import Logo from "/assets/images/logo.png";
import image3 from "/assets/images/Rectangle 13.png";
import image4 from "/assets/images/Rectangle 14.png";
import image5 from "/assets/images/Rectangle 15.png";
import image1 from "/assets/images/Rectangle 2.png";
import image2 from "/assets/images/Rectangle 5.png";
import image6 from "/assets/images/Rectangle16.png";

function Footer() {
  return (
    <footer className="px-6 md:px-32  mt-20 pt-20 gap-8 items-center text-white bg-[#414141] ">
      <div className="flex flex-col md:flex-row justify-between gap-x-4">
        <div className="flex flex-col gap-6 w-1/3 md:w-full">
          <img src={Logo} alt="" className="w-20" />
          <p className=" text-sm ">
            Lorem Ipsum is simply dummy text of the industry's since the
            unknown. Lorem Ipsum is simply dummy text of the industry.
          </p>
        </div>

        <div className=" w-1/3 md:w-full">
          <h3 className="mb-6">Gallery</h3>
          <div className="flex flex-col justify-between">
            <div className=" flex ">
              <img src={image1} alt="" className="w-20 h-20 " />
              <img src={image2} alt="" className="w-20  h-20 mx-3" />
              <img src={image3} alt="" className="w-20 h-20  mx-1" />
            </div>

            <div className=" flex pt-3">
              <img src={image4} alt="" className="w-20 h-20" />
              <img src={image5} alt="" className="w-20 h-20 mx-3" />
              <img src={image6} alt="" className="w-20 h-20  mx-1" />
            </div>
          </div>
        </div>

        <div className="w-1/3 md:w-full flex flex-col gap-6">
          <h3>Quick Links</h3>
          <div className="flex flex-row gap-6  text-sm ">
            <ul className=" list-none flex flex-col gap-3 items-start ">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/career">Career</Link>
              </li>
              <li>
                <Link to="/leadership">Leadership</Link>
              </li>
              <li>
                <Link to="/faqs">FAQ's</Link>
              </li>
              <li>
                <Link to="/appointment">Appointments</Link>
              </li>
              <li>
                <Link to="/donners">Donners</Link>
              </li>
            </ul>

            <ul className="list-none flex flex-col gap-3 items-start ">
              <li>
                <Link to="/volunteer"> Become Volunteer</Link>
              </li>
              <li>
                <Link to="/donationhistory"> Donation History</Link>
              </li>
              <li>
                <Link to="/donationfailed"> Donation Failed</Link>
              </li>
              <li>
                <Link to="/404"> 404</Link>
              </li>
              <li>
                <Link to="/comingsoon"> Coming Soon</Link>
              </li>
              <li>
                <Link to="/#"> Medical Facilities </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-5 border-t mt-5 justify-between items-center">
        <p>
          © All right reserved 2023{" "}
          <span className="text-primary-color">Charityshay</span>
        </p>
        <div className="flex flex-row gap-5">
          <i className="fa fa-facebook-f"></i>
          <i className="fa fa-instagram"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
