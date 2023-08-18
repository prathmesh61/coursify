import React from "react";
import Link from "next/link";
import Image from "next/image";
import FeaturesImg1 from "@/public/coursifyHTML.png";
import FeaturesImg2 from "@/public/CoursifyCompare.svg";
import FeaturesImg3 from "@/public/CoursifyPlan.svg";
const Features = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-40 lg:mt-80 px-14 gap-5 flex flex-col justify-center items-center">
      <div className="flex  lg:justify-between flex-col lg:flex-row gap-4 justify-center items-start ">
        <h2 className="text-center lg:text-left font-extrabold text-3xl ">
          Get the skills you need for a job that is in demand.
        </h2>
        <div className="flex flex-col items-center justify-center lg:items-start gap-2">
          <p className="font-normal text-gray-500 text-md text-center lg:text-left">
            The modern StudyNotion is the dictates its own terms. Today, to be a
            competitive specialist requires more than professional skills.
          </p>
          <Link
            href="/courses"
            className="text-white bg-blue-500 px-5 py-2 inline-block cursor-pointer rounded-md text-sm lg:text-left text-center w-fit"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="relative flex justify-center items-center flex-wrap">
        <Image
          src={FeaturesImg1}
          alt="Featureslogo"
          className="object-cover rounded-md"
          width={400}
          height={400}
        />
        <Image
          src={FeaturesImg2}
          alt="Featureslogo2"
          className="object-cover rounded-md"
          width={400}
          height={400}
        />
        <Image
          src={FeaturesImg3}
          alt="Featureslogo3"
          className="object-cover rounded-md"
          width={400}
          height={400}
        />
      </div>
    </div>
  );
};

export default Features;
