import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { IconButton, Drawer, Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import Cookies from "js-cookie";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const [user, setUser] = useState(null);
  const toggleDrawer = () => setDrawer(!drawer);

  useEffect(() => {
    setUser(Cookies.getJSON("user"));
  }, []);

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
      {user === null || user === undefined ? (
        [
          <NavLink to="/signup" key="singup" id="acc-links" style={{ color: "#9e9e9e", marginRight: 45 }} activeStyle={{ color: "#f50057" }}>
            Sign Up
          </NavLink>,
          <NavLink to="/login" key="login" id="acc-links" style={{ color: "#9e9e9e" }} activeStyle={{ color: "#f50057" }}>
            Log In
          </NavLink>
        ]
      ) : (
        <NavLink to="/profile" id="acc-links" style={{ color: "#9e9e9e", marginRight: 50 }} activeStyle={{ color: "#f50057" }}>
          {user.displayName}
        </NavLink>
      )}
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
