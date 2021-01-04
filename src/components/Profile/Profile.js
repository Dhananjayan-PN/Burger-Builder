import React, { useEffect, useState } from "react";
import "./Profile.css";
import { Button } from "@material-ui/core";
import Cookies from "js-cookie";
import { Redirect } from "react-router";

const Profile = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(Cookies.getJSON("user"));
  }, []);

  const signOut = () => {
    Cookies.remove("user");
    document.location.reload();
    props.history.push("/login");
  };

  return (
    <div className="Profile">
      <h2 id="chk-heading">Profile</h2>
      {user === undefined ? <Redirect to="/login" /> : null}
      {user !== null && user !== undefined
        ? [
            <h2 id="chk-content" key="name" style={{ textAlign: "center" }}>
              Name: {user.displayName}
            </h2>,
            <h2 id="chk-content" key="email" style={{ textAlign: "center" }}>
              Email: {user.email}
            </h2>
          ]
        : null}
      <Button
        onClick={signOut}
        style={{ marginTop: 30, marginRight: "auto", marginLeft: "auto", display: "block" }}
        id="checkout-button"
        variant="outlined"
        color="secondary"
      >
        SIGN OUT
      </Button>
    </div>
  );
};

export default Profile;
