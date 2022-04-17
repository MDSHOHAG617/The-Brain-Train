import { getAuth } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import app from "../../firebase.init";
import loadingGif from "../images/loading.gif";

const RequiredAuth = ({ children }) => {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const location = useLocation();
  if (loading) {
    return (
      <div className="">
        <img className="mx-auto mt-20 w-64" src={loadingGif} alt="" />
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequiredAuth;
