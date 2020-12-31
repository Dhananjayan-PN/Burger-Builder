import { BrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
      </div>
    </BrowserRouter>
  );
};

export default App;
