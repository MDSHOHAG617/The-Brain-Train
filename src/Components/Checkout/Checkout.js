import React from "react";
import protectedLogo from "../images/protected-logo.webp";

const Checkout = () => {
  return (
    <div className="">
      <h1 className="text-red-500 text-4xl font-normal mt-10">
        Welcome to Protected Route !!
      </h1>
      <img className="mx-auto w-960" src={protectedLogo} alt="" />
    </div>
  );
};

export default Checkout;
