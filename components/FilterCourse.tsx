"use client";
import React from "react";
import Search from "./Search";
import CourseCard from "./CourseCard";
import { Course_Type } from "@/utils/types";
import { useDebounce } from "@/hooks/useDebounce";
import CourseCategory from "./CourseCategory";
import { useFetch } from "@/hooks/useFetch";
import Spinner from "./commonUI/Spinner";

const FilterCourse = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  // custom hook usefetch Fetch All Courses
  const { dataArray, loading, search, setSearch, uniqueCategories } =
    useFetch("/api/course");

  // custom hook useDebounce For api delay
  const { dbounceValue } = useDebounce(search);
  const searchParamCategory = searchParams["category"];

  const filterCourses = dataArray?.filter((course: Course_Type) => {
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
    return dataArray;
  });

  return (
    <>
      <div className="flex w-full">
        <Search search={search} setSearch={setSearch} />
      </div>
      <div className="flex w-full">
        <CourseCategory uniqueCategories={uniqueCategories} />
      </div>

      <div className="mt-20 flex justify-evenly items-center flex-wrap w-full ">
        {loading ? (
          <>
            <Spinner />
          </>
        ) : (
          <>
            {filterCourses?.map((item: Course_Type) => (
              <CourseCard key={item?._id} item={item} />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default FilterCourse;
