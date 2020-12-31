import { Route, Switch } from "react-router-dom";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="Layout">
      <Route path="/" component={Navbar} />
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/orders" render={() => <h1>Orders Page</h1>} />
        <Route path="/checkout" render={() => <h1>Checkout Page</h1>} />
        <Route render={() => <h1>404 Page Not Found!</h1>} />
      </Switch>
    </div>
  );
};

export default Layout;
