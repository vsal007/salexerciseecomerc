function OrderConfirmation({ order, backHome }) {
  if (!order) return null;

  return (
    <div className="confirmation">
      <h1>Order Placed Successfully!</h1>

      <h3>Order Information</h3>

      <p>Order ID: {order.id}</p>

      <p>
        Customer Name: {order.customer.firstName}{" "}
        {order.customer.lastName}
      </p>

      <p>Order Date: {order.date}</p>

      <h3>Ordered Products</h3>

      {order.cart.map((item) => (
        <p key={item.id}>
          {item.name} x {item.qty}
        </p>
      ))}

      <h3>Total Amount: ${order.grandTotal.toFixed(2)}</h3>

      <p>Order Status: Pending</p>

      <button onClick={backHome}>
        Back to Home
      </button>
    </div>
  );
}

export default OrderConfirmation;
