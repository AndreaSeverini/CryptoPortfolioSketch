import React from "react";
import { NavLink } from "react-router-dom";

import "./usermenu.css";
const Menu = () => {
  return (
    <>
      <p>
        <NavLink to="/home">Home</NavLink>
      </p>
      <p>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </p>
      {/* <p><a href='#portfolio'>Portfolio Management</a></p> */}
      {/* <p><a href='#features'>Bots</a></p>
                <p><a href='#blog'>Library</a></p> */}
    </>
  );
};

export default Menu;
