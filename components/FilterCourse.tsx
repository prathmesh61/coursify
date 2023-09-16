"use client";
import React, { useState } from "react";
import Search from "./Search";
import CourseCard from "./CourseCard";
import { Course_Type, FilterCourseType } from "@/utils/types";

const FilterCourse = ({ data }: FilterCourseType) => {
  const [search, setSearch] = useState("");
  const filterCourses = data?.filter((course: Course_Type) => {
    // if search is empty then list all courses
    if (search === "") {
      return data;
    }
    return course.courseName.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="flex w-full">
        <Search search={search} setSearch={setSearch} />
      </div>

      <div className="mt-20 flex justify-evenly items-center flex-wrap w-full ">
        {filterCourses?.map((item: Course_Type) => (
          <CourseCard key={item?._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default FilterCourse;
