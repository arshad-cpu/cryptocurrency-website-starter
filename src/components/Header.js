import React from "react";

import Logo from "../assets/img/logo.svg";

import Nav from "./Nav";
import AccountBtns from "./AccountBtns";
import { CgMenuRight } from "react-icons/cg";

const Header = () => {
  return (
    <header
      className="py-[30] lg:pt-[60]"
      data-aos="fade-down"
      data-aos-delay="900"
      data-aos-duration='2000'
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#">
          <img src={Logo} alt="" />
        </a>
        <div className="hidden lg:flex gap-x-[55px]">
          <Nav />
          <AccountBtns />
        </div>
        <div className="lg:hidden cursor-pointer">
          <CgMenuRight className="text-2xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
