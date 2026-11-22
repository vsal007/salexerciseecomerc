import Laptop from "../assets/Laptop.jpg";
import Mouse from "../assets/Mouse.jpg";
import Keyboard from "../assets/Keyboard.jpg";
import Monitor from "../assets/Monitor.jpg";

const products = [
  { id: 1, name: "Laptop", price: 650, image: Laptop },
  { id: 2, name: "Mouse", price: 15, image: Mouse },
  { id: 3, name: "Keyboard", price: 25, image: Keyboard },
  { id: 4, name: "Monitor", price: 120, image: Monitor },
];

function ProductList({ addToCart }) {
  return (
    <div>
      <h2>Our Products</h2>

      <div className="products">
        {products.map((product) => (
          <div className="product" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <h3>{product.name}</h3>

            <p>${product.price}</p>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
