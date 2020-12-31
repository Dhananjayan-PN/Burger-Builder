import React, { useState, useEffect } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import { Dialog } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Orders.css";

const Orders = (props) => {
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
    return Object.keys(orders).map((key) => <Order key={key} {...orders[key]} />);
  };

  return (
    <div className="Orders">
      {orders === null ? null : renderOrders()}
      <Dialog open={loading}>
        <CircularProgress style={{ padding: "50px" }} color="secondary" />
      </Dialog>
    </div>
  );
};

export default Orders;
