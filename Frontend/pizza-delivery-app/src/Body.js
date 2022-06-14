import React, { useEffect, useState } from "react";
import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Custom from "./Pages/Custom";
import OrderNow from "./Pages/OrderNow";
import { Route, Routes } from "react-router-dom"
// import Headder from "./Headder";

const Body = ({page,setPage}) => {
    // setPage(0)
  return (
      <>
      {/* {page===0?<div className='restbody0'>Combos and Best Deals page</div>:page===1?<div className='restbody1'>All Pizza Page</div>:page===2?<div className='restbody2'>Custom pizza Page</div>:<div className='restbody3'>Page Not Found</div>} */}
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/custom" element={<Custom />} />
          <Route path="/ordernow" element={<OrderNow />} />
        </Routes>
    </>
  )
}

export default Body