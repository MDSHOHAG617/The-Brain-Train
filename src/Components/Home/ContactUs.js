import React from "react";
import backgroundImage from "../images/contactbg.jpg";

const ContactUs = () => {
  return (
    <div>
      <h1 className="text-4xl font-medium mt-10 text-slate-600">Contact Us</h1>
      <div className="my-10 bg-sky-100 ">
        <div className="">
          <div className="py-10">
            <h2 className="text-xl font-medium ">Call Us 800-123-4567</h2>
            <h1 className="text-3xl font-semibold">Question About Hiring?</h1>
            <p className="text-xl font-light">
              Our staff can help you with the process of becoming a tutor{" "}
            </p>
            <button className="p-2 bg-red-400 rounded-full text-white m-2 hover:bg-lime-200 hover:text-black">
              SET AN INTERVIEW
            </button>
          </div>
          <img className="mx-auto rounded" src={backgroundImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
