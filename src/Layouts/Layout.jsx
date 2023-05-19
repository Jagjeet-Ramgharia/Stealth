import React from "react";
import Heeader from "./Header/Heeader";
import SideBar from "./SideBar/SideBar";

function Layout({ children }) {
  return (
    <div>
      <Heeader />
      <div
        style={{
          width: "calc(100vw - 18rem)",
          height: "calc(100vh - 80px)",
          float: "right",
        }}
      >
        {children}
      </div>
      <SideBar />
    </div>
  );
}

export default Layout;
