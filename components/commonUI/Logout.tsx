"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "@/app/redux/features/userSlice";

const Logout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { user } = useSelector((state: any) => state.user);

  const handleClick = () => {
    if (user) {
      dispatch(logOut());
      router.push("/login");
    }
  };
  return (
    <div
      onClick={handleClick}
      className="underline bg-slate-700 text-white px-4 py-1 text-sm rounded-md cursor-pointer hidden md:flex"
    >
      Logout
    </div>
  );
};
export default Logout;
