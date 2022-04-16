import React from "react";
import banner from "../images/banner.png";
import Services from "./Sevices";
const Home = () => {
  return (
    <div>
      <img className="mx-auto my-auto w-8/12" src={banner} alt="" />

      <Services></Services>
    </div>
  );
};

export default Home;
