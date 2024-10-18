import React, { useState } from "react";
import Sidebar from "../SideBar/Sidebar";

const Header = () => {
    const [openDrawer,setDrawer]=useState(false)
    const handleDrawer=()=>{
        setDrawer(!openDrawer)
    }
  return (
    <div>
    <div className="flex justify-center items-center p-4 bg-gray-700 relative">
      <div className="flex space-x-10 font-semibold uppercase">
        <p>Home</p>
        <p>store</p>
        <p>about</p>
      </div>
      <div className="absolute right-4 top-4">
        {/* <p className="border-2 border-green-400 px-1 rounded-md relative">
          <p onClick={handleDrawer}>cart</p>
          

          <p className="absolute -top-2 text-green-400 -right-3">0</p>
        </p> */}
        {/* {openDrawer && <Sidebar/>} */}
        <Sidebar/>
      </div>
    </div>
    <h1 className="font-bold text-8xl bg-gray-400 text-white text-center p-10">The Generics</h1>
    </div>
  );
};

export default Header;
