"use client";
import FilterCourse from "@/components/FilterCourse";
import Spinner from "@/components/commonUI/Spinner";
import { useFetch } from "@/hooks/useFetch";
import { Course_Type } from "@/utils/types";
import axios from "axios";
import { useEffect, useState } from "react";

// async function getData(Api_URI: string) {
//   const res = await fetch(Api_URI, { next: { revalidate: 20 } });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }
const CoursesPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { data, loading } = useFetch("/api/course");
  // const [data, setData] = useState<Course_Type[] | []>([]);
  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const { data } = await axios.get("/api/course");
  //       if (data) {
  //         setData(data);
  //       }
  //     } catch (error) {
  //       console.log("error in fetch courses", error);
  //     }
  //   };
  //   fetchCourses();
  // }, []);

  // const data = await getData(process.env.API_URL + "/api/course");
  if (loading) {
    return <Spinner />;
  }
  if (!data) return;
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-20 px-4 gap-5 flex flex-col items-start">
      <FilterCourse data={data} searchParams={searchParams} />
    </div>
  );
};

export default CoursesPage;
