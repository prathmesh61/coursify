import Image from "next/image";
import Link from "next/link";
import React from "react";
import heroCoursify from "@/public/heroCoursify.jpg";
import heroBg from "@/public/hero-bg.png";
const Hero = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-14 flex justify-between items-center flex-wrap h-screen relative">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-extrabold">
          Launch a new career in as
          <br /> little as 6 months
        </h1>
        <p className="text-md md:text-lg font-normal text-gray-500">
          Sale ends today. Attain a world of knowledge — at
          <br /> home or on the go. Courses as low as ₹449.
        </p>
        <Link
          href="/courses"
          className="text-white bg-blue-500 px-5 py-1 cursor-pointer rounded-md text-lg text-center w-fit"
        >
          Browes our courses
        </Link>
      </div>
      <div className="flex ">
        <Image
          src={heroCoursify}
          alt="logo"
          width={400}
          height={500}
          objectFit="cover"
          className="rounded-lg shadow-md"
        />
      </div>
      <div className=" w-full">
        <Image
          src={heroBg}
          className=" w-[500px] h-[600px] absolute top-40 z-[-1] right-10 rotate-180 "
          alt="HeroBg"
        />
      </div>
    </div>
  );
};

export default Hero;
