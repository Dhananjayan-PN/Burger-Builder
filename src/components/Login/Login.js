import React, { useState } from "react";
import "./Login.css";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Somthing went wrong! Try again later");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const logInEndpoint = "accounts:signInWithPassword?key=AIzaSyDj7fGfYjQQDBvZkybj2h2MDY4AMP5BBlI";

  const handleClose = () => {
    setLoading(false);
    setFailure(false);
    setErrorMessage("Somthing went wrong! Try again later");
  };

  const LoginRequest = () => {
    setLoading(true);
    fetch("https://identitytoolkit.googleapis.com/v1/" + logInEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        returnSecureToken: true
      })
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.error !== undefined) {
          if (data.error.message === "EMAIL_NOT_FOUND") {
            setErrorMessage("The provided email is not registered! Sign up or use a registered email.");
          }
          if (data.error.message === "INVALID_PASSWORD") {
            setErrorMessage("The provided password is incorrect! Enter the right password for this email.");
          }
          if (data.error.message === "INVALID_EMAIL") {
            setErrorMessage("The provided email is invalid! Enter a valid email to log in.");
          }
          setLoading(false);
          setEmail("");
          setPassword("");
          setFailure(true);
        } else {
          setLoading(false);
          setEmail("");
          setPassword("");
          Cookies.set("user", data);
          props.history.push("/");
        }
      });
  };

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
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        color="secondary"
        required
        style={{ width: "75%", display: "block", marginTop: 25, marginRight: "auto", marginLeft: "auto" }}
        label="Password"
      />
      <Button
        onClick={LoginRequest}
        style={{ marginTop: 50, marginRight: "auto", marginLeft: "auto", display: "block" }}
        id="checkout-button"
        variant="outlined"
        color="secondary"
      >
        Log IN
      </Button>
      <Dialog open={loading}>
        <CircularProgress style={{ padding: "50px" }} color="secondary" />
      </Dialog>
      <Dialog open={failure} onClose={handleClose}>
        <DialogTitle id="responsive-dialog-title">Error</DialogTitle>
        <DialogContent>
          <DialogContentText>{errorMessage}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              handleClose();
            }}
            color="secondary"
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Login;
