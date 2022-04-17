import React, { useState } from "react";
import SocialLogin from "./SocialLogin/SocialLogin";
import app from "../../firebase.init";
// import getAuth from "firebase/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

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
        <button
          onClick={handleLoginBtn}
          className="rounded border-2 p-2 font-medium m-2 w-80 hover:bg-white hover:text-blue-600"
        >
          Login
        </button>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
