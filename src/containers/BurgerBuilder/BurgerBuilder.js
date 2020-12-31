import React, { useState, useEffect } from "react";
import "./BurgerBuilder.css";
import { Dialog } from "@material-ui/core";
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

  return (
    <div className="BurgerBuilder">
      <Burger {...ingrediants} />
      <BurgerControls
        {...ingrediants}
        prices={{ lettucePrice, cheesePrice, meatPrice }}
        changeLettuce={changeLettuce}
        changeCheese={changeCheese}
        changeMeat={changeMeat}
      />
      <Dialog open={loading}>
        <CircularProgress style={{ padding: "50px" }} color="secondary" />
      </Dialog>
    </div>
  );
};

export default BurgerBuilder;
