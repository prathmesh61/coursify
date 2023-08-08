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

  return <div>Profile</div>;
};

export default Profile;
