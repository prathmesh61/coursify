import blurBg from "@/images/blurImg.svg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="mt-40 lg:mt-40 relative  max-w-screen-2xl mx-auto">
      <header className="mx-auto px-14 lg:w-[70%]">
        <h2 className=" text-4xl font-bold text-center">
          Driving Innovation in Online Education for
          <span className="bg-gradient-to-b from-[#f14a9d] via-[#125bfa] to-[#7ab2f3] text-transparent bg-clip-text font-bold">
            {" "}
            - Brighter Future
          </span>
        </h2>
        <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
          Coursify is at the forefront of driving innovation in online
          education. We're passionate about creating a brighter future by
          offering cutting-edge courses, leveraging emerging technologies, and
          nurturing a vibrant learning community.
        </p>
      </header>
      <div className=" w-[100%] flex justify-evenly mt-20 gap-4 flex-wrap ">
        <img
          src="https://study-notion-ebjpn3pa9-thefarhanahmad.vercel.app/static/media/aboutus1.86606deea209badf5925.webp"
          alt="About1"
          className="object-contain w-[350px] rounded-lg"
        />
        <img
          src="https://study-notion-ebjpn3pa9-thefarhanahmad.vercel.app/static/media/aboutus3.f5cfba861877ea03735d.webp"
          alt="About2"
          className="object-contain w-[350px] rounded-lg"
        />
        <img
          src="https://study-notion-ebjpn3pa9-thefarhanahmad.vercel.app/static/media/aboutus2.0a1cd797ce3a69e81830.webp"
          alt="About3"
          className="object-contain w-[350px] rounded-lg"
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
      <div className="bg-white shadow-md mt-20">
        <div className="flex flex-col gap-10 justify-between w-11/12 max-w-maxContent text-black mx-auto ">
          <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-2">
            <div className="flex flex-col py-10">
              <h1 className="text-[30px] font-bold text-richblack-5 ">8K</h1>
              <h2 className="font-semibold text-[16px] bg-blue-400  text-white">
                Active Students
              </h2>
            </div>
            <div className="flex flex-col py-10">
              <h1 className="text-[30px] font-bold text-richblack-5">60+</h1>
              <h2 className="font-semibold text-[16px] bg-blue-400  text-white">
                Mentors
              </h2>
            </div>
            <div className="flex flex-col py-10">
              <h1 className="text-[30px] font-bold text-richblack-5">120+</h1>
              <h2 className="font-semibold text-[16px] bg-blue-400  text-white">
                Courses
              </h2>
            </div>
            <div className="flex flex-col  py-10">
              <h1 className="text-[30px] font-bold text-richblack-5">30+</h1>
              <h2 className="font-semibold text-[16px] bg-blue-400  text-white">
                Awards
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
