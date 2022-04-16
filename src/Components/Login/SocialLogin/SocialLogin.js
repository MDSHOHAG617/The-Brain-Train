import React from "react";
import icon from "../../images/googleIcon.webp";

const SocialLogin = () => {
  return (
    <div>
      <div className="inline-flex align-middle mt-5 ">
        <div style={{ height: "1px" }} className="bg-slate-300 w-48 mt-3"></div>
        <p className="px-4">or</p>
        <div
          style={{ height: "1px" }}
          className="bg-slate-300 w-48  mt-3"
        ></div>
      </div>
      <div className="mt-5 ">
        <button className="w-80 p-2  bg-sky-200 rounded-full">
          <img className="w-[30px] mx-auto" src={icon} alt="" />
          Google Sign In
        </button>
        <br /> <br />
        <button className="w-80 p-2  bg-sky-200 rounded-full">
          <img className="w-[30px] mx-auto" src={icon} alt="" />
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
