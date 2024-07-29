import React from "react";
import Logo from "../../assets/images/logo.png";
import Button from "../Button";

function Header(props) {
  const children = props.children;
  const outerCircle = props.outerCircle;
  return (
    <header className="relative mx-6 md:mx-32">
      {outerCircle}

      <nav className="flex justify-between items-center py-6">
        <img src={Logo} alt="logo" className="w-20 " />
        <div className="flex gap-4 text-sm">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Causes</a>
          <a href="#">Blog</a>
          <a href="#">Event</a>
          <a href="#">Contact Us</a>
        </div>
        <Button
          type="primary-button"
          text="Donate Now"
          icon={<i class="fa fa-angle-right"></i>}
        ></Button>
        {/* <button className="primary-butto">
        Donate Now
        <i class="fa fa-angle-right"></i>
      </button> */}
      </nav>
      {children}
    </header>
  );
}

export default Header;
