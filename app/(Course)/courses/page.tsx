import { Category_Type } from "@/utils/types";
import FilterCourse from "@/components/FilterCourse";

async function getData(Api_URI: string) {
  const res = await fetch(Api_URI);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const CoursesPage = async () => {
  const data = await getData(process.env.API_URL + "/api/course");

  return (
    <div className="relative max-w-screen-2xl mx-auto mt-20 px-4 gap-5 flex flex-col items-start">
      <FilterCourse data={data} />
    </div>
  );
};

export default CoursesPage;
