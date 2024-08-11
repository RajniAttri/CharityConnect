import React from "react";
import image23 from "../../assets/images/map1.jpg";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";
import Hero1 from "../../components/layout/Hero1";

const Contact = () => {
  return (
    <div>
      <Header></Header>
      {/**  <Hero1/>*/}

      <Hero1 title="Contact Us" text="Home" span="Contact Us" />

      <section>
        <div className=" flex pt-12  justify-center">
          <div className="bg-primary-color w-[500px] h-[550px] text-xl">
            <h1 className="text-center text-slate-200 pt-3">LET'S CONNECT</h1>
            <form className="grid px-8 pr-10 gap-1 text-slate-200">
              <label form="fname" className="text-xl ">
                First Name
              </label>
              <input
                type=" text"
                name="name"
                placeholder="First Name "
                className="bg-primary-color border rounded-md px-2 mb-3 p-1 text-sm focus:outline-none"
              />

              <label form="lname" className="text-xl">
                Last Name
              </label>
              <input
                type="ttext"
                name="name"
                placeholder="Last Name"
                className="bg-primary-color    border rounded-md px-2 mb-3 p-1 text-sm focus:outline-none"
              />
              <label form="email" className="text-xl">
                Email Address
              </label>
              <input
                type=""
                name=""
                placeholder="Email Address"
                className="bg-primary-color   border rounded-md px-2 mb-3 p-1 text-sm focus:outline-none"
              />
              <label form="password" className="text-xl">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className=" bg-primary-color   border rounded-md px-2 mb-3 p-1 text-sm  focus:outline-none"
              />

              <label form="message" className="text-xl">
                Message
              </label>
              <textarea
                name="message"
                placeholder="message....."
                className=" bg-primary-color  border rounded-md px-2  mb-3 p-3 text-sm focus:outline-none"
              ></textarea>

              <a href="#" className="border w-24 p-1 rounded mt-5 mb-3   flex">
                Submit
                <i className="fa fa-angle-right pr-2  px-2  pt-1"></i>
              </a>
            </form>
          </div>

          <div className="">
            <img src={image23} alt="" className="w-[500px] h-[550px] " />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
