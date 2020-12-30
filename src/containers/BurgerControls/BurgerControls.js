import React, { useState, useEffect } from "react";
import "./BurgerControls.css";
import { Switch, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";

const BurgerControls = (props) => {
  const [open, setOpen] = useState(false);
  const [orderString, setOrderString] = useState("");
  const [price, setPrice] = useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let newString = "1 x Burger with ";
    let newPrice = 0;
    let trues = [];
    if (props.lettuce) {
      trues.push("Lettuce");
      newPrice += 2;
    }
    if (props.cheese) {
      trues.push("Cheese");
      newPrice += 2;
    }
    if (props.meat) {
      trues.push("Meat");
      newPrice += 5;
    }
    for (let i = 0; i < trues.length; i++) {
      if (i !== 0) {
        newString += ", ";
      }
      newString += trues[i];
    }
    setOrderString(newString);
    setPrice(newPrice);
  }, [props.lettuce, props.cheese, props.meat]);

  return (
    <div className="BurgerControls">
      <h2 id="ctrl-heading">Customize Burger</h2>
      <div className="row">
        <h4 id="ctrl-name">Lettuce</h4>
        <Switch checked={props.lettuce} onChange={props.changeLettuce} />
      </div>
      <div className="row" style={{ marginLeft: 20 }}>
        <h4 id="ctrl-name">Cheese</h4>
        <Switch checked={props.cheese} onChange={props.changeCheese} />
      </div>
      <div className="row" style={{ marginLeft: 20 }}>
        <h4 id="ctrl-name">Meat</h4>
        <Switch checked={props.meat} onChange={props.changeMeat} />
      </div>
      <h3 id="ctrl-price">Price: ${price}</h3>
      <Button
        disabled={!props.lettuce && !props.cheese && !props.meat}
        onClick={handleClickOpen}
        id="checkout-button"
        variant="outlined"
        color="secondary"
      >
        Checkout
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="responsive-dialog-title">Confirm Order</DialogTitle>
        <DialogContent>
          <DialogContentText>{orderString}</DialogContentText>
          <DialogContentText>Would you like to place this order?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="secondary" autoFocus>
            PLACE ORDER
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BurgerControls;
