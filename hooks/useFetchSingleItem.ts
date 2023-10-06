"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Course_Type, Single_User_Type } from "@/utils/types";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const useFetchSingleItem = (type: string, id: string) => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<Course_Type | Single_User_Type>();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/${type}/${id}`);
        const data = await res.data;
        setCourse(data);
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
  }, [id]);

  return { course, loading };
};

export default useFetchSingleItem;
