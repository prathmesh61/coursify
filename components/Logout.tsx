import React from "react";
import { useRouter } from "next/navigation";
const Logout = () => {
  const router = useRouter();
  const handleClick = () => {
    if (localStorage && localStorage.getItem("user")) {
      localStorage.removeItem("user");
      router.push("/login");
    }
  };
  return (
    <div
      onClick={handleClick}
      className="underline bg-slate-700 text-white px-4 py-1 text-sm rounded-md cursor-pointer"
    >
      Logout
    </div>
  );
};
export default Logout;
