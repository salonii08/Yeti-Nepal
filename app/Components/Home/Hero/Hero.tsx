import React from "react";

const Hero = () => {
  return (
      <div className=" min-h-[80vh] flex  items-center mt-[70px] flex-col px-4 sm:px-8 lg:px-16 ">
        <div className="relative flex flex-col items-center ">
          <h1 className="lg:text-5xl sm:text-5xl text-center font-bold bg-gradient-to-b from-[#FEFEFE] to-[#39B6FD] bg-clip-text text-transparent ">
            A Decade of Tech Expertise,
            <br />
            <span className="">Shared With You !</span>
          </h1>
          <p className="text-white mt-8 sm:mt-10 lg:mt-12 max-w-[900px]  text-sm sm:text-base md:text-lg text-center sm:text-left px-10">
            Yetinepal is more than a training platform — we’re a tech partner.
            We help learners become creators while building digital solutions
            for businesses, from modern websites to mobile apps. Our mission is
            to grow future tech talent and deliver real-world innovation.
          </p>
          <div className=" flex flex-wrap justify-center gap-6 mt-10 sm:mt-12">
            <button className="bg-[#39B6FD] text-[#FEFEFE] py-3 px-6 rounded-lg ">
              Start your Project
            </button>
            <button className="bg-transparent border-2 border-[#39B6FD] text-[#39B6FD] p-4 rounded-lg text-sm sm:text-base">
              Discover Our Work
            </button>
          </div>
          <h2 className=" text-[#EEC300] mt-10  text-base sm:text-lg md:text-xl ">
            10 Years of Tech Experience — Serving Nepal & Beyond
          </h2>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-[48px] w-[50%] h-[40px] bg-[radial-gradient(ellipse_at_center,_rgba(57,182,253,1),_transparent_70%)]  ">.</div>
        </div> 
      </div>      
    
  );
};

export default Hero;
