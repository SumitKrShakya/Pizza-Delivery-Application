import React, { useEffect, useState } from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./App.css";


const NavBarNames = ({ page, setPage }) => {
  return (
    <div className="navnames">
      <CustomLink to="/">Home</CustomLink>
      <CustomLink to="/menu">Menu</CustomLink>
      <CustomLink to="/custom">Custom</CustomLink>
      <CustomLink to="/ordernow">Order Now</CustomLink>
    </div>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <div className={isActive ? "navnamesdivs active" : "navnamesdivs"}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
}

export default NavBarNames;
