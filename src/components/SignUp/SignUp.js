import React, { useState } from "react";
import "./SignUp.css";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

const SignUp = (props) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Somthing went wrong! Try again later");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const signUpEndpoint = "accounts:signUp?key=AIzaSyDj7fGfYjQQDBvZkybj2h2MDY4AMP5BBlI";
  const updateAccEndpoint = "accounts:update?key=AIzaSyDj7fGfYjQQDBvZkybj2h2MDY4AMP5BBlI";

  const handleClose = () => {
    setLoading(false);
    setSuccess(false);
    setFailure(false);
    setErrorMessage("Somthing went wrong! Try again later");
  };

  const SignUpRequest = () => {
    setLoading(true);
    fetch("https://identitytoolkit.googleapis.com/v1/" + signUpEndpoint, {
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
        if (data.error !== undefined) {
          if (data.error.message === "EMAIL_EXISTS") {
            setErrorMessage("The provided email is already registered! Log in or use a different email.");
          }
          setLoading(false);
          setName("");
          setEmail("");
          setPassword("");
          setConfPassword("");
          setFailure(true);
        } else {
          fetch("https://identitytoolkit.googleapis.com/v1/" + updateAccEndpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ idToken: data.idToken, displayName: name, returnSecureToken: true })
          })
            .then((resp) => {
              if (resp.ok) {
                setLoading(false);
                setName("");
                setEmail("");
                setPassword("");
                setConfPassword("");
                setSuccess(true);
              } else {
                setLoading(false);
                setName("");
                setEmail("");
                setPassword("");
                setConfPassword("");
                setFailure(true);
              }
            })
            .catch((err) => {
              setLoading(false);
              setName("");
              setEmail("");
              setPassword("");
              setConfPassword("");
              setFailure(true);
            });
        }
      })
      .catch((err) => {
        setLoading(false);
        setName("");
        setEmail("");
        setPassword("");
        setConfPassword("");
        setFailure(true);
      });
  };

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
        helperText={password.length < 6 && password !== "" ? "Password too short" : ""}
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
        helperText={confPassword !== "" && confPassword !== password ? "Passwords don't match" : ""}
        color="secondary"
        required
        style={{ width: "75%", display: "block", marginTop: 25, marginRight: "auto", marginLeft: "auto" }}
        label="Confirm Password"
      />
      <Button
        onClick={SignUpRequest}
        disabled={email === "" || password === "" || confPassword === "" || password !== confPassword || password.length < 6}
        style={{ marginTop: 50, marginRight: "auto", marginLeft: "auto", display: "block" }}
        id="checkout-button"
        variant="outlined"
        color="secondary"
      >
        Sign UP
      </Button>
      <Dialog open={loading}>
        <CircularProgress style={{ padding: "50px" }} color="secondary" />
      </Dialog>
      <Dialog open={success} onClose={handleClose}>
        <DialogTitle id="responsive-dialog-title">Account Created</DialogTitle>
        <DialogContent>
          <DialogContentText>Your account was successfully created! Log In!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={() => {
              handleClose();
              props.history.push("/login");
            }}
            color="secondary"
          >
            Ok
          </Button>
        </DialogActions>
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

export default SignUp;
