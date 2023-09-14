"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setUser } from "@/app/redux/features/userSlice";
const RegitserPage = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post("/api/register", {
        username: username,
        email: email,
        password: password,
      });
      const data = res.data;
      dispatch(setUser(data));

      router.push("/");
      toast.success("Register Successfully", { position: "top-center" });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data);

  return (
    <div className="flex flex-col justify-center items-center  px-14 py-4 max-w-screen-2xl mx-auto h-screen">
      <h1 className="font-mono text-2xl md:text-3xl text-center">
        Register To Coursify
      </h1>
      <form
        className="flex flex-col gap-4 w-[500px] mt-10"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="username" className="font-semibold text-md">
            username:-
          </label>
          <input
            type="text"
            name="username"
            placeholder="Your username"
            className="w-full outline-none border-2 border-gray-400 rounded-lg p-2"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
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
          Register
        </button>
        <Link href="/login" className="text-gray-500 underline text-sm">
          if you have an account, click here to login
        </Link>
      </form>
    </div>
  );
};

export default RegitserPage;
