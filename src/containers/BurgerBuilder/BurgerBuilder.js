import React, { useState } from "react";
import "./BurgerBuilder.css";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../BurgerControls/BurgerControls";

const BurgerBuilder = () => {
  const [lettuce, setLettuce] = useState(false);
  const [cheese, setCheese] = useState(false);
  const [meat, setMeat] = useState(false);
  const ingrediants = { lettuce, cheese, meat };

  const changeLettuce = () => setLettuce(!lettuce);
  const changeCheese = () => setCheese(!cheese);
  const changeMeat = () => setMeat(!meat);

  return (
    <div className="BurgerBuilder">
      <Burger {...ingrediants} />
      <BurgerControls {...ingrediants} changeLettuce={changeLettuce} changeCheese={changeCheese} changeMeat={changeMeat} />
    </div>
  );
};

export default BurgerBuilder;
