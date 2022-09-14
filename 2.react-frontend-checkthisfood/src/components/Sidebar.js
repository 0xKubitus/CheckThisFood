import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData";
import logo from '../assets/images/Logoctf.png';

function Sidebar() {
  return (
    <div className="Sidebar">
      <img src={logo} width={250} height={250} alt="Logo"/>;
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