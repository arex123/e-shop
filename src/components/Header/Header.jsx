import React, { useContext, useState } from "react";
import Sidebar from "../SideBar/Sidebar";
import { NavLink } from "react-router-dom";

const Header = () => {
    
    const [openDrawer,setDrawer]=useState(false)
    const handleDrawer=()=>{
        setDrawer(!openDrawer)
    }
  return (
    <div>
    <div className="flex justify-center items-center p-4 bg-gray-700 relative">
      <div className="flex space-x-10 font-semibold uppercase">
        <p>
          <NavLink to="/">Home</NavLink>
        </p>
        <p>
          <NavLink to="/store">Store</NavLink>
        </p>
        <p>
          <NavLink to="/about">About</NavLink>
        </p>
      </div>
      <div className="absolute right-4 top-4">
        <Sidebar/>
      </div>
    </div>
    <h1 className="font-bold text-8xl bg-gray-400 text-white text-center p-10">The Generics</h1>
    </div>
  );
};

export default Header;
