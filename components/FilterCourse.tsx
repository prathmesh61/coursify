"use client";
import React, { useState } from "react";
import Search from "./Search";
import CourseCard from "./CourseCard";
import { Course_Type } from "@/utils/types";
import { useDebounce } from "@/hooks/useDebounce";
import CourseCategory from "./CourseCategory";

const FilterCourse = ({
  searchParams,
  data,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
  data: Course_Type[];
}) => {
  const [search, setSearch] = useState<string | any>();

  // custom hook useDebounce Fetch All Courses
  const { dbounceValue } = useDebounce(search);
  const searchParamCategory = searchParams["category"];

  const filterCourses = data?.filter((course: Course_Type) => {
    if (dbounceValue) {
      // filter by search
      return course.courseName
        .toLowerCase()
        .includes(dbounceValue.toLowerCase());
    } else if (searchParamCategory) {
      // if URL has category Query then fetch byCategory
      return course.category === searchParamCategory;
    }
    // if search is empty then list all courses
    return data;
  });

  return (
    <>
      <div className="flex w-full">
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className="flex w-full">
        <CourseCategory data={data} />
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
