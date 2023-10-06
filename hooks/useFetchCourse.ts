"use client";
import { useEffect, useState } from "react";
import { Category_Type, Course_Type } from "@/utils/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useFetchCourse = () => {
  const [allCourses, setAllCourses] = useState<Course_Type | any>();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/course");
        const data = await res.json();
        setAllCourses(data);
        setLoading(false);
      } catch (error) {
        console.log(error);

        toast.error("Somthing Went Wrong.", {
          position: "top-center",
        });
      }finally{
        setLoading(false)
        router.refresh()
      }
    };
    fetchData();
  }, []);

  // search funcationality

  // filter data through search and no search then list all courses
  const filterData = allCourses?.filter((course: Course_Type) => {
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
