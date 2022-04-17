import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import app from "../../firebase.init";
import img from "../images/icons8-tutor-64.png";

const Navbar = () => {
  const auth = getAuth(app);
  const handleSignOut = () => {
    signOut(auth);
  };
  const [user, loading, error] = useAuthState(auth);
  function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <div>
        <Link
          style={{ textDecoration: match ? "underline" : "none" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
  return (
    <div className="lg:block xl:flex sm:flex justify-center p-5 bg-lime-200">
      <div className="flex mx-auto">
        <h2 className=" text-3xl mr-6   font-medium align-middle text-slate-700">
          The Brain Train
        </h2>
        <img className="w-[30px] mr-10 h-8 " src={img} alt="" />
      </div>
      <div className="flex ">
        <CustomLink className="p-3 text-xl font-medium" to="/">
          Home
        </CustomLink>
        <CustomLink className="p-3 text-xl font-medium" to="/blogs">
          Blogs
        </CustomLink>
        <CustomLink className="p-3 text-xl font-medium" to="/about">
          About
        </CustomLink>
        <CustomLink className="p-3 text-xl font-medium" to="/checkout">
          Checkout
        </CustomLink>
      </div>
      <div className="flex">
        <CustomLink className="p-3 text-xl font-medium" to="/registration">
          Registration
        </CustomLink>
        {user ? (
          <CustomLink className="p-3 mr-14 text-xl font-medium" to="/login">
            <button onClick={handleSignOut} className="btn">
              logout
            </button>
          </CustomLink>
        ) : (
          <CustomLink className="p-3 mr-14 text-xl font-medium" to="/login">
            Login
          </CustomLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
