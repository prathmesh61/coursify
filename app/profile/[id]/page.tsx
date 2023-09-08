"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Spinner from "@/components/Spinner";
import { useState } from "react";
import { Single_Course_Type } from "@/utils/types";
const Profile = ({ params }: { params: { id: String } }) => {
  const [index, setIndex] = useState(0);
  const { id } = params;
  const { data, isLoading } = useQuery(
    ["user", id],
    async () => await axios.get(`/api/getuser/${id}`)
  );

  console.log(data);

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
          className="text-sm  font-medium cursor-pointer hover:underline"
          onClick={() => setIndex(0)}
        >
          PurchasedCourses
        </h2>
        <h2
          className="text-sm  font-medium cursor-pointer hover:underline"
          onClick={() => setIndex(1)}
        >
          Publish Courses
        </h2>
      </div>
      <div className="mt-8 flex gap-5">
        <div className={index === 0 ? "block" : "hidden"}>one</div>
        <div className={index === 1 ? "block" : "hidden"}>Two</div>
      </div>
    </div>
  );
};

export default Profile;
