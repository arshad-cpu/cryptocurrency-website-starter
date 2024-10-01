import React from "react";

import Logo from "../assets/img/logo.svg";
import VisaImg from "../assets/img/visa.png";
import MasterCardImg from "../assets/img/mastercard.png";
import BitcoinImg from "../assets/img/bitcoin.png";

import {
  IoLogoYoutube,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin,
} from "react-icons/io";

const Footer = () => {
  return (
    <footer className='lg:pt-24 pt-0'>
      <div className="container mx-auto lg:mb-24">
        <div className="flex flex-col gap-12 lg:flex-row">
          <div className="flex-1 mx-auto lg:mx-0 
          mb-6 max-h-[285px]">
            <img src={Logo}/>
          </div>
          <div>
            <div>link group 1</div>
            <div>link group 2</div>
          </div>
          <div>payment</div>
        </div>
      </div>
      <div>copyright & social </div>
    </footer>
  );
};

export default Footer;
