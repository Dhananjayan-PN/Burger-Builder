import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IconButton, Drawer, Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer(!drawer);

  return (
    <div className="Navbar">
      <NavLink to="/" exact id="logo">
        Burger Builder
      </NavLink>
      <NavLink to="/" exact id="links" activeStyle={{ color: "#f50057" }}>
        Builder
      </NavLink>
      <NavLink to="/orders" id="links" activeStyle={{ color: "#f50057" }}>
        Orders
      </NavLink>
      <IconButton onClick={toggleDrawer} id="menu-icon-button" aria-label="menu">
        <MenuIcon id="menu-icon" />
      </IconButton>
      <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer}>
        <NavLink to="/" id="logo-menu">
          Burger Builder
        </NavLink>
        <Divider />
        <NavLink to="/builder" id="links-menu">
          Builder
        </NavLink>
        <NavLink to="/orders" id="links-menu">
          Orders
        </NavLink>
      </Drawer>
    </div>
  );
};

export default Navbar;
