import React, { useStaate } from "react";
import { TextField, Button } from "@material-ui/core";
import "./Checkout.css";

const Checkout = (props) => {
  console.log(props);
  return (
    <div className="Checkout">
      <h2 id="chk-heading">Place Order</h2>
      <h3 id="chk-content">Order: {props.location.data?.orderString ?? "No Order"}</h3>
      <h3 id="chk-content">Total Price: ${props.location.data?.price ?? 0}</h3>
      <TextField color="secondary" required style={{ display: "inline-block", marginTop: 20, marginRight: 20 }} label="Name" />
      <TextField color="secondary" required style={{ display: "inline-block", marginTop: 20, marginRight: 20 }} label="Email" />
      <TextField color="secondary" required style={{ display: "inline-block", marginTop: 20 }} label="Building" />
      <TextField color="secondary" required fullWidth style={{ display: "block", marginTop: 20, marginRight: 100 }} label="Street" />
      <TextField color="secondary" required style={{ display: "inline-block", marginTop: 20, marginRight: 20 }} label="Pin Code" />
      <TextField color="secondary" required style={{ display: "inline-block", marginTop: 20, marginBottom: 20 }} label="Country" />
      <br></br>
      <div class="buttonGroup">
        <Button style={{ marginTop: 40, marginRight: 30, display: "inline-block" }} id="checkout-button" variant="outlined" color="default">
          Cancel
        </Button>
        <Button style={{ marginTop: 40, display: "inline-block" }} id="checkout-button" variant="outlined" color="secondary">
          Place Order
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
