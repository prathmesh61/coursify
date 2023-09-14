"use client";
import CartCourse from "@/components/CartCourse";
import { CartType, Course_Type, Single_Course_Type } from "@/utils/types";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { emptyCart } from "@/app/redux/features/userSlice";
import Script from "next/script";
import { Payment } from "@/Model/Payment";

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

const CartPage = () => {
  const { cart, user } = useSelector((state: any) => state.user);
  const router = useRouter();
  const dispatch = useDispatch();

  console.log(cart);

  // cart ID array
  const courseIDs = cart.map((course: CartType) => course._id);

  // const buyCourse = async () => {
  //   try {
  //     const res = await axios.patch(`/api/course/purchase`, {
  //       userID: user._id,
  //       courseIDs: courseIDs,
  //     });
  //     await res.data;
  //     if (res.status === 200) {
  //       toast.success("Course purchased");
  //       dispatch(emptyCart());
  //       router.push("/success");
  //     }
  //   } catch (error) {
  //     toast.error("Something went wrong");
  //   }
  // };
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

  // razorpay payment method
  // const paymentFun = async () => {
  //   const res = await loadScript(
  //     "https://checkout.razorpay.com/v1/checkout.js"
  //   );

  //   if (!res) {
  //     alert("Razorpay SDK failed to load. Are you online?");
  //     return;
  //   }

  //   try {
  //     const data = await axios.post("/api/payment", { total });
  //     const paymentRes = await data.data;
  //     console.log(paymentRes);

  //     const options = {
  //       key: process.env.RAZORPAY_KEY,
  //       currency: paymentRes.currency,
  //       amount: paymentRes.amount.toString(),
  //       order_id: paymentRes.id,
  //       name: "This is you order amount",
  //       description:
  //         "Thank you for buying course this course complete you Goals",
  //       Image:
  //         "https://avatars.githubusercontent.com/u/104343605?s=400&u=cb0aae945da094c67c3b53667f029b3b6520e413&v=4",

  //       handler: function (response: any) {
  //         alert(response.razorpay_payment_id);
  //         alert(response.razorpay_order_id);
  //         alert(response.razorpay_signature);
  //       },
  //       prefill: {
  //         name: user?.username,
  //         email: user?.email,
  //         phone_number: "9899999999",
  //       },
  //     };
  //     const _window = window as any;

  //     const paymentObject = new _window.Razorpay(options);
  //     paymentObject.open();
  //   } catch (error: any) {
  //     console.log(error);
  //   }
  // };

  /// razorpay callback method
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
            onClick={checkoutHandler}
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
