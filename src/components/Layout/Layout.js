import BurgerBuilder from "../../containers/BurgerBuilder/BurgerBuilder";
import Navbar from "../Navbar/Navbar";
import "./Layout.css";

const Layout = () => {
  return (
    <div className="Layout">
      <Navbar />
      <BurgerBuilder />
    </div>
  );
};

export default Layout;
