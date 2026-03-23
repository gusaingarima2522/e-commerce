import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt="" />

            <div className="details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>

              <div className="qty-controls">
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))
      )}

      <hr />

      <h2>Total: ₹{total}</h2>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
}

export default Cart;
