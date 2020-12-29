import React, { useState } from "react";
import "./Navbar.css";
import { IconButton, Drawer, Divider } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const Navbar = () => {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer(!drawer);

  return (
    <div className="Navbar">
      <a href="/" id="logo">
        Burger Builder
      </a>
      <a
        style={{ color: window.location.href.split("/")[window.location.href.split("/").length - 1] === "builder" ? "#f50057" : "#9e9e9e" }}
        href="/builder"
        id="links"
      >
        Builder
      </a>
      <a
        style={{ color: window.location.href.split("/")[window.location.href.split("/").length - 1] === "orders" ? "#f50057" : "#9e9e9e" }}
        href="/orders"
        id="links"
      >
        Orders
      </a>
      <IconButton onClick={toggleDrawer} id="menu-icon-button" aria-label="menu">
        <MenuIcon id="menu-icon" />
      </IconButton>
      <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer}>
        <a href="/" id="logo-menu">
          Burger Builder
        </a>
        <Divider />
        <a
          style={{ color: window.location.href.split("/")[window.location.href.split("/").length - 1] === "builder" ? "#f50057" : "#9e9e9e" }}
          href="/builder"
          id="links-menu"
        >
          Builder
        </a>
        <a
          style={{ color: window.location.href.split("/")[window.location.href.split("/").length - 1] === "orders" ? "#f50057" : "#9e9e9e" }}
          href="/orders"
          id="links-menu"
        >
          Orders
        </a>
      </Drawer>
    </div>
  );
};

export default Navbar;
