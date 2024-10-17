import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import TopSlider from "../components/TopSlider";
import heading1 from "../images/Heading 1 → Shopping Cart.png";
import heading2 from "../images/Background+Shadow(cart).png";
import { Link } from "react-router-dom";

const ShoppingCart = () => {
  const { cartItems, addToCart, lessQuantityToCart, removeItemFromCart } =
    useContext(CartContext);

  const shippingCost = 20.0;
  const itemsPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const itemsQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <TopSlider image1={heading1} image2={heading2} />

      <div className="shopping-cart flex flex-col lg:flex-row justify-between gap-10 p-6 w-[90%]">
        {/* Cart Items Section */}
        <div className="cart-items flex-1">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">Shopping Cart</h2>
            <div className="font-semibold text-lg">
              ({cartItems.length} Items)
            </div>
          </div>
          <hr className="mb-4" />
          <div className="flex h-10 gap-10 items-center">
            <h1 className="font-semibold w-1/3 ">Product Details</h1>
            <h1 className="font-semibold w-20">Price</h1>
            <h1 className="font-semibold w-32">Quantity</h1>
            <h1 className="font-semibold ">Total</h1>
          </div>
          <hr className="mb-4" />

          {cartItems.map((item) => (
            <div key={item.id} className="cart-item gap-14">
              <div className="flex gap-5 items-center w-3/5 ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-fill bg-pink-100 p-2"
                />
                <div>
                  <h3 className="item-details font-bold text-pink-500">
                    {item.name}
                  </h3>
                </div>
              </div>
              <div className="item-price w-20 font-semibold">
                ${item.price.toFixed(2)}
              </div>

              <div className="w-36 flex justify-center items-center">
                <button
                  className="font-semibold border rounded-l-large px-2 h-8 w-8 "
                  onClick={() => lessQuantityToCart(item.id)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="font-semibold border px-2 h-8 w-12  flex justify-center items-center">
                  {item.quantity}
                </span>
                <button
                  className="font-semibold border px-2 rounded-r-large h-8 w-8"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
              {/* Total Price */}
              <div className="w-1/5 text-center font-semibold">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button
                className="text-red-500 font-bold ml-4 border rounded-full p-3"
                onClick={() => removeItemFromCart(item.id)}
              >
                X
              </button>
            </div>
          ))}
          <Link to={"/shop"}>
            <span className="text-red-700 font-bold">← Continue Shopping</span>
          </Link>
        </div>

        <div className="order-summary bg-white shadow-md rounded-large p-6 w-2/6 mx-auto h-1/2">
          <h3 className="font-bold text-lg text-center mb-4">Order Summary</h3>

          <hr className="mb-4" />

          <div className="text-sm mb-2 font-semibold">Product Details:</div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-400">Sub Total</span>
            <span className="font-bold">${itemsPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-gray-400">Shipping</span>
            <span className="font-bold">${shippingCost.toFixed(2)}</span>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Grand Total</span>
            <span className="text-pink-600">
              ${(itemsPrice + shippingCost).toFixed(2)}
            </span>
          </div>
          <Link to={"/checkout"}>
            <button className="bg-pink-500 hover:bg-pink-600 text-white text-center py-3 rounded-3xl w-full font-semibold flex justify-center items-center">
              Proceed to checkout <span className="ml-2">→</span>
            </button>
          </Link>

          <div className="mt-4 text-gray-500 text-center text-xs flex items-center justify-center">
            🛡️ Safe and Secure Payments, Easy Returns. 100% Authentic Products
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
