"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Course_Type } from "@/utils/types";

const useFetchSingleCourse = (type: string, id: string) => {
  const [loading, setLoading] = useState(true);
  const [course, setCourse] = useState<Course_Type | any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/${type}/${id}`);
        const data = await res.data;
        setCourse(data);
        setLoading(false);
      } catch (error) {
        alert("Error in fetching single data");
      }
    };
    fetchData();
  }, [id]);

  return { course, loading };
};

export default useFetchSingleCourse;
