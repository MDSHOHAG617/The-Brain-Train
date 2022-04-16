import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { Name, Price, image, description } = service;
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="my-8 m border rounded bg-slate-100  ">
      <div className="p-8">
        <img className=" my-4 mx-auto w-40 rounded-full " src={image} alt="" />
        <h3>Name: {Name}</h3>
        <p>Price: {Price}</p>
        <p>Description: {description}</p>
        <button
          onClick={handleCheckout}
          className="p-2 bg-red-500 rounded my-4"
        >
          checkout
        </button>
      </div>
    </div>
  );
};

export default Service;
