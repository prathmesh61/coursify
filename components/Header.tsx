"use client";
import Link from "next/link";
import Image from "next/image";
import rightA from "@/public/right-arrow.svg";
import axios from "axios";
import { useGetLoginUser } from "@/hooks/useGetLoginUser";
import Logout from "./Logout";

const Header = () => {
  const { loginUser } = useGetLoginUser();

  return (
    <div className="flex justify-between items-center px-14 py-4 max-w-screen-2xl mx-auto ">
      <Link href="/">
        <h1 className="text-3xl font-extrabold ">
          <span className="text-blue-600">Cou</span>rsify
        </h1>
      </Link>
      <div className="flex items-center justify-center gap-8">
        <Link href="/new-course" className="font-semibold text-md">
          Create Course
        </Link>
        <Link
          href={`/profile/${loginUser?._id}`}
          className="font-semibold text-md"
        >
          Profile
        </Link>
        <Link
          href="/courses"
          className="font-semibold text-md flex items-center gap-2"
        >
          Courses
          <Image
            width={20}
            height={10}
            src={rightA}
            alt="rightArrow"
            className=" bg-black rounded-full"
          />
        </Link>
        {loginUser && <Logout />}
      </div>
    </div>
  );
};

export default Header;
