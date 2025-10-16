import React from "react";
import Image from "next/image";
import bimal_gurung from "@/public/images/bimal_gurung.png";
import bimaldai from "@/public/images/bimaldai.jpg";
import ashmimgautam from "@/public/images/ashimgautam.jpg"
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
    image: bimaldai,
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
    image: bimaldai,
    skills: [css, html, javascript, nuxt],
  },
  {
    name: "Saloni Pradhan",
    role: "Founder & CEO",
    image: bimaldai,
    skills: [laravel, flutter, mongodb, next],
  },
  {
    name: "Bimal Gurung",
    role: "Founder & CEO",
    image: bimaldai,
    skills: [react, node, mongodb, next],
  },
  {
    name: "Bimal Gurung",
    role: "Founder & CEO",
    image: bimaldai,
    skills: [react, node, mongodb, next],
  },
  {
    name: "Bimal Gurung",
    role: "Founder & CEO",
    image: bimaldai,
    skills: [react, node, mongodb, next],
  },
  {
    name: "Bimal Gurung",
    role: "Founder & CEO",
    image: bimaldai,
    skills: [react, node, mongodb, next],
  },
];

const Team = () => {
  return (
    <section className="bg-black py-2 text-white">
     <div className="flex flex-col items-center text-center mt-[50px]">
        <p className="text-[#3094CD] mb-[20px] inline-flex items-center gap-2">
          <MdOutlinePersonOutline /> Meet our Expert Teams
        </p>

        <h2 className="sm:text-5xl lg:text-5xl font-bold mb-6 bg-gradient-to-b from-[#FEFEFE] to-[#39B6FD] bg-clip-text text-transparent">
          The Mind Behind <br />
          YetiNepal's Success
        </h2>

        <p className="text-white mb-10 max-w-[900px] text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-0">
          Guided by experienced tech leaders, we combine proven skills with fresh ideas to <br />
          create solutions that truly stand out.
        </p>
      </div>

      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-black rounded-2xl overflow-hidden text-center hover:scale-105 transition-transform shadow-lg shadow-[#39B6FD]/20 p-5">
              <div className="flex justify-center items-center bg-black rounded-2xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="object-contain rounded-2xl"/>
              </div>
              <div className="pt-4">
                <h3 className="font-bold text-lg sm:text-xl text-white">{member.name}</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-3">{member.role}</p>

                <div className="flex justify-center gap-3 flex-wrap">
                  {member.skills.map((skill, idx) => (
                    <Image
                      key={idx}
                      src={skill}
                      alt="Skill"
                      className="w-6 h-6 sm:w-7 sm:h-7"
                    />
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
