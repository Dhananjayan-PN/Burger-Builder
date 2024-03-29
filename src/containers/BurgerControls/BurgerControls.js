import React, { useState, useEffect } from "react";
import "./BurgerControls.css";
import { Switch, Button } from "@material-ui/core";
import { withRouter } from "react-router-dom";

const BurgerControls = (props) => {
  const [orderString, setOrderString] = useState("");
  const [price, setPrice] = useState(0);

  const handleCheckout = () => {
    props.history.push({
      pathname: "/checkout",
      data: {
        lettuce: props.lettuce,
        cheese: props.cheese,
        meat: props.meat,
        price: price,
        orderString: orderString
      }
    });
  };

  useEffect(() => {
    let newString = "1 x Burger with ";
    let newPrice = 0;
    let trues = [];
    if (props.lettuce) {
      trues.push("Lettuce");
      newPrice += props.prices.lettucePrice;
    }
    if (props.cheese) {
      trues.push("Cheese");
      newPrice += props.prices.cheesePrice;
    }
    if (props.meat) {
      trues.push("Meat");
      newPrice += props.prices.meatPrice;
    }
    for (let i = 0; i < trues.length; i++) {
      if (i !== 0) {
        newString += ", ";
      }
      newString += trues[i];
    }
    setOrderString(newString);
    setPrice(newPrice);
  }, [props.prices.lettucePrice, props.prices.cheesePrice, props.prices.meatPrice, props.lettuce, props.cheese, props.meat]);

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
        onClick={handleCheckout}
        id="checkout-button"
        variant="outlined"
        color="secondary"
      >
        Checkout
      </Button>
    </div>
  );
};

export default withRouter(BurgerControls);
