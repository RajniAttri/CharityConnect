import React from 'react'
import { Outlet, Link } from "react-router-dom";

function GeneralHero(props) {
    const {image,title}=props;
    const backgroundImageStyle = {
      backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.6), rgba(15, 23, 43, 0.6)), url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      height: "40vh",
      width:"100%"
    };
    
  return (
    <div>
      <div
        style={backgroundImageStyle}
        className=" text-white flex items-center justify-center "
      >
        <div className=" flex flex-col items-center text-center  justify-center ">
          <h1 className="  text-3xl md:text-5xl   ">{title}</h1>

          <div className="flex flex-row items-center gap-4 text-slate-200 text-2xl">
            <p>
              <Link to="/" className="">
                Home
              </Link>
            </p>
            <i className="fa fa-angle-right pr-2"></i>
            <p>{title}</p>
          </div>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default GeneralHero