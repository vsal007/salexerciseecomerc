import { useState } from "react";

function Checkout({ cart, placeOrder, backToCart }) {
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [shipping, setShipping] = useState("Free");

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const delivery = shipping === "Express" ? 9 : 0;

  const grandTotal = subtotal + delivery;

  function handleChange(e) {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    placeOrder({
      customer,
      cart,
      shipping,
      subtotal,
      delivery,
      grandTotal,
    });
  }

  return (
    <div>
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="firstName"
          placeholder="First Name"
          value={customer.firstName}
          onChange={handleChange}
          required
        />

        <input
          name="lastName"
          placeholder="Last Name"
          value={customer.lastName}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={customer.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={customer.phone}
          onChange={handleChange}
          required
        />

        <textarea
          name="address"
          placeholder="Address"
          value={customer.address}
          onChange={handleChange}
          required
        />

        <h3>Shopping Method</h3>

        <label>
          <input
            type="radio"
            value="Free"
            checked={shipping === "Free"}
            onChange={(e) => setShipping(e.target.value)}
          />
          Free Shipping - $0
        </label>

        <br />

        <label>
          <input
            type="radio"
            value="Express"
            checked={shipping === "Express"}
            onChange={(e) => setShipping(e.target.value)}
          />
          Express Shipping - $9
        </label>

        <h3>Order Summary</h3>

        {cart.map((item) => (
          <p key={item.id}>
            {item.name} x {item.qty} = $
            {(item.price * item.qty).toFixed(2)}
          </p>
        ))}

        <p>Subtotal: ${subtotal.toFixed(2)}</p>

        <p>Delivery: ${delivery.toFixed(2)}</p>

        <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>

        <button type="submit">
          Place Order
        </button>

        <button type="button" onClick={backToCart}>
          Back to Cart
        </button>
      </form>
    </div>
  );
}

export default Checkout;
