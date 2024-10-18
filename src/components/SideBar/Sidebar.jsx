import React, { useContext } from "react";
import Cart from "../Cart/Cart";
import StoreContext from "../../store/StoreContext";

const Sidebar = () => {
    const ctx=useContext(StoreContext)
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button border p-2 rounded-md border-green-200 cursor-pointer"
        >
          Cart
          <p className="absolute -top-4 text-green-400 -right-3">{ctx.totalItems}</p>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <h2 className="text-center text-2xl">Cart</h2>

          <Cart />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
