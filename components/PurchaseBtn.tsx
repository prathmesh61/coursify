"use client";
import { CartType, Course_Type } from "@/utils/types";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { emptyCart } from "@/app/redux/features/userSlice";

function loadScript(src: string) {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const PurchaseBtn = () => {
  const { cart, user } = useSelector((state: any) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  // cart ID array
  const courseIDs = cart.map((course: CartType) => course._id);

  const buyCourse = async () => {
    try {
      const res = await axios.patch(`/api/course/purchase`, {
        userID: user._id,
        courseIDs: courseIDs,
      });
      if (res.status === 200) {
        dispatch(emptyCart());
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  // cart total reduce method
  const total = cart.reduce(
    (acc: number, curr: Course_Type) => acc + curr.price,
    0
  );

  const checkoutHandler = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const data = await axios.post("/api/payment", { total });
    const paymentRes = await data.data;
    const options = {
      key: process.env.RAZORPAY_KEY,
      amount: paymentRes.amount.toString(),
      currency: paymentRes.currency,
      name: "Coursify",
      description: "Career changing courses",
      Image:
        "https://avatars.githubusercontent.com/u/104343605?s=400&u=cb0aae945da094c67c3b53667f029b3b6520e413&v=4",
      order_id: paymentRes.id,
      handler: function (response: any) {
        buyCourse();
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const _window = window as any;

    const razor = new _window.Razorpay(options);
    razor.open();
  };
  return (
    <button
      className="bg-blue-500 h-[50px] w-[50%]  text-white mt-4"
      onClick={checkoutHandler}
    >
      Checkout
    </button>
  );
};

export default PurchaseBtn;
