import React from "react";
import "./Admin.css";
import { NavLink } from "react-router-dom";
import { SidebarData } from "../components/sidenav/SidebarData";
import Nav from "./admin_page/Nav";

const Admin = () => {
  return (
    <>
      <div className="container">
      <Nav />

        <div className="sidebar_container_style">
          <div className="sidebar_Container">
            <div className="sidebar_menu_dashboard">
              <div className="menu_icon">
                <i class="ri-dashboard-line"></i>
              </div>
              <div className="menu_text">
                <li>Manage</li>
              </div>
            </div>

            {SidebarData.map((item, index) => {
              return (
                <div className="sidebar_menu">
                  <div className="menu_icon" key={index}>
                    {item.icon}
                  </div>
                  <div className="menu_text">
                    <NavLink className="menu_Navlink" to={item.path}>
                      <li>{item.title}</li>{" "}
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/*   MAIN CONTENTS START  */}

        <div className="main_content_box">
          <h1>main Contents Box</h1>
        </div>
      </div>
    </>
  );
};

export default Admin;
