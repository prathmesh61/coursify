"use client";
import { useEffect, useState } from "react";
export const useGetLoginUser = () => {
  const [loginUser, setLoginUser] = useState<any>(null);
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setLoginUser(JSON.parse(user));
    }
  }, []);
  // console.log(loginUser);
  return { loginUser };
};
