"use client";
import React from "react";
import { useState } from "react";
import { Course_Type } from "@/utils/types";
import CourseCard from "@/components/CourseCard";
import { AreaChart, Area, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "@/components/commonUI/Spinner";
interface DataInterface {
  PurchasedCourses: Course_Type[];
  courses: Course_Type[];
  username: string;
  email: string;
  id: string;
  isSeller: boolean;
  _v: number;
  _id: string;
}
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
            width={300}
            height={400}
            data={purchasePrice}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis />
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
    </>
  );
};

export default Dashboard;
