import React, { useState, useEffect } from "react";
import "./BurgerBuilder.css";
import { Dialog, Button, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../BurgerControls/BurgerControls";
import axios from "../../axios-orders";

const BurgerBuilder = () => {
  const [lettuce, setLettuce] = useState(false);
  const [cheese, setCheese] = useState(false);
  const [meat, setMeat] = useState(false);
  const [lettucePrice, setLettucePrice] = useState(0);
  const [cheesePrice, setCheesePrice] = useState(0);
  const [meatPrice, setMeatPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const ingrediants = { lettuce, cheese, meat };

  useEffect(() => {
    setLoading(true);
    axios.get("/ingrediant-costs.json").then((response) => {
      if (response.status === 200) {
        setLettucePrice(response.data.lettuce);
        setCheesePrice(response.data.cheese);
        setMeatPrice(response.data.meat);
      }
    });
    setLoading(false);
  }, []);

  const changeLettuce = () => setLettuce(!lettuce);
  const changeCheese = () => setCheese(!cheese);
  const changeMeat = () => setMeat(!meat);

  const handleClose = () => {
    setLoading(false);
    setSuccess(false);
    setFailure(false);
  };

  const handleCheckout = (orderString, price) => {
    setLoading(true);
    const order = {
      ingrediants: ingrediants,
      orderString: orderString,
      price: price,
      customer: {
        name: "Dhananjayan P N",
        address: {
          house: "NCC Urban Green Province",
          street: "Sarjapur Road",
          pinCode: "562125",
          country: "India"
        },
        email: "pndjay@gmail.com"
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
    <div className="BurgerBuilder">
      <Burger {...ingrediants} />
      <BurgerControls
        {...ingrediants}
        prices={{ lettucePrice, cheesePrice, meatPrice }}
        checkout={handleCheckout}
        changeLettuce={changeLettuce}
        changeCheese={changeCheese}
        changeMeat={changeMeat}
      />
      <Dialog open={loading}>
        <CircularProgress style={{ padding: "50px" }} color="secondary" />
      </Dialog>
      <Dialog open={success} onClose={handleClose}>
        <DialogTitle id="responsive-dialog-title">Order Placed</DialogTitle>
        <DialogContent>
          <DialogContentText>Your order was successfully placed! Bon Apetit!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="secondary">
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
          <Button autoFocus onClick={handleClose} color="secondary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default BurgerBuilder;
