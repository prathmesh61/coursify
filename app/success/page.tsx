import React from "react";
import Link from "next/link";
const SuccessPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-14 py-4 max-w-screen-2xl mx-auto ">
      <Link href={"/"} className="text-2xl hover:underline font-mono">
        SuccessFully Purchased Course Go To Home
      </Link>
    </div>
  );
};

export default SuccessPage;
