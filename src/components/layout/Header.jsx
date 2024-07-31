import React from "react";
import Logo from "../../assets/images/logo.png";
import Button from "../Button";
import { Outlet, Link } from "react-router-dom";

function Header(props) {
  const children = props.children;
  const outerCircle = props.outerCircle;
  return (
    <>
      <header className="relative mx-6 md:mx-32">
        {outerCircle}

        <nav className="flex justify-between items-center py-6">
          <img src={Logo} alt="logo" className="w-20 " />
          <ul className="flex gap-4 text-sm">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/causes">Causes</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
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
      <Outlet />
    </>
  );
}

export default Header;
