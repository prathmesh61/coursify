"use client";
import React from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/app/redux/features/userSlice";
import { toast } from "react-toastify";
import { Course_Type, User_Type } from "@/utils/types";
const AddToCartBtn = ({ course }: { course: Course_Type }) => {
  const { user }: User_Type = useSelector((state: any) => state.user);

  const dispatch = useDispatch();
  const addCourseToCart = async (course: Course_Type) => {
    try {
      dispatch(addToCart(course));
      toast.success("Course added to cart");
    } catch (error: any) {
      throw new Error(error);
    }
  };

  return (
    <>
      {user._id ? (
        <button
          className="bg-[#5624D0] text-white py-2 px-6 rounded-sm hover:bg-[#5524d0e6]"
          onClick={() => addCourseToCart(course)}
        >
          Buy this course
        </button>
      ) : (
        <Link href={"/login"} className="text-md hover:underline font-mono">
          You need to login first to buy this course
        </Link>
      )}
    </>
  );
};

export default AddToCartBtn;
