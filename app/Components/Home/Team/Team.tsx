import React from "react";
import Image from "next/image";
import bimal_gurung from "@/public/images/bimal_gurung.png";
import bimaldai from "@/public/images/bimaldai.jpg"
import node from "@/public/images/node.png";
import mongodb from "@/public/images/mongodb.png";
import react from "@/public/images/react.png";
import next from "@/public/images/Next.png";
import html from "@/public/images/html.png";
import css from "@/public/images/css.png";
import javascript from "@/public/images/js.png";
import nuxt from "@/public/images/Nuxt.png";
import python from "@/public/images/python.png";
import laravel from "@/public/images/Laravel.png";
import flutter from "@/public/images/flutter.png";
import { MdOutlinePersonOutline } from "react-icons/md";

const teamMembers = [
  {
    name: "Bimal Gurung",
    role: "Founder & CEO",
    image: bimal_gurung,
    skills: [react, node, mongodb, next],
  },
  {
    name: "Ashim Gautam",
    role: "Co-Founder",
    image: bimaldai,
    skills: [python, node, mongodb, next],
  },
  {
    name: "Bimal Gurung",
    role: "Founder & CEO",
    image: bimal_gurung,
    skills: [css, html, javascript, nuxt],
  },
  {
    name: "Bimal Gurung",
    role: "Founder & CEO",
    image: bimal_gurung,
    skills: [laravel, flutter, mongodb, next],
  },
  {
    name: "Bimal Gurung",
    role: "Founder & CEO",
    image: bimal_gurung,
    skills: [react, node, mongodb, next],
  },
  {
    name: "Bimal Gurung",
    role: "Founder & CEO",
    image: bimal_gurung,
    skills: [react, node, mongodb, next],
  },
  {
    name: "Bimal Gurung",
    role: "Founder & CEO",
    image: bimal_gurung,
    skills: [react, node, mongodb, next],
  },
  {
    name: "Bimal Gurung",
    role: "Founder & CEO",
    image: bimal_gurung,
    skills: [react, node, mongodb, next],
  },
];

const Team = () => {
  return (
    <section className="bg-black py-2 text-white">
      <div className="text-center">
        <p className="text-[#3094CD] mt-[50px] mb-[20px] inline-flex items-center gap-2 text-center">
          <MdOutlinePersonOutline /> Meet our Expert Teams
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-6 bg-gradient-to-b from-[#FEFEFE] to-[#39B6FD] bg-clip-text text-transparent">
          The Mind Behind <br />
          YetiNepal's Success
        </h2>
        <p className="text-[#fefefe] px-8 sm:px-20 md:px-64 mb-10 text-base text-center">
          Guided by experienced tech leaders, we combine proven skills with fresh ideas to <br />
          create solutions that truly stand out.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto flex flex-wrap justify-start gap-x-6 gap-y-11">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-black rounded-2xl overflow-hidden text-center hover:scale-105 transition-transform shadow-lg shadow-[#39B6FD]/20 w-full sm:w-[250px]">
            <Image
              src={member.image}
              alt={member.name}
              className="w-full h-[250px] object-cover rounded-t-10xl"/>
            <div className="p-4">
              <h3 className="font-bold text-xl mt-4 text-white">{member.name}</h3>
              <p className="text-gray-400 text-sm mb-3">{member.role}</p>
              <div className="flex justify-center gap-4 mt-3">
                {member.skills.map((skill, idx) => (
                  <Image key={idx} src={skill} alt="Skill" 
                  className="w-7 h-7" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
