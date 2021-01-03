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
      <NavLink to="/" exact id="links" style={{ color: "#9e9e9e" }} activeStyle={{ color: "#f50057" }}>
        Builder
      </NavLink>
      <NavLink to="/orders" id="links" style={{ color: "#9e9e9e" }} activeStyle={{ color: "#f50057" }}>
        Orders
      </NavLink>
      <NavLink to="/signup" id="acc-links" style={{ color: "#9e9e9e", marginRight: 45 }} activeStyle={{ color: "#f50057" }}>
        Sign Up
      </NavLink>
      <NavLink to="/login" id="acc-links" style={{ color: "#9e9e9e" }} activeStyle={{ color: "#f50057" }}>
        Log In
      </NavLink>
      <IconButton onClick={toggleDrawer} id="menu-icon-button" aria-label="menu">
        <MenuIcon id="menu-icon" />
      </IconButton>
      <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer}>
        <NavLink to="/" exact id="logo-menu" onClick={toggleDrawer}>
          Burger Builder
        </NavLink>
        <Divider />
        <NavLink to="/" exact id="links-menu" onClick={toggleDrawer} style={{ color: "#9e9e9e" }} activeStyle={{ color: "#f50057" }}>
          Builder
        </NavLink>
        <NavLink to="/orders" id="links-menu" onClick={toggleDrawer} style={{ color: "#9e9e9e" }} activeStyle={{ color: "#f50057" }}>
          Orders
        </NavLink>
      </Drawer>
    </div>
  );
};

export default Navbar;
