import { Route, Switch } from "react-router-dom";
import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import Navbar from "../Navbar/Navbar";
import Checkout from "../../containers/Checkout/Checkout";
import Orders from "../../containers/Orders/Orders";
import SignUp from "../SignUp/SignUp";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="Layout">
      <Route path="/" component={Navbar} />
      <Switch>
        <Route path="/" exact component={BurgerBuilder} />
        <Route path="/orders" component={Orders} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route render={() => <h1>404 Page Not Found!</h1>} />
      </Switch>
    </div>
  );
};

export default Layout;
