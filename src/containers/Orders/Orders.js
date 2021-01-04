import React, { useState, useEffect } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import { Dialog } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Orders.css";
import Cookies from "js-cookie";
import { Redirect } from "react-router";

const Orders = (props) => {
  const user = Cookies.getJSON("user");
  const [orders, setOrders] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("/orders.json").then((response) => {
      if (response.status === 200) {
        setOrders(response.data);
      }
    });
    setLoading(false);
  }, []);

  const renderOrders = () => {
    const ordersComponents = Object.keys(orders).map((key) =>
      orders[key].customer.email === user.email ? <Order key={key} {...orders[key]} /> : null
    );
    if (ordersComponents.every((e) => e === null)) {
      return <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 300 }}>No Orders</h2>;
    } else {
      return ordersComponents;
    }
  };

  return (
    <div className="Orders">
      {user === null || user === undefined ? <Redirect to="/login" /> : null}
      {orders === null ? <h2 style={{ textAlign: "center", fontSize: 28, fontWeight: 300 }}>No Orders</h2> : renderOrders()}
      <Dialog open={loading}>
        <CircularProgress style={{ padding: "50px" }} color="secondary" />
      </Dialog>
    </div>
  );
};

export default Orders;
