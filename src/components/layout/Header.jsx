import React from "react";

import { Link, useLocation } from "react-router-dom";

import Logo from "/assets/images/logo.png";
import Button from "../Button";

function Header(props) {
  const children = props.children;
  const outerCircle = props.outerCircle;
  const { pathname } = useLocation(); // we use this to get the current pathname from the address bar or url. Note how it's been destructured. e.g /about
  const links = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "About",
      to: "/about",
    },
    {
      text: "Causes",
      to: "/causes",
    },
    {
      text: "Donate",
      to: "/donate",
    },
    {
      text: "Blog",
      to: "/blog",
    },
    {
      text: "Event",
      to: "/event",
    },
    {
      text: "Contact Us",
      to: "/contact",
    },
  ];
  return (
    <>
      <header className="relative mx-6 md:mx-32">
        {outerCircle}

        <nav className="flex justify-between items-center py-6">
          <img src={Logo} alt="logo" className="w-20 " />
          <div className="flex justify-evenly gap-4 text-xl text-gray-600">
            {links.map((link) => (
              <Link
                to={link.to}
                key={link.text}
                className={`${
                  pathname == link.to ? "text-primary-color font-bold" : ""
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
          <Button
             
              type="primary-link"
              text="Donate Now"
              icon={<i className="fa fa-angle-right"></i>}
              href={`/donate`}
            ></Button>
        </nav>
        {children}
      </header>
    </>
  );
}

export default Header;
