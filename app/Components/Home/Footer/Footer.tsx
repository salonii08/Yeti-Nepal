"use client";
import React from "react";
import { FaFacebook, FaFacebookSquare, FaInstagram, FaInstagramSquare, FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { MdCopyright, MdLocationOn, MdOutlinePhone } from "react-icons/md";

const Footer = () => {
  return (
    
    <div className="bg-[#2878A5] w-full py-10 px-6 md:px-12 lg:px-[58px] mt-[38px] text-white ">

      <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-6">
        <div className=" flex flex-col md:w-[380px] ">
        <h1 className="text-2xl font-stretch-75%">Yeti Nepal</h1>
        <p className="text-base py-4 ">
          Bridging the gap between learning and building. Teaching programming
          and creating tech solutions.
        </p>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">Services</h1>
        <div className="text-base py-4 space-y-1">
          <p>Web Development</p>
          <p>Mobile App Development</p>
          <p>Backend & Api Development</p>
          <p>UIUX design</p>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-semibold">Company</h1>
        <div className="text-base py-4 space-y-1">
          <p>About us</p>
          <p>Project</p>
          <p>Career</p>
          <p>Contact Us</p>
        </div>
      </div>

      <div className=" flex flex-col">
        <h1 className="text-2xl font-semibold">Company</h1>
        <div className="text-18px py-[22px]">
          <p className="flex items-center gap-2">
            <IoMailOutline />
            hello@yetinepal.com
          </p>
          <p className="flex items-center gap-2">
            <MdOutlinePhone />
            977-9700886505
          </p>
          <p className="flex items-center gap-2">
            <MdLocationOn />
            Lamachour-19, Pokhara
          </p>
        </div>
      </div>
      </div>
      
      <div className="flex justify-center md:justify-end gap-4 mt-8 ">
        <FaFacebookSquare className=" w-8 h-8 rounded-xl"/>
        <FaInstagramSquare className=" w-8 h-8 rounded-xl"/>
        <FaLinkedin className=" w-8 h-8 rounded-xl"/>
        <FaYoutube className=" w-8 h-8"/>
      </div>
      <div className=" flex items-center  px-[40px] justify-center gap-4 mt-8">
        <MdCopyright/>YetiNepal 2025 - All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
