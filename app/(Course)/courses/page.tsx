"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Category_Type, Course_Type } from "@/utils/types";

const CoursesPage = () => {
  const [courses, setCourses] = useState<Course_Type | any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/course");
        const data = await res.data;
        setCourses(data);
      } catch (error) {
        alert("Error in fetching data");
      }
    };
    fetchData();
  }, []);

  // unique categories set
  const uniqueCategories = [
    ...new Set(courses?.map(({ category }: Category_Type) => category)),
  ];

  // random rating function
  const randomRating = Math.floor(Math.random() * (5 - 1 + 1) + 1);

  // search funcationality
  const [search, setSearch] = useState("");
  const [filteredCourses, setFilteredCourses] = useState([]);

  // filter data through search and no search then list all courses
  const filterData = courses?.filter((course: any) => {
    // if search is empty then list all courses

    if (search === "") {
      return courses;
    }
    return course.courseName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="relative max-w-screen-2xl mx-auto mt-20 px-14 gap-5 flex flex-col items-start">
      <div className="flex w-full">
        <input
          type="text"
          name="text"
          id="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search For anything..."
          className="shadow-md px-4 py-1 border-2 border-gray-200 rounded-md flex-grow"
        />
      </div>
      <div className="flex  justify-center items-center gap-4 flex-wrap">
        {courses &&
          uniqueCategories?.map((item: string | any, index: number) => (
            <div className="bg-blue-500 px-2 cursor-pointer" key={index}>
              <h2 className="text-sm text-white font-semibold font-mono">
                {item}
              </h2>
            </div>
          ))}
      </div>
      <div className="mt-20 flex justify-evenly items-center flex-wrap w-full">
        {courses &&
          filterData?.map((item: any, index: number) => (
            <Link
              href={`/course-detail/${item?._id}`}
              className="flex flex-col gap-1 w-[400px] h-[400px] item-start cursor-pointer  py-8 px-4"
              key={index}
            >
              <img
                src={item?.banner}
                alt={item?.courseName}
                className="w-[400px] h-[235px] object-contain"
              />
              <h3 className="font-bold text-xl text-black capitalize">
                {item?.courseName}
              </h3>
              <p className="font-normal text-sm text-gray-500 capitalize">
                instructor:- {item?.autherID?.username}
              </p>
              <h3 className="font-bold text-xl text-black capitalize">
                ₹{item?.price}
              </h3>
              <p className="font-normal text-sm text-gray-500 capitalize">
                Category:- {item?.category}
              </p>
              <p className="font-normal text-sm flex items-center gap-1 capitalize">
                <span className="text-yellow-500 text-md">{randomRating}</span>

                {[1, 2, 3, 4, 5].map((item: any, index: number) => (
                  <span key={index} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default CoursesPage;
