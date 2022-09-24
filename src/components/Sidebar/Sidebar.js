import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import logo from 'assets/images/Logoctf.png'
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {
  
  
  return (

    <div className="Sidebar">
  
    <div className="Logohidden">
      <img src={logo} width={250} height={250} alt="Logo"/></div>
      <ul className="SidebarList">
      {SidebarData.map((val, key) => {
      return (
        <li 
        key={key} 
        className="row"
        id={window.location.pathname == val.link ? "active" : ""}
        onClick={() => {
          window.location.pathname = val.link;
          }}
          >
          <div id="icon">{val.icon}</div>{""}
          <div id="title">
            {val.title}
          </div>

        </li>
      );
    })}
    </ul>
      </div>
  )

}

export default Sidebar