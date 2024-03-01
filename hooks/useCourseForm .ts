"use client";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";

export const useCourseForm = () => {
  const [courseName, setCourseName] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [isCourseCreated, setIsCourseCreated] = useState<boolean>(false);

  const router = useRouter();
  const { user } = useSelector((state: any) => state.user);

  const CLOUDINARY_URL =
    "https://api.cloudinary.com/v1_1/dpvjdarqx/image/upload";
  const CLOUDINARY_UPLOAD_PRESET = "coursify";
  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsCourseCreated(true);
    // check if all fields are filled
    if (!courseName || !description || !banner || !category || !price) {
      toast.error("fill all the fields", {
        position: "top-center",
      });
      return;
    }

    const file = banner;
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    const { data } = await axios.post(CLOUDINARY_URL, formData);

    try {
      const course = await axios.post("/api/course", {
        courseName,
        description,
        banner: data?.url || "",
        category,
        price,
        id: user?._id,
      });
      if (course.status === 200) {
        toast.success("Successfull.", {
          position: "top-center",
        });

        setCourseName("");
        setDescription("");
        setBanner("");
        setCategory("");
        setPrice("");

        router.push("/courses");
      }
    } catch (error: any) {
      console.log(error);
      toast.error("Try Again.", {
        position: "top-center",
      });
    } finally {
      setIsCourseCreated(false);
    }
  };
  return {
    banner,
    category,
    courseName,
    description,
    price,
    setBanner,
    setCategory,
    setDescription,
    setPrice,
    setCourseName,
    isCourseCreated,
    handleFormSubmit,
    user,
  };
};
