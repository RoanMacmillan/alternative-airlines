import React from "react";
import Logo from "../assets/images/logos/alternative-airlines.jpg";
import Hamburger from "../assets/icons/menu.svg";

const Header = () => {
  return (
    <>
      <header className="mx-auto flex max-w-[1214px] items-center justify-between bg-white p-8 md:px-[47px]">
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
