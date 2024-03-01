"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Course_Type, DataInterface } from "@/utils/types";
import CourseCard from "@/components/CourseCard";

import Spinner from "@/components/commonUI/Spinner";
import Chart from "./commonUI/Chart";
import axios from "axios";
import { useRouter } from "next/navigation";

type ParamsID = {
  userID: string;
};

const Dashboard: React.FC<ParamsID> = ({ userID }) => {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState<DataInterface | null>();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const fetchUserProfile = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/user/${userID}`);
        setUser(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  // purchasePrice for checking user purchase course or not
  const purchasePrice = user?.PurchasedCourses?.map(
    (item: Course_Type) => item
  );
  // total - so we can show chart to user
  const total = purchasePrice?.reduce(
    (acc: number, curr: Course_Type) => acc + curr.price,
    0
  );

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <>
      <h1 className="font-extrabold sm:text-3xl text-2xl italic font-mono">
        Welcome back, {user?.username}
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
        {user?.PurchasedCourses.length === 0 && index === 0 ? (
          <div className="h-full p-20 flex flex-col items-center justify-center w-full">
            <p className="bg-blue-500 px-4 py-1 rounded-md text-white text-base text-center">
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
            {user?.PurchasedCourses?.map((item: Course_Type) => (
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
          {user?.courses?.map((item: Course_Type) => (
            <CourseCard key={item?._id} item={item} />
          ))}
        </div>

        {total && (
          <Chart index={index} purchasePrice={purchasePrice} total={total} />
        )}
      </div>
    </>
  );
};

export default Dashboard;
