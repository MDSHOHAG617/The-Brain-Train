import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
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
    <div>
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/blogs">Blogs</CustomLink>
      <CustomLink to="/about">About</CustomLink>
      <CustomLink to="/login">Login</CustomLink>
      <CustomLink to="/registration">Registration</CustomLink>
    </div>
  );
};

export default Navbar;
