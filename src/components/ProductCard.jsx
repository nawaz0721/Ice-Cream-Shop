import React from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { name, description, price, rating, imgUrl, id } = product;

  return (
    <Link to={`/shop/${id}`}>
      <div className="bg-white h-[65vh] rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative bg-pink-200 border-solid border-2 border-pink-500 h-[55%] rounded-lg">
          <button className="absolute top-2 right-2 p-2 rounded-full bg-red-500 hover:bg-gray-200 text-white hover:text-red-500">
            <FaHeart size={20} />
          </button>
          <div className="flex justify-center items-center">
            <img src={imgUrl} alt={name} className="" />
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <div className="flex items-center mb-2">
            <span className="text-yellow-400">⭐</span>
            <span className="ml-2 text-sm text-gray-600">{rating}</span>
          </div>
          <p className="text-gray-600 text-sm mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-pink-500">${price}</span>
            <button className="bg-purple-500 text-white p-2 rounded-full hover:bg-purple-600">
              <FaShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
