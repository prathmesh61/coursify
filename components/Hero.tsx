import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroCoursify from "@/public/HeroBgCoursify.gif";
import heroBg from "@/public/hero-bg.png";
import blurBg from "@/images/blurImg.svg";
const Hero = () => {
  return (
    <div className=" relative max-w-screen-2xl mx-auto mt-28 lg:mt-40 px-14 flex justify-center lg:justify-between items-center flex-wrap  ">
      <div className="flex flex-col justify-center mb-10 items-center lg:items-start  gap-7 text-center lg:text-left">
        <h1 className="sm:text-6xl text-5xl font-extrabold text-center lg:text-left">
          Launch a new career in as
          <br /> little as 6 months
        </h1>
        <p className="text-md md:text-lg font-normal text-gray-500 text-center lg:text-left">
          Sale ends today. Attain a world of knowledge — at
          <br /> home or on the go. Courses as low as ₹449.
        </p>
        <Link
          href="/courses"
          className="text-white bg-blue-500 px-5 py-1 inline-block cursor-pointer rounded-md text-lg lg:text-left text-center w-fit"
        >
          Browes our courses
        </Link>
      </div>
      <div className="flex ">
        <Image
          src={heroCoursify}
          alt="Hero banner"
          width={500}
          height={500}
          objectFit="cover"
          className="rounded-lg shadow-xl"
        />
      </div>

      <div className="w-full ">
        <Image
          src={blurBg}
          alt="blurImg"
          objectFit="cover"
          className="absolute top-[-100px] left-0 blur-2xl -z-10  opacity-30 rounded-full w-[450px] h-[450px]"
        />
      </div>
    </div>
  );
};

export default Hero;
