import { getAuth } from "firebase/auth";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../../firebase.init";
import icon from "../../images/googleIcon.webp";

const SocialLogin = () => {
  const auth = getAuth(app);
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="inline-flex align-middle mt-5 ">
        <div style={{ height: "1px" }} className="bg-slate-300 w-48 mt-3"></div>
        <p className="px-4">or</p>
        <div
          style={{ height: "1px" }}
          className="bg-slate-300 w-48  mt-3"
        ></div>
      </div>
      <div className="mt-5 ">
        <button
          onClick={handleGoogleSignIn}
          className="w-80 p-2  bg-sky-200 rounded-full"
        >
          <img className="w-[30px] mx-auto m-" src={icon} alt="" />
          Google Sign In
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
