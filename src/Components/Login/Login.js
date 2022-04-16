import React, { useState } from "react";
import SocialLogin from "./SocialLogin/SocialLogin";
import app from "../../firebase.init";
// import getAuth from "firebase/auth";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Registered User: {user.email}</p>
      </div>
    );
  }

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleLoginBtn = () => {
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="">
      <div className="bg-slate-100 w-96 rounded mx-auto">
        <h1 className="text-xl mt-10 mb-4 font-medium pt-8">Please login</h1>
        <div className="mb-5">
          <label className="p-4 font-semibold">Email</label>
          <input
            onChange={handleEmail}
            required
            value={email}
            className="bg-sky-200 p-2 w-64 rounded-full"
            type="email"
            placeholder="your email"
          />
        </div>

        <div className="">
          <label className="p-2 font-semibold ">Password</label>
          <input
            onChange={handlePassword}
            required
            value={password}
            className="bg-sky-200 p-2 w-64 rounded-full mr-2"
            type="password"
            placeholder="password"
          />
        </div>
        <button
          onClick={handleLoginBtn}
          className="mt-5 p-2 bg-sky-200 hover:bg-red-200 rounded-full m-10"
        >
          Login
        </button>
      </div>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
<h1>welcome to login</h1>;
