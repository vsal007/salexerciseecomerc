function ShoppingCart({
  cart,
  updateQty,
  removeItem,
  goCheckout
}) {
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <h3>{item.name}</h3>

          <p>Price: ${item.price}</p>

          <button
            onClick={() => updateQty(item.id, -1)}
          >
            -
          </button>

          <span> {item.qty} </span>

          <button
            onClick={() => updateQty(item.id, 1)}
          >
            +
          </button>

          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>

          <p>Subtotal: ${item.price * item.qty}</p>
        </div>
      ))}

      <h3>Grand Total: ${subtotal.toFixed(2)}</h3>

      <button
        onClick={goCheckout}
        disabled={cart.length === 0}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default ShoppingCart;
