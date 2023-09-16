import Link from "next/link";
import Image from "next/image";
import arrowRight from "@/public/right-arrow.svg";

import AddToCartBtn from "@/components/AddToCartBtn";
import CourseInfo from "@/components/CourseInfo";
async function getData(Api_URI: string) {
  const res = await fetch(Api_URI);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const CourseDetail = async ({ params }: { params: { id: string } }) => {
  const course = await getData(
    process.env.API_URL + `/api/course/${params.id}`
  );

  return (
    <div className="relative max-w-screen-2xl mx-auto mt-20 px-4 gap-5 flex flex-col items-start">
      <div className="flex items-center gap-2">
        <Link
          href={"/courses"}
          className="font-semibold sm:text-md text-xs    cursor-pointer hover:underline capitalize"
        >
          Courses
        </Link>
        {"  >  "}
        <p className="font-semibold sm:text-md text-xs   cursor-pointer hover:underline capitalize">
          {course?.courseName}
        </p>
      </div>
      <CourseInfo course={course} />
    </div>
  );
};

export default CourseDetail;
