import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div
        className="w-12 h-12 rounded-full animate-spin
    border-8 border-solid border-blue-500 border-t-transparent shadow-md"
      ></div>
    </div>
  );
};

export default Spinner;
