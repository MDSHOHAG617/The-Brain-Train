import React from "react";
import myself from "../images/myself.png";

const About = () => {
  return (
    <div className="bg-slate-100">
      <div className="grid grid-cols-2 align-middle">
        <div className="text-4xl ml-20 mt-44 m-6">
          I AM MD SHOHAG{" "}
          <p className="font-mono text-xl">
            My next goal to be a full stack web developer. And I believe In Sha
            Allah I can be. Thank full to Almighty God, My parents and also to
            Programing Hero Team. Specially thanks Jhankar Mahbub (Vai❤️)
          </p>
        </div>
        <img className="w-80 mb-20 mx-auto mt-8" src={myself} alt="" />
      </div>
    </div>
  );
};

export default About;
