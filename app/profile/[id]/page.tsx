"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Profile = ({ params }: { params: { id: String } }) => {
  const { id } = params;
  // console.log(id);
  const { data } = useQuery(
    ["user", id],
    async () => await axios.get(`/api/getuser/${id}`)
  );

  return (
    <div className="relative max-w-screen-2xl mx-auto mt-40 lg:mt-80 px-14 gap-5 flex flex-col justify-center items-center">
      Profile
    </div>
  );
};

export default Profile;
