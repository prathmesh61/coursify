"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const CourseDetail = ({ params }: any) => {
  // console.log(params.id);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get(`/api/course/${params.id}`);
      return res.data;
    },
  });
  // console.log(data);
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-20 px-14 gap-5 flex flex-col items-start">
      CourseDetail
    </div>
  );
};

export default CourseDetail;
