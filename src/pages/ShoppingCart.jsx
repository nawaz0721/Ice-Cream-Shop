import React, { useState } from "react";

const ShoppingCart = () => {
  // Sample data based on the image
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Vanilla",
      color: "White",
      size: "L",
      price: 4.99,
      quantity: 3,
      image: "vanilla.png",
    },
    {
      id: 2,
      name: "Chocolate Brownie",
      color: "Brown",
      size: "S",
      price: 5.49,
      quantity: 6,
      image: "brownie.png",
    },
  ]);

  const shippingCost = 20.0;

  // Helper function to calculate subtotal
  const calculateSubTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  // Helper function to handle quantity change
  const handleQuantityChange = (id, delta) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(item.quantity + delta, 1) } // Ensures quantity doesn't go below 1
        : item
    );
    setCartItems(updatedCartItems);
  };

  // Helper function to remove item
  const handleRemoveItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  return (
    <div className="shopping-cart flex justify-around w-[80%]">
      <div className="cart-items">
        <h2>Shopping Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Color: {item.color}</p>
              <p>Size: {item.size}</p>
            </div>
            <div className="item-price">${item.price.toFixed(2)}</div>
            <div className="item-quantity">
              <button onClick={() => handleQuantityChange(item.id, -1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>
                +
              </button>
            </div>
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
            <button
              className="remove-item"
              onClick={() => handleRemoveItem(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-details">
          <p>Sub Total: ${calculateSubTotal()}</p>
          <p>Shipping: ${shippingCost.toFixed(2)}</p>
          <p>
            <strong>
              Grand Total: $
              {(parseFloat(calculateSubTotal()) + shippingCost).toFixed(2)}
            </strong>
          </p>
        </div>
        <button className="checkout-button">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default ShoppingCart;
