import FilterCourse from "@/components/FilterCourse";
const CoursesPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className="relative max-w-screen-2xl mx-auto mt-20 px-4 gap-5 flex flex-col items-start">
      <FilterCourse searchParams={searchParams} />
    </div>
  );
};

export default CoursesPage;
