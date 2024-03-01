"use client";
import FilterCourse from "@/components/FilterCourse";
import Spinner from "@/components/commonUI/Spinner";
import { useFetch } from "@/hooks/useFetch";

const CoursesPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const { data, loading } = useFetch("/api/course");

  if (loading) {
    return <Spinner />;
  }
  if (!data) return;
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-20 px-4 gap-5 flex flex-col items-start">
      <FilterCourse data={data} searchParams={searchParams} />
    </div>
  );
};

export default CoursesPage;
