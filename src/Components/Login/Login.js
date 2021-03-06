import React, { useState } from "react";
import SocialLogin from "./SocialLogin/SocialLogin";
import app from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import invalidIcon from "../images/invalid.webp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  const handleEmail = (event) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const validEmail = emailRegex.test(event.target.value);
    if (validEmail) {
      setEmail(event.target.value);
      setError("");
    } else {
      setError("invalid Email !");
    }
  };
  const handlePassword = (event) => {
    const passwordRegex = /(?=.*?[#?!@$%^&*-])/;
    const validPassword = passwordRegex.test(event.target.value);
    if (validPassword) {
      setPassword(event.target.value);
      setError("");
    } else {
      setError("At least one special character");
    }
  };

  //handle password reset
  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast("Email sent!");
      })
      .catch((err) => {
        toast(err.message);
      });
  };

  const handleLogIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="">
      <form onSubmit={handleLogIn} className="bg-sky-200 p-5">
        <h1 className="text-xl font-medium p-2">Please Login</h1>
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
          New to Brain The Train?{" "}
          <Link
            to="/registration"
            className="p-2 text-blue-700 hover:text-red-600"
          >
            Please Register
          </Link>{" "}
        </p>
        <button
          onClick={handlePasswordReset}
          className="text-red-500 font-mono p-2"
        >
          Forget Password?
        </button>
        <br />
        <button className="rounded border-2 p-2 font-medium m-2 w-80 hover:bg-white hover:text-blue-600">
          Login
        </button>

        {error && (
          <div>
            <img className="w-8 mx-auto m-1" src={invalidIcon} alt="" />
            <p className="text-red-500  font-bold">{error}</p>
          </div>
        )}
        {hookError && (
          <div>
            <p className="text-red-500  font-bold">{hookError?.message}</p>
          </div>
        )}
      </form>
      <SocialLogin></SocialLogin>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
