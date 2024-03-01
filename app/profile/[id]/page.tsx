"use client";
import Dashboard from "@/components/Dashboard";
import { usePathname } from "next/navigation";
type ParamsType = {
  params: {
    id: string;
  };
};

const Profile = () => {
  const path = usePathname();
  const id = path.split("/")[2];

  return (
    <div className="relative max-w-screen-2xl mx-auto mt-24  px-14 gap-5 flex flex-col  ">
      <Dashboard userID={id} />
    </div>
  );
};

export default Profile;
