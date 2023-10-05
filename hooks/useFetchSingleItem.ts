"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Course_Type, Single_User_Type } from "@/utils/types";
import { toast } from "react-toastify";

const useFetchSingleItem = (type: string, id: string) => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<Course_Type | Single_User_Type>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/${type}/${id}`);
        const data = await res.data;
        setCourse(data);
        setLoading(false);
      } catch (error) {
        toast.error("Error in fetching single data", {
          position: "top-center",
        });
      }
    };
    fetchData();
  }, [id]);

  return { course, loading };
};

export default useFetchSingleItem;
