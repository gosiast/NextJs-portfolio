import React from "react";
import Image from "next/image";

const HeroSection = () => {
    return (<section>
        <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="col-span-7 place-self-center"> 
        <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Hello, I'm Gosia</h1>
   <p className="text-[#ADB7BE] text-lg lg:text-xl">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
   </p>
   </div>
   </div>
   <div className="rounded-full bd-[#181818] w-500 h-400 relative">
    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero_photo.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
   </div>
   
    </section>
)};

export default HeroSection;