"use client";
import { Category_Type, Course_Type } from "@/utils/types";
import Spinner from "@/components/Spinner";
import CourseCard from "@/components/CourseCard";
import { useFetchCourse } from "@/hooks/useFetchCourse";

const CoursesPage = () => {
  const { loading, search, setSearch, filterData, uniqueCategories } =
    useFetchCourse();

  if (loading) {
    return (
      <>
        <Spinner />
      </>
    );
  }

  return (
    <div className="relative max-w-screen-2xl mx-auto mt-20 px-4 gap-5 flex flex-col items-start">
      <div className="flex w-full">
        <input
          type="text"
          name="text"
          id="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search For anything..."
          className="shadow-md px-4 py-1 border-2 border-gray-200 rounded-md flex-grow"
        />
      </div>
      <div className="flex  justify-center items-center gap-4 flex-wrap">
        {uniqueCategories?.map((item: string | any, index: number) => (
          <div className="bg-blue-500 px-2 cursor-pointer" key={index}>
            <h2 className="text-sm text-white font-semibold font-mono">
              {item}
            </h2>
          </div>
        ))}
      </div>
      <div className="mt-20 flex justify-evenly items-center flex-wrap w-full ">
        {filterData?.map((item: Course_Type) => (
          <CourseCard key={item?._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
