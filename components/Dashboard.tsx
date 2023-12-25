"use client";
import React from "react";
import { useState } from "react";
import { Course_Type, DataInterface } from "@/utils/types";
import CourseCard from "@/components/CourseCard";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import axios from "axios";
import Spinner from "@/components/commonUI/Spinner";
import Chart from "./commonUI/Chart";
import { log } from "util";

interface ParamsID {
  userID: string;
}

const Dashboard = ({ userID }: ParamsID) => {
  const [index, setIndex] = useState(0);
  const { data: profileData, isLoading } = useQuery(
    ["user", userID],
    async () => await axios.get(`/api/user/${userID}`)
  );
  const data: DataInterface = profileData?.data;

  const purchasePrice = data?.PurchasedCourses?.map(
    (item: Course_Type) => item
  );
  const total = purchasePrice?.reduce(
    (acc: number, curr: Course_Type) => acc + curr.price,
    0
  );

  if (isLoading) {
    return (
      <>
        <Spinner />
      </>
    );
  }
  return (
    <>
      <h1 className="font-extrabold sm:text-3xl text-2xl italic font-mono">
        Welcome back, {data?.username}
      </h1>
      <div className="flex gap-10 justify-end">
        <h2
          className={
            index === 0
              ? "text-xs whitespace-nowrap font-medium cursor-pointer border-b-4 border-blue-400"
              : "text-xs whitespace-nowrap  font-medium  cursor-pointer"
          }
          onClick={() => setIndex(0)}
        >
          Purchased Courses
        </h2>
        <h2
          className={
            index === 1
              ? "text-xs whitespace-nowrap  font-medium cursor-pointer border-b-4 border-blue-400"
              : "text-xs whitespace-nowrap font-medium  cursor-pointer"
          }
          onClick={() => setIndex(1)}
        >
          Publish Courses
        </h2>
        <h2
          className={
            index === 2
              ? "text-xs whitespace-nowrap  font-medium cursor-pointer border-b-4 border-blue-400"
              : "text-xs whitespace-nowrap font-medium  cursor-pointer"
          }
          onClick={() => setIndex(2)}
        >
          Sells
        </h2>
      </div>
      <div className="lg:mt-8 flex gap-5">
        {data?.PurchasedCourses.length === 0 && index === 0 ? (
          <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative h-72 w-72">
              <Image src="/empty.png" fill alt="Empty" />
            </div>
            <p className="bg-blue-500 px-4 py-1 rounded-md text-white text-sm text-center">
              No Purchase Courses!
            </p>
          </div>
        ) : (
          <div
            className={
              index === 0
                ? "mt-20 flex justify-evenly items-center flex-wrap w-full"
                : "hidden"
            }
          >
            {data?.PurchasedCourses?.map((item: Course_Type) => (
              <CourseCard key={item?._id} item={item} />
            ))}
          </div>
        )}
        <div
          className={
            index === 1
              ? "mt-20 flex justify-evenly items-center flex-wrap w-full"
              : "hidden"
          }
        >
          {data?.courses?.map((item: Course_Type) => (
            <CourseCard key={item?._id} item={item} />
          ))}
        </div>

        <Chart index={index} purchasePrice={purchasePrice} total={total} />
      </div>
    </>
  );
};

export default Dashboard;
