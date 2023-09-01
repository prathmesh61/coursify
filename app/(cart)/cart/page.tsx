"use client";
import CartCourse from "@/components/CartCourse";
import { Single_Course_Type } from "@/utils/types";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { emptyCart } from "@/app/redux/features/userSlice";
import Script from "next/script";

const CartPage = () => {
  const { cart, user } = useSelector((state: any) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  // razorpay init function

  // cart ID array
  const courseIDs = cart.map((course: Single_Course_Type) => course._id);

  // purchase course function
  const buyCourse = async () => {
    try {
      const res = await axios.patch(`/api/course/purchase`, {
        userID: user._id,
        courseIDs: courseIDs,
      });
      await res.data;
      if (res.status === 200) {
        toast.success("Course purchased");
        dispatch(emptyCart());
        router.push("/success");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  // cart total reduce method
  const total = cart.reduce(
    (acc: number, curr: Single_Course_Type) => acc + curr.price,
    0
  );

  // razorpay payment method

  if (cart === null) {
    return <div>Cart is empty</div>;
  }
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-28 px-14 gap-5 flex flex-col justify-center ">
      <h1 className="font-extrabold text-xl md:text-3xl text-black font-mono">
        Shopping Cart
      </h1>
      <span className="font-bold text-sm mt-4">
        {cart.length} Courses in Cart
      </span>
      <div className="grid lg:grid-cols-12 grid-cols-1 grid-flow-dense  mt-6">
        <div className="lg:col-span-9 grid-cols-1  w-full ">
          <div className="flex flex-col items-start justify-between w-full gap-4">
            {cart?.map((course: Single_Course_Type, index: number) => (
              <CartCourse course={course} key={index} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-3 grid-cols-1">
          <span className="font-bold text-xl">Total:</span>
          <h3 className="font-extrabold text-4xl text-black mt-2">
            ₹{total}
            <span className="font-bold text-sm">.00</span>
          </h3>
          <button
            className="bg-blue-500 h-[50px] w-full text-white mt-4"
            onClick={buyCourse}
          >
            Checkout
          </button>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="font-bold text-xl font-mono">You might also like</h2>
      </div>
    </div>
  );
};

export default CartPage;
