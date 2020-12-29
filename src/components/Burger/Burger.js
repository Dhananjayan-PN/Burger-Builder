import "./Burger.css";
import burgertop from "../../assets/bun-top.png";
import burgerbottom from "../../assets/bun-bottom.png";
import burgerpatty from "../../assets/burger-patty.png";
import burgercheese from "../../assets/burger-cheese.png";
import burgerlettuce from "../../assets/burger-lettuce.png";

const Burger = (props) => {
  return (
    <div className="Burger">
      <div className="column">
        <img id="burgertop" src={burgertop} alt="bun"></img>
        {props.lettuce ? <img id="burgerlettuce" src={burgerlettuce} alt="lettuce"></img> : null}
        {props.cheese ? <img id="burgercheese" src={burgercheese} alt="cheese"></img> : null}
        {props.meat ? <img id="burgerpatty" src={burgerpatty} alt="meat"></img> : null}
        <img id="burgerbottom" src={burgerbottom} alt="bun"></img>
      </div>
    </div>
  );
};

export default Burger;
