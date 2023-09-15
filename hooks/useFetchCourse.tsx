"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Category_Type, Course_Type } from "@/utils/types";

export const useFetchCourse = () => {
  const [allCourses, setAllCourses] = useState<Course_Type | any>();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/course");
        const data = await res.data;
        setAllCourses(data);
        setLoading(false);
      } catch (error) {
        alert("Error in fetching data");
      }
    };
    fetchData();
  }, []);

  // search funcationality

  // filter data through search and no search then list all courses
  const filterData = allCourses?.filter((course: any) => {
    // if search is empty then list all courses
    if (search === "") {
      return allCourses;
    }
    return course.courseName.toLowerCase().includes(search.toLowerCase());
  });

  // unique categories set
  const uniqueCategories = [
    ...new Set(allCourses?.map(({ category }: Category_Type) => category)),
  ];
  return {
    allCourses,
    loading,
    filterData,
    search,
    setSearch,
    uniqueCategories,
  };
};
