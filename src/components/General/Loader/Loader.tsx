import React from "react";
import "./style.css";

const Loader = () => {
  return (
    <div className=" my-2 h-full w-full flex flex-row items-center justify-center min-h-[6rem]">
      <div className="line-loader">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Loader;
