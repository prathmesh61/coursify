"use client";
import { useEffect, useState } from "react";
import { Category_Type, Course_Type } from "@/utils/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export const useFetch = (Url: string) => {
  const [data, setData] = useState<Course_Type[] | null>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(Url, { next: { revalidate: 20 } });
        const data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.log(error);

        toast.error("Somthing Went Wrong.", {
          position: "top-center",
        });
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return {
    data,
    loading,
  };
};
