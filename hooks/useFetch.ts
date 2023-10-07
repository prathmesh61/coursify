"use client";
import { useEffect, useState } from "react";
import { Category_Type, Course_Type } from "@/utils/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useFetch = (Url: string) => {
  const [dataArray, setDataArray] = useState<Course_Type[] | any>();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(Url, { next: { revalidate: 20 } });
        const data = await res.json();
        setDataArray(data);
        setLoading(false);
      } catch (error) {
        console.log(error);

        toast.error("Somthing Went Wrong.", {
          position: "top-center",
        });
      } finally {
        setLoading(false);
        router.refresh();
      }
    };
    fetchData();
  }, []);

  // unique categories set
  const uniqueCategories = [
    ...new Set(dataArray?.map(({ category }: Category_Type) => category)),
  ] as Array<string>;
  return {
    dataArray,
    loading,
    search,
    setSearch,
    uniqueCategories,
  };
};
