import "./Order.css";

const Order = (props) => {
  return (
    <div className="Order">
      <h2 className="order-string">
        {props.orderString} - ${props.price}
      </h2>
      <h2 className="order-by">{props.customer.name}</h2>
    </div>
  );
};
export default Order;
