"use client";
import Link from "next/link";
import CourseInfo from "@/components/CourseInfo";

import useFetchSingleItem from "@/hooks/useFetchSingleItem";
import Spinner from "@/components/commonUI/Spinner";

const CourseDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const { item: course, loading } = useFetchSingleItem(`/api/course/${id}`);

  if (loading) {
    return <Spinner />;
  }
  if (!course) return;
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-20 px-4 gap-5 flex flex-col items-start">
      <div className="flex items-center gap-2">
        <Link
          href={"/courses"}
          className="font-semibold sm:text-md text-xs cursor-pointer hover:underline capitalize"
        >
          Courses
        </Link>
        <p className="font-semibold sm:text-md text-xs cursor-pointer hover:underline capitalize">
          {course?.courseName}
        </p>
      </div>
      <CourseInfo course={course} courseId={id} />
    </div>
  );
};

export default CourseDetail;
