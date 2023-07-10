import React from "react";
import Logo from "../assets/images/logos/alternative-airlines.jpg";
import Hamburger from "../assets/icons/menu.svg";

const Header = () => {
  return (
    <>
      <header className="flex justify-between items-center p-8 bg-white">
        <img
          className="w-[106px]"
          src={Logo}
          alt="Alternative Airlines company logo"
        />
        <img src={Hamburger} alt="Hamburger Button" />
      </header>

    </>
  );
};

export default Header;
