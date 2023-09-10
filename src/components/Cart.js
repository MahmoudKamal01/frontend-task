import { useCart } from "../path-to-CartContext";

const Cart = () => {
  const { cartItems, clearCart } = useCart();

  return (
    <div className="cart-dropdown">
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
      <button onClick={clearCart}>Clear</button>
    </div>
  );
};

export default Cart;
