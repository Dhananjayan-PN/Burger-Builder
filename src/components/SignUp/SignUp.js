import React, { useState } from "react";
import "./SignUp.css";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";

const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  return (
    <div className="SignUp">
      <h2 id="chk-heading">Sign Up</h2>
      <TextField
        id="name"
        fullWidth
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        color="secondary"
        required
        style={{ width: "75%", display: "block", marginTop: 35, marginRight: "auto", marginLeft: "auto" }}
        label="Name"
      />
      <TextField
        id="email"
        fullWidth
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        color="secondary"
        required
        style={{ width: "75%", display: "block", marginTop: 25, marginRight: "auto", marginLeft: "auto" }}
        label="Email"
      />
      <TextField
        fullWidth
        value={password}
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        color="secondary"
        required
        style={{ width: "75%", display: "block", marginTop: 25, marginRight: "auto", marginLeft: "auto" }}
        label="Password"
      />
      <TextField
        fullWidth
        type="password"
        value={confPassword}
        onChange={(e) => {
          setConfPassword(e.target.value);
        }}
        color="secondary"
        required
        style={{ width: "75%", display: "block", marginTop: 25, marginRight: "auto", marginLeft: "auto" }}
        label="Confirm Password"
      />
      <Button
        onClick={() => {
          console.log(name, email, password);
        }}
        style={{ marginTop: 50, marginRight: "auto", marginLeft: "auto", display: "block" }}
        id="checkout-button"
        variant="outlined"
        color="secondary"
      >
        Sign UP
      </Button>
    </div>
  );
};

export default SignUp;
