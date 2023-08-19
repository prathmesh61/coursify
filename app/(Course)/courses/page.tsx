"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { set } from "mongoose";
import React from "react";
import Link from "next/link";
const CoursesPage = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      const res = await axios.get("/api/course");
      return res.data;
    },
  });
  const Newcategort = new Set(data?.map((item: any) => item.category));
  const cat = [...Newcategort];
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-20 px-14 gap-5 flex flex-col items-start">
      <div className="flex w-full">
        <input
          type="text"
          name="text"
          id="text"
          placeholder="Search For anything..."
          className="shadow-md px-4 py-1 border-2 border-gray-200 rounded-md flex-grow"
        />
      </div>
      <div className="flex  justify-center items-center gap-4 flex-wrap">
        {cat?.map((item: String, index: number) => (
          <div className="bg-blue-500 px-2 cursor-pointer" key={index}>
            <h2 className="text-sm text-white font-semibold font-mono">
              {item}
            </h2>
          </div>
        ))}
      </div>
      <div className="mt-20 flex justify-around item-center flex-wrap w-full">
        {data?.map((item: any, index: number) => (
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
            <p className="font-normal text-sm text-gray-500 capitalize">
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
