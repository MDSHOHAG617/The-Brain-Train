import React, { useState } from "react";
import app from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Login/SocialLogin/SocialLogin";
const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleLoginBtn = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="">
      <form className="bg-sky-200 p-5">
        <h1 className="text-xl font-medium p-2">Please Register</h1>
        <input
          className="rounded border-none p-2 m-2 w-80"
          onChange={handleEmail}
          required
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
        />
        <br />
        <input
          className="rounded border-none p-2 m-2 w-80"
          onChange={handlePassword}
          required
          type="password"
          name="password"
          id=""
          placeholder="password"
        />
        <br />
        <p className="p-1 font-semibold text-sm ">
          All ready Register?{" "}
          <Link to="/login" className="p-2 text-blue-700 hover:text-red-600">
            Please Login
          </Link>{" "}
        </p>

        <button
          onClick={handleLoginBtn}
          className="rounded border-2 p-2 font-medium m-2 w-80 hover:bg-white hover:text-blue-600"
        >
          Register
        </button>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Registration;
