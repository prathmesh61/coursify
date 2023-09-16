"use client";
import React from "react";
import { useSelector } from "react-redux";
import CartCourse from "./CartCourse";
import {
  Course_Type,
  Single_Course_Type,
  StoreState_Type,
} from "@/utils/types";
import PurchaseBtn from "./PurchaseBtn";

const CartCoursesWrapper = () => {
  const { cart, user } = useSelector((state: any) => state.user);
  // cart total reduce method
  const total = cart.reduce(
    (acc: number, curr: Course_Type) => acc + curr.price,
    0
  );
  return (
    <>
      <div className="flex flex-col items-start justify-between w-full gap-4">
        {cart?.map((course: Single_Course_Type, index: number) => (
          <CartCourse course={course} key={index} />
        ))}
      </div>
      <div className="lg:col-span-3 grid-cols-1">
        <span className="font-bold text-xl">Total:</span>
        <h3 className="font-extrabold text-4xl text-black mt-2">
          ₹{total}
          <span className="font-bold text-sm">.00</span>
        </h3>

        <PurchaseBtn />
      </div>
    </>
  );
};

export default CartCoursesWrapper;
