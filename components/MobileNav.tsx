"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import rightA from "@/public/right-arrow.svg";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/app/redux/features/userSlice";
const MobileNav = () => {
  const { user } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const handleClick = () => {
    if (user) {
      dispatch(logOut());
      router.push("/login");
    }
  };
  return (
    <div className="flex md:hidden absolute top-[60px] right-[40px] flex-col gap-4 p-5  bg-white rounded-md min-w-[100px] ">
      <Link href="/new-course" className="font-semibold text-sm">
        Create Course
      </Link>
      <Link href={`/profile/${user?._id}`} className="font-semibold text-sm">
        Profile
      </Link>
      <Link href={`/cart`} className="font-semibold text-sm">
        Cart
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
      {user._id ? (
        <div
          onClick={handleClick}
          className="underline bg-slate-700 text-white px-4 py-1 text-sm rounded-md cursor-pointer "
        >
          Logout
        </div>
      ) : (
        <Link
          href="/register"
          className="bg-blue-500 text-white px-4 py-1 text-sm rounded-md cursor-pointer hidden md-flex"
        >
          Register
        </Link>
      )}
    </div>
  );
};

export default MobileNav;
