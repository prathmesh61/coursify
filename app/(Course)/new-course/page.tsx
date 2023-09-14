"use client";
import { useRouter } from "next/navigation";
import axios from "axios";
import React, { FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Link from "next/link";
const NewCourse = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const { user } = useSelector((state: any) => state.user);

  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/dpvjdarqx/image/upload";
  const CLOUDINARY_UPLOAD_PRESET = "coursify";
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // check if all fields are filled
    if (!courseName || !description || !banner || !category || !price) {
      toast.error("Please fill all the fields", {
        position: "bottom-right",
      });
      return;
    }

    const file = banner;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const { data } = await axios.post(CLOUDINARY_URL, formData);

    try {
      const course = await axios.post("/api/course", {
        courseName,
        description,
        banner: data?.url || "",
        category,
        price,
        id: user?._id,
      });
      if (course.status === 200) {
        toast.success("Course Created Successfully", {
          position: "bottom-right",
        });

        setCourseName("");
        setDescription("");
        setBanner("");
        setCategory("");
        setPrice("");
        router.push("/courses");
      }
    } catch (error: any) {
      console.log(error);
    }
  };
  if (!user._id) {
    return (
      <div className="flex flex-col justify-center items-center  px-14 py-4 max-w-screen-2xl h-screen mx-auto">
        <Link href={"/login"} className="text-2xl hover:underline font-mono">
          You need to login to create a course
        </Link>
      </div>
    );
  }
  if (user?.isSeller === false) {
    return (
      <div className="flex flex-col justify-center items-center h-screen px-14 py-4 max-w-screen-2xl mx-auto ">
        <Link href={"/contact"} className="text-2xl hover:underline font-mono">
          Want to become a seller? CONTACT US
        </Link>
      </div>
    );
  }
  return (
    <div className="flex flex-col justify-center items-center mt-32 lg:mt-40 px-14 py-4 max-w-screen-2xl mx-auto">
      <h1 className="font-mono text-2xl md:text-3xl text-center">
        Create New Course
      </h1>
      <form
        className="flex flex-col gap-4 md:w-[400px] w-[300px] mt-10"
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
            accept="image/*"
            className="w-full outline-none border-2 border-gray-400 rounded-lg p-2"
            onChange={(e) => setBanner(e.target.files[0])}
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
