"use client";
import axios from "axios";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/redux/features/userSlice";
import { toast } from "react-toastify";

const LoginPage = () => {
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
      toast.success("Login Successfully", { position: "top-center" });

      router.push("/");
    } catch (error) {
      toast.error("Somthing Wrong..", { position: "top-center" });

      console.log(error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center  px-14 py-4 max-w-screen-2xl mx-auto h-screen">
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
            placeholder="Password"
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
        <Link href="/register" className="text-gray-500 underline text-sm my-2">
          if you don't have an account yet, click here to register
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
