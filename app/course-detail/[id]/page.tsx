"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import arrowRight from "@/public/right-arrow.svg";
const CourseDetail = ({ params }: any) => {
  // fetching single course from params
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get(`/api/course/${params.id}`);
      return res.data;
    },
  });

  // some funcation to get the course data
  const date = new Date(data?.createdAt);
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-20 px-14 gap-5 flex flex-col items-start">
      <div className="flex items-center gap-2">
        <Link
          href={"/courses"}
          className="font-semibold  cursor-pointer hover:underline capitalize"
        >
          Courses
        </Link>
        {"  >  "}
        <p className="font-semibold  cursor-pointer hover:underline capitalize">
          {data?.courseName}
        </p>
      </div>
      <div className="w-full flex flex-wrap-reverse justify-between  gap-4">
        <div className="flex flex-col items-start gap-2 w-full  lg:w-[48%] px-2">
          <h1 className="font-extrabold text-3xl sm:text-4xl ">
            {data?.courseName}
          </h1>
          <p className="text-md sm:text-lg text-gray-600 ">
            {data?.description.slice(0, 300) + "..."}
          </p>
          <p className="text-sm text-gray-600 underline cursor-pointer ">
            Course creator:- {data?.autherID?.username}
          </p>
          <p className="font-normal text-sm flex items-center gap-1 capitalize">
            {[1, 2, 3, 4, 5].map((item: any, index: number) => (
              <span key={index} className="text-yellow-500">
                ★
              </span>
            ))}
          </p>

          <p className="text-sm text-gray-500  cursor-pointer ">
            Created At:- {date.toLocaleDateString("en-US")}
          </p>
          <p className="text-3xl font-extrabold text-black">₹{data?.price}</p>
          <div className="flex flex-col gap-2 mt-5">
            <h3 className="font-bold text-xl text-black text-left flex items-center gap-1 ">
              Requirements
              <Image
                src={arrowRight}
                alt="arrow"
                width={20}
                height={20}
                className="bg-blue-500 text-white rounded-full"
              />
            </h3>
            <ol className="text-md text-gray-500 flex- flex-col gap-2 ml-5">
              <li className="list-decimal">
                NO React experience necessary! I take you from beginner to
                expert!
              </li>
              <li className="list-decimal ">
                Basic understanding of JavaScript is required (this course
                contains a quick JavaScript review section)
              </li>
              <li className="list-decimal ">
                Any computer and OS will work — Windows, macOS or Linux
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full lg:w-[48%] flex flex-col gap-4">
          <img
            className=" w-full object-contain "
            src={data?.banner}
            alt={data?.courseName}
          />
          <button className="bg-[#5624D0] text-white py-2 px-6 rounded-sm hover:bg-[#5524d0e6]">
            Buy this course
          </button>
          <span className="text-xs text-gray-500 capitalize font-mono text-center">
            30-Day Money-Back Guarantee Full Lifetime Access
          </span>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
