"use client";
import axios from "axios";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/redux/features/userSlice";
import { toast } from "react-toastify";
const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post("/api/login", {
        email: email,
        password: password,
      });
      const data = res.data;
      dispatch(setUser(data));
      toast.success("Register Successfully", { position: "top-center" });

      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="fixed inset-0 bg-zinc-900/20 z-10">
      <div className="container flex items-center h-full max-w-lg mx-auto">
        <div className="relative bg-white w-full h-fit py-20 px-2 rounded-lg">
          <div className="absolute top-4 right-4 cursor-pointer">
            <span onClick={() => router.back()}>X</span>
          </div>
          <h1 className="font-mono text-2xl md:text-3xl text-center">
            Login To Coursify
          </h1>
          <form
            className="flex flex-col gap-4 w-[500px] mt-10"
            onSubmit={handleFormSubmit}
          >
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="email" className="font-semibold text-md">
                Email:-
              </label>
              <input
                type="text"
                name="email"
                placeholder="Your email"
                className="w-full outline-none border-2 border-gray-400 rounded-lg p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="password" className="font-semibold text-md">
                password:-
              </label>
              <input
                type="password"
                name="courseName"
                placeholder="********"
                className="w-full outline-none border-2 border-gray-400 rounded-lg p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-1 px-4 text-center text-md font-semibold bg-blue-500 rounded-lg text-white"
            >
              Login
            </button>
            <Link
              href="/register"
              className="text-gray-500 underline text-sm my-2"
            >
              if you don't have an account yet, click here to register
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
