import Link from "next/link";
import Image from "next/image";
import portGif from "@/public/portGif.gif";
const LearnMore = () => {
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-40 lg:mt-80 px-14 gap-10 flex justify-center lg:justify-between items-center flex-wrap">
      <div className="left flex flex-col items-center justify-center lg:items-start gap-4 ">
        <h2 className="text-center lg:text-left font-extrabold text-3xl">
          Unlock your coding potential with our online courses.
        </h2>
        <p className="font-normal text-gray-500 text-md text-center lg:text-left">
          Our courses are designed and taught by industry experts who
          <br /> have years of experience in coding and are passionate, about
          sharing their knowledge with you.
        </p>
        <div className="flex justify-start items-center gap-2">
          <Link
            href="/courses"
            className="text-white bg-blue-500 px-5 py-2 inline-block cursor-pointer rounded-md text-sm lg:text-left text-center w-fit"
          >
            Try out Yourself
          </Link>
          <Link
            href="/courses"
            className="text-white bg-slate-900 px-5 py-2 inline-block cursor-pointer rounded-md text-sm lg:text-left text-center w-fit"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="right  relative">
        <Image
          src={portGif}
          alt="Portlogo"
          className="object-cover rounded-lg"
          width={400}
          height={800}
        />
        <div className="absolute learMoreGran -z-10 opacity-40 top-[-40px] right-0 blur-2xl rounded-full" />
      </div>
    </div>
  );
};

export default LearnMore;
