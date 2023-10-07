"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Course_Type, Single_User_Type } from "@/utils/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const useFetchSingleItem = (Url: string) => {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<Course_Type | Single_User_Type>();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(Url);
        const data = await res.data;
        setItem(data);
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
  }, [Url]);

  return { item, loading };
};

export default useFetchSingleItem;
