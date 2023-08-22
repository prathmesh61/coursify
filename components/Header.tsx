"use client";
import Link from "next/link";
import Image from "next/image";
import rightA from "@/public/right-arrow.svg";
import Logout from "./Logout";
import arrowDown from "@/public/arrow-down.svg";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { useSelector } from "react-redux";
const Header = () => {
  const { user, cart } = useSelector((state: any) => state.user);

  const [open, seOpen] = useState(false);
  return (
    <div className="fixed top-0 w-full z-10 bg-white opacity-90 ">
      <div className="flex relative justify-between items-center px-14  py-4 max-w-screen-2xl mx-auto  ">
        <Link href="/">
          <h1 className="text-3xl font-extrabold ">
            <span className="text-blue-600">Cou</span>rsify
          </h1>
        </Link>
        <div className="hidden md:flex items-center justify-center gap-8">
          {user?.isSeller && (
            <Link href="/new-course" className="font-semibold text-sm">
              Create Course
            </Link>
          )}
          <Link
            href={`/profile/${user?._id}`}
            className="font-semibold text-sm"
          >
            Profile{cart.length}
          </Link>
          <Link
            href="/courses"
            className="font-semibold text-sm flex items-center gap-2"
          >
            Courses
            <Image
              width={20}
              height={10}
              src={rightA}
              alt="rightArrow"
              className=" bg-blue-500 rounded-full"
            />
          </Link>
        </div>
        {user?._id ? <Logout /> : <Link href={"/register"}>Register</Link>}
        {user?._id && (
          <div
            className="md:hidden cursor-pointer flex gap-1 items-center"
            onClick={() => seOpen(!open)}
          >
            More
            <Image
              width={10}
              height={10}
              src={arrowDown}
              alt="ar"
              className=" text-black"
            />
          </div>
        )}
        {open && <MobileNav />}
      </div>
    </div>
  );
};

export default Header;
