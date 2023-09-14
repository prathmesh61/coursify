"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import { Course_Type, Single_Course_Type } from "@/utils/types";
import CourseCard from "@/components/CourseCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const Profile = ({ params }: { params: { id: String } }) => {
  const [index, setIndex] = useState(0);
  const { id } = params;
  const { data, isLoading } = useQuery(
    ["user", id],
    async () => await axios.get(`/api/getuser/${id}`)
  );
  // console.log(data?.data);

  const purchasePrice = data?.data?.PurchasedCourses?.map(
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
    <div className="relative max-w-screen-2xl mx-auto mt-24  px-14 gap-5 flex flex-col  ">
      <h1 className="font-extrabold sm:text-3xl text-2xl italic font-mono">
        Welcome back, {data?.data.username}
      </h1>
      <div className="flex gap-10 justify-end">
        <h2
          className={
            index === 0
              ? "text-sm  font-medium cursor-pointer border-b-4 border-blue-400"
              : "text-sm font-medium  cursor-pointer"
          }
          onClick={() => setIndex(0)}
        >
          Purchased Courses
        </h2>
        <h2
          className={
            index === 1
              ? "text-sm  font-medium cursor-pointer border-b-4 border-blue-400"
              : "text-sm font-medium  cursor-pointer"
          }
          onClick={() => setIndex(1)}
        >
          Publish Courses
        </h2>
        <h2
          className={
            index === 2
              ? "text-sm  font-medium cursor-pointer border-b-4 border-blue-400"
              : "text-sm font-medium  cursor-pointer"
          }
          onClick={() => setIndex(2)}
        >
          Sells
        </h2>
      </div>
      <div className="mt-8 flex gap-5">
        <div
          className={
            index === 0
              ? "mt-20 flex justify-evenly items-center flex-wrap w-full"
              : "hidden"
          }
        >
          {data?.data?.PurchasedCourses?.map((item: Course_Type, i: Number) => (
            <CourseCard key={item?._id} item={item} />
          ))}
        </div>
        <div
          className={
            index === 1
              ? "mt-20 flex justify-evenly items-center flex-wrap w-full"
              : "hidden"
          }
        >
          {data?.data?.courses?.map((item: Course_Type, i: Number) => (
            <CourseCard key={item?._id} item={item} />
          ))}
        </div>
        <div
          className={
            index === 2
              ? "mt-20 w-full h-full flex flex-col gap-5 justify-center items-center"
              : "hidden"
          }
        >
          <p className="text-xl font-bold">
            {total > 0 ? `Total Sells:- ₹${total}` : "No sells"}
          </p>

          <AreaChart
            width={900}
            height={500}
            data={purchasePrice}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="price" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              fill="#3A72ED"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default Profile;
