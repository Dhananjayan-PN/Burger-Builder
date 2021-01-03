import React, { useState } from "react";
import "./SignUp.css";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  return (
    <div className="SignUp">
      <h2 id="chk-heading">Sign Up</h2>
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
      <TextField
        fullWidth
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
        onClick={() => {}}
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
