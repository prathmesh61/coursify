"use client";
import { Metadata } from "next";
import React, { FormEvent, useState } from "react";
export const metadata: Metadata = {
  title: "Create New Course",
  description: "Create new course and partner with us",
};
import { ClerkProvider, useUser, SignIn, SignedOut } from "@clerk/nextjs";
const NewCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const { isLoaded, isSignedIn, user } = useUser();
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center  px-14 py-4 max-w-screen-2xl mx-auto">
      <h1 className="font-mono text-2xl md:text-3xl text-center">
        Create New Course {user?.firstName}
      </h1>
      <form
        className="flex flex-col gap-4 w-[500px] mt-10"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="courseName" className="font-semibold text-md">
            Course Name:-
          </label>
          <input
            type="text"
            name="courseName"
            className="w-full outline-none border-2 border-gray-400 rounded-lg p-2"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="description" className="font-semibold text-md">
            Course Description:-
          </label>
          <textarea
            rows={5}
            cols={10}
            name="description"
            className="w-full outline-none border-2 border-gray-400 rounded-lg p-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <label htmlFor="banner" className="font-semibold text-md">
            Course Banner:-
          </label>
          <input
            type="file"
            name="banner"
            className="w-full outline-none border-2 border-gray-400 rounded-lg p-2"
            value={banner}
            onChange={(e) => setBanner(e.target.files![0])}
            required
          />
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="category" className="font-semibold text-md">
              Course Category:-
            </label>
            <input
              type="text"
              name="category"
              className="w-full outline-none border-2 border-gray-400 rounded-lg p-2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="price" className="font-semibold text-md">
              Course Price:-
            </label>
            <input
              type="number"
              name="price"
              className="w-full outline-none border-2 border-gray-400 rounded-lg p-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-1 px-4 text-center text-md font-semibold bg-blue-500 rounded-lg text-white"
        >
          Publish Course
        </button>
      </form>
    </div>
  );
};

export default NewCourse;
