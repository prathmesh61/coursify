"use client";
import Link from "next/link";
import { useCourseForm } from "@/hooks/useCourseForm ";

const NewCourse = () => {
  const {
    banner,
    category,
    courseName,
    description,
    price,
    setBanner,
    setCategory,
    setCourseName,
    setDescription,
    setPrice,
    isCourseCreated,
    user,
    handleFormSubmit,
  } = useCourseForm();

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
        onSubmit={(e) => handleFormSubmit(e)}
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
            // @ts-ignore
            onChange={(e) => setBanner(e.target.files?.[0])}
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
          className="w-full py-1 px-4 text-center text-md font-semibold bg-blue-500 rounded-lg text-white cursor-pointer"
          disabled={isCourseCreated}
        >
          {isCourseCreated ? "Loading" : "Continue"}
        </button>
      </form>
    </div>
  );
};

export default NewCourse;
