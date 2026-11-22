import { useState } from "react";

import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import OrderConfirmation from "./components/OrderConfirmation";

import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState("home");
  const [order, setOrder] = useState(null);

  function addToCart(product) {
    const existing = cart.find(
      (item) => item.id === product.id
    );

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  }

  function updateQty(id, amount) {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? { ...item, qty: item.qty + amount }
            : item
        )
        .filter((item) => item.qty > 0)
    );
  }

  function removeItem(id) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  }

  function placeOrder(data) {
    setOrder({
      ...data,
      id: "ORD-0001",
      date: new Date().toLocaleDateString(),
    });

    setCart([]);
    setPage("confirmation");
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.qty,
    0
  );

  return (
    <div className="app">

      <header className="header">
        <div className="header-inner">

          <div className="brand">
            <span className="brand-icon">V</span>
            <span>VISAL EXERCISE</span>
          </div>

          <nav className="navigation">
            <button
              className={page === "home" ? "nav-active" : ""}
              onClick={() => setPage("home")}
            >
              Products
            </button>

            <button
              className={page === "cart" ? "nav-active" : ""}
              onClick={() => setPage("cart")}
            >
              Cart <span className="cart-count">{cartCount}</span>
            </button>
          </nav>

        </div>
      </header>

      <main className="main-content">

        {page === "home" && (
          <>
            <div className="page-heading">
              <p className="eyebrow">WELCOME TO OUR STORE</p>
              <h1>Find Your Perfect Products</h1>
              <p>Simple shopping. Quality products. Great prices.</p>
            </div>

            <ProductList addToCart={addToCart} />
          </>
        )}

        {page === "cart" && (
          <ShoppingCart
            cart={cart}
            updateQty={updateQty}
            removeItem={removeItem}
            goCheckout={() => setPage("checkout")}
          />
        )}

        {page === "checkout" && (
          <Checkout
            cart={cart}
            placeOrder={placeOrder}
            backToCart={() => setPage("cart")}
          />
        )}

        {page === "confirmation" && (
          <OrderConfirmation
            order={order}
            backHome={() => setPage("home")}
          />
        )}

      </main>

      <footer className="footer">
        © 2026 VISAL EXERCISE. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
