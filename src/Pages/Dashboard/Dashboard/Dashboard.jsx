import React from "react";
import { Icon } from "@iconify/react";
import { NavLink, Link, Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="flex xl:flex-nowrap lg:flex-wrap md:flex-wrap flex-wrap justify-between">
        <div className="w-full  md:w-[20%] sticky top-0 left-0 z-40 ">
          <Sidebar />
        </div>
        <div className="w-full md:w-[80%] overflow-auto ">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
