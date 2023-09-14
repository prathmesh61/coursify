"use client";
import { Course_Type, Single_Course_Type } from "@/utils/types";
import Image from "next/image";
import React from "react";
import Spinner from "./Spinner";
import { useDispatch } from "react-redux";
import { removerFromCart } from "@/app/redux/features/userSlice";
import { toast } from "react-toastify";
const CartCourse = ({ course }) => {
  // removeFromCart
  const dispatch = useDispatch();
  const removeToCart = async (course: Course_Type) => {
    try {
      dispatch(removerFromCart(course));
      toast.success("Course added to cart");
    } catch (error: any) {
      throw new Error(error);
    }
  };
  return (
    <div className="relative flex gap-4 justify-start items-start  w-full">
      {course?.banner ? (
        <Image
          src={course?.banner}
          alt={course?.courseName}
          width={200}
          height={180}
          className="object-contain "
        />
      ) : (
        <Spinner />
      )}
      <div className="flex flex-col items-start justify-start  ">
        <h3 className="text-sm md:text-lg font-extrabold">
          {course?.courseName}
        </h3>
        <p className="text-xs font-medium font-mono">
          By {course?.autherID?.username}
        </p>
        <p className="flex">
          {[1, 2, 3, 4, 5].map((item: any, index: number) => (
            <span key={index} className="text-yellow-500">
              ★
            </span>
          ))}
        </p>
        <p className="text-xl font-extrabold font-mono">₹{course?.price}</p>
        <div className="hidden sm:flex items-center gap-1">
          <span className="text-xs font-bold ">
            Category {course?.category}
          </span>
          --
          <span className="text-xs ">All levels</span>
        </div>
        <button
          className="underline text-sm font-bold"
          onClick={() => removeToCart(course)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCourse;
