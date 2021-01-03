import React, { useState } from "react";
import "./Login.css";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="Login">
      <h2 id="chk-heading">Log In</h2>
      <TextField
        id="email"
        fullWidth
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        color="secondary"
        required
        style={{ width: "75%", display: "block", marginTop: 35, marginRight: "auto", marginLeft: "auto" }}
        label="Email"
      />
      <TextField
        fullWidth
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        color="secondary"
        required
        style={{ width: "75%", display: "block", marginTop: 25, marginRight: "auto", marginLeft: "auto" }}
        label="Password"
      />
      <Button
        onClick={() => {}}
        style={{ marginTop: 50, marginRight: "auto", marginLeft: "auto", display: "block" }}
        id="checkout-button"
        variant="outlined"
        color="secondary"
      >
        Log IN
      </Button>
    </div>
  );
};

export default Login;
