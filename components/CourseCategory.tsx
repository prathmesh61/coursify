import { Course_Type } from "@/utils/types";
import Link from "next/link";
import React from "react";

type Props = {
  data: Course_Type[];
};

function CourseCategory({ data }: Props) {
  const filterCategory = data.map((item: Course_Type) => item.category);
  const mainArrayCategory = filterCategory.filter(
    (val, ind) => filterCategory.indexOf(val) === ind
  );

  return (
    <div className="flex whitespace-nowrap flex-wrap justify-center lg:justify-start items-center gap-2">
      <Link
        href={"/courses"}
        className="text-sm md:text-md active:border-none bg-zinc-800 text-white px-2 rounded-md"
      >
        No Filter
      </Link>
      <div className="flex items-start whitespace-nowrap gap-4">
        {mainArrayCategory.map((cat: string) => (
          <Link
            href={`?category=${cat}`}
            className="text-sm md:text-md active:border-none bg-blue-400 text-white px-2 rounded-md"
            key={cat}
          >
            {cat}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CourseCategory;
