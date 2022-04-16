import React from "react";
import SocialLogin from "../Login/SocialLogin/SocialLogin";

const Registration = () => {
  return (
    <div>
      <div className="bg-slate-100 w-96 rounded mx-auto">
        <h1 className="text-xl mt-10 mb-4 font-medium pt-8">Please Register</h1>
        <div className="mb-5">
          <label className="p-4 font-semibold">Name </label>
          <input
            required
            className="bg-sky-200 p-2 w-64 rounded-full"
            type="Email"
            placeholder="your email"
          />
        </div>
        <div className="mb-5">
          <label className="p-4 font-semibold">Email</label>
          <input
            required
            className="bg-sky-200 p-2 w-64 rounded-full"
            type="Email"
            placeholder="your email"
          />
        </div>

        <div className="">
          <label className="p-2 font-semibold ">Password</label>
          <input
            required
            className="bg-sky-200 p-2 w-64 rounded-full mr-2"
            type="Password"
            placeholder="password"
          />
        </div>
        <button className="mt-5 p-2 bg-sky-200 hover:bg-red-200 rounded-full m-10">
          Register
        </button>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Registration;
