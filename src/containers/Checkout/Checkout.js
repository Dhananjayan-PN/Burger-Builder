import React, { useState } from "react";
import { TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import axios from "../../axios-orders";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Checkout.css";

const Checkout = (props) => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [building, setBuilding] = useState("");
  const [street, setStreet] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [country, setCoutry] = useState("");

  const handleClose = () => {
    setLoading(false);
    setSuccess(false);
    setFailure(false);
  };

  const handleOrder = (orderString, price) => {
    setLoading(true);
    const order = {
      ingrediants: { lettuce: props.location.data.lettuce, cheese: props.location.data.cheese, meat: props.location.data.meat },
      orderString: orderString,
      price: price,
      customer: {
        name: name,
        email: email,
        address: {
          builing: building,
          street: street,
          pinCode: pinCode,
          country: country
        }
      }
    };
    axios
      .post("/orders.json", order)
      .then((response) => {
        setLoading(false);
        if (response.status === 200) {
          setSuccess(true);
        } else {
          console.log(response);
          setFailure(true);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setFailure(true);
      });
  };

  return (
    <div className="Checkout">
      <h2 id="chk-heading">Place Order</h2>
      <h3 id="chk-content">Order: {props.location.data?.orderString ?? "No Order"}</h3>
      <h3 id="chk-content">Total Price: ${props.location.data?.price ?? 0}</h3>
      <TextField
        onChange={(e) => setName(e.target.value)}
        color="secondary"
        required
        style={{ display: "inline-block", marginTop: 20, marginRight: 20 }}
        label="Name"
      />
      <TextField
        onChange={(e) => setEmail(e.target.value)}
        color="secondary"
        required
        style={{ display: "inline-block", marginTop: 20, marginRight: 20 }}
        label="Email"
      />
      <TextField
        onChange={(e) => setBuilding(e.target.value)}
        color="secondary"
        required
        style={{ display: "inline-block", marginTop: 20 }}
        label="Building"
      />
      <TextField
        onChange={(e) => setStreet(e.target.value)}
        color="secondary"
        required
        fullWidth
        style={{ display: "block", marginTop: 20, marginRight: 100 }}
        label="Street"
      />
      <TextField
        onChange={(e) => setPinCode(e.target.value)}
        color="secondary"
        required
        style={{ display: "inline-block", marginTop: 20, marginRight: 20 }}
        label="Pin Code"
      />
      <TextField
        onChange={(e) => setCoutry(e.target.value)}
        color="secondary"
        required
        style={{ display: "inline-block", marginTop: 20, marginBottom: 20 }}
        label="Country"
      />
      <br></br>
      <div className="buttonGroup">
        <Button
          onClick={() => {
            props.history.push("/");
          }}
          style={{ marginTop: 40, marginRight: 25, display: "inline-block" }}
          id="checkout-button"
          variant="outlined"
          color="default"
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            handleOrder(props.location.data?.orderString, props.location.data?.price);
          }}
          disabled={
            props.location.data === null ||
            props.location.data === undefined ||
            name === "" ||
            email === "" ||
            building === "" ||
            street === "" ||
            pinCode === "" ||
            country === ""
          }
          style={{ marginTop: 40, display: "inline-block" }}
          id="checkout-button"
          variant="outlined"
          color="secondary"
        >
          Place Order
        </Button>
        <Dialog open={loading}>
          <CircularProgress style={{ padding: "50px" }} color="secondary" />
        </Dialog>
        <Dialog open={success} onClose={handleClose}>
          <DialogTitle id="responsive-dialog-title">Order Placed</DialogTitle>
          <DialogContent>
            <DialogContentText>Your order was successfully placed! Bon Apetit!</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => {
                handleClose();
                props.history.push("/orders");
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
            <DialogContentText>Somthing went wrong! Try again later</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              autoFocus
              onClick={() => {
                handleClose();
                props.history.push("/");
              }}
              color="secondary"
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default Checkout;
