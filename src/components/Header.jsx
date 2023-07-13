import React from "react";
import Logo from "../assets/images/logos/alternative-airlines.jpg";
import Hamburger from "../assets/icons/menu.svg";
import arrow from "../assets/icons/arrow-down.png";

const Header = () => {
  return (
    <>
      <header className="mx-auto flex max-w-[1214px] items-center justify-between bg-white p-8 md:px-[47px]">
        <img
          className="w-[106px]"
          src={Logo}
          alt="Alternative Airlines company logo"
        />

        <nav className="ml-10 mr-auto hidden w-full gap-10 text-sm leading-[22px] text-customGray lg:flex">
          <div className="group relative flex cursor-pointer">
            <a>Book flights</a>
            <img src={arrow} alt={arrow} />
            <div className="absolute top-8 h-[2px] w-full rounded-[1px] bg-customBlue opacity-0 group-hover:opacity-100"></div>
          </div>
          <div className="group relative flex cursor-pointer">
            <a>Information</a>
            <img src={arrow} alt={arrow} />
            <div className="absolute top-8 h-[2px] w-full rounded-[1px] bg-customBlue opacity-0 group-hover:opacity-100"></div>
          </div>
          <div className="group relative flex cursor-pointer">
            <a>Help</a>
            <img src={arrow} alt={arrow} />
            <div className="absolute top-8 h-[2px] w-full rounded-[1px] bg-customBlue opacity-0 group-hover:opacity-100"></div>
          </div>
          <div className="group relative flex cursor-pointer">
            <a>Travel Agents</a>
            <div className="absolute top-8 h-[2px] w-full rounded-[1px] bg-customBlue opacity-0 group-hover:opacity-100"></div>
          </div>

          <a className="ml-auto">Manage booking</a>
        </nav>

        <img className="lg:hidden" src={Hamburger} alt="Hamburger Button" />
      </header>
    </>
  );
};

export default Header;
