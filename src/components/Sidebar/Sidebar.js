import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import logo from 'assets/images/Logoctf.png'
import MenuIcon from '@mui/icons-material/Menu';

function Sidebar() {
  const[isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  return (
    <div style={{width: isOpen ? "250px" : "50px"}} className="Sidebar">
      <div style={{marginLeft: isOpen ? "0px" : "0px" }} className="bars">

        <MenuIcon onClick={toggle}/>
      </div>

      <img style={{display: isOpen ? "block" : "none"}} src={logo} width={250} height={250} alt="Logo"/>
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
          <div style={{display: isOpen ? "block" : "none"}} id="title">
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