import React from "react";
import banner from "../images/banner.png";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Services from "./Services";
const Home = () => {
  return (
    <div>
      <img className="mx-auto my-auto w-8/12" src={banner} alt="" />

      <Services></Services>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
};

export default Home;
