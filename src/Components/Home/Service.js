import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { Name, Price, image, description } = service;
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="my-8 m border rounded bg-sky-100  ">
      <div className="p-8">
        <img className=" my-4 mx-auto w-40 rounded-full " src={image} alt="" />
        <h3 className="text-xl font-bold"> {Name}</h3>
        <p className="text-lg font-mono ">Price: {Price}</p>
        <p className="font-light"> {description}</p>
        <button
          onClick={handleCheckout}
          className=" px-3 py-2 text-lg font-semibold hover:bg-lime-300 hover:text-black text-white bg-red-400  rounded-full my-4"
        >
          checkout
        </button>
      </div>
    </div>
  );
};

export default Service;
