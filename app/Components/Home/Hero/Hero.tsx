import React from "react";

const Hero = () => {
  return (
    <div >
      <div className=" h-screen flex  items-center mt-45 flex-col">
        <div className="relative flex flex-col items-center ">
          <h1 className="lg:text-7xl sm:text-5xl text-center font-bold bg-gradient-to-b from-[#FEFEFE] to-[#39B6FD] bg-clip-text text-transparent ">
            A Decade of Tech Expertise,
            <br />
            <span className="">Shared With You !</span>{" "}
          </h1>
          <p className="text-white mt-15 px-65 xl:text-xl md:text-lg sm:text-sm text-left ">
            Yetinepal is more than a training platform — we’re a tech partner.
            We help learners become creators while building digital solutions
            for businesses, from modern websites to mobile apps. Our mission is
            to grow future tech talent and deliver real-world innovation.
          </p>
          <div className=" flex-2 mt-20 space-x-10">
            <button className="bg-[#39B6FD] text-[#FEFEFE] p-4 rounded-lg">
              Start your Project
            </button>
            <button className="bg-transparent border-2 border-[#39B6FD] text-[#39B6FD] p-4 rounded-lg">
              Discover Our Work
            </button>
          </div>
          <h2 className=" text-[#EEC300] mt-[34px]  text-xl ">
            10 Years of Tech Experience — Serving Nepal & Beyond
          </h2>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-[50px] w-[50%] h-[40px] bg-[radial-gradient(ellipse_at_center,_rgba(57,182,253,1),_transparent_70%)] ">.</div>
        </div> 
      </div>      
    </div>
  );
};

export default Hero;
