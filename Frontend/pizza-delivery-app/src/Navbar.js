import NavBarNames from "./NavBarNames";
import React, { useEffect, useState } from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";

const Navbar = ({page,setPage}) => {
  return (
    <div className="navbar">
    <div className="logo"><img src="./images/Logo.svg"/></div>
    <NavBarNames setPage={setPage} page={page}/>
    <div className="login">Login / Register</div>

    </div>
  );
};

export default Navbar;
