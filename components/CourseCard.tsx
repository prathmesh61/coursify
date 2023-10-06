import { Course_Card_Type } from "@/utils/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const CourseCard = ({ item }: Course_Card_Type) => {
  return (
    <>
      <Link
        href={`/course-detail/${item?._id}`}
        className="flex flex-col  gap-1 w-[400px] h-[400px] md:item-start items-center cursor-pointer  py-8 px-4"
        key={item?._id}
      >
        <div className="relative w-[300px] h-[235px] md:w-[400px] md:h-[400px]">
          <Image
            src={item?.banner}
            alt={item?.courseName}
            fill
            className="object-contain"
          />
        </div>
        <h3 className="font-bold sm:text-xl text-lg text-center text-black capitalize">
          {item?.courseName}
        </h3>
        <p className="font-normal text-sm  text-gray-500 capitalize">
          instructor:- {item?.autherID?.username}
        </p>
        <h3 className="font-bold text-xl text-black capitalize">
          ₹{item?.price}
        </h3>
        <p className="font-normal text-sm text-gray-500 capitalize">
          Category:- {item?.category}
        </p>
      </Link>
    </>
  );
};

export default CourseCard;
