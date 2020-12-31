import { Route } from "react-router-dom";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="Layout">
      <Route path="/" component={Navbar} />
      <Route path="/" exact component={BurgerBuilder} />
      <Route path="/orders" render={() => <h1>Orders Page</h1>} />
      <Route path="/checkout" render={() => <h1>Checkout Page</h1>} />
    </div>
  );
};

export default Layout;
