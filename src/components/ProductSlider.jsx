import React from "react";
import Slider from "react-slick";
import {
  FaHeart,
  FaShoppingCart,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import product2 from "../images/Figure → classic-image2.png.png";
import product4 from "../images/Figure → classic-image4.png.png";
import product6 from "../images/Figure → seller-image2.png.png";
import product14 from "../images/popular-image2.png.png";
import product16 from "../images/flover-image1.png.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button";

// Sample products array
const products = [
  {
    id: 1,
    name: "Chocolate Brownie Sundae",
    description: "Rich chocolate ice cream with chunks of brownie.",
    price: 5.49,
    rating: 4.9,
    category: "Sundaes",
    image: product2,
  },
  {
    id: 4,
    name: "Chocolate Fudge Brownie",
    description: "Rich chocolate ice cream with chunks of fudge brownie.",
    price: 6.49,
    rating: 4.8,
    category: "Ice Cream Cakes",
    image: product4,
  },
  {
    id: 6,
    name: "Salted Caramel Crunch",
    description: "Caramel ice cream with a hint of sea salt and crunchy bits.",
    price: 6.79,
    rating: 4.6,
    category: "Ice Cream Pints",
    image: product6,
  },
  {
    id: 14,
    name: "Cookies and Cream",
    description: "Vanilla ice cream with chunks of chocolate cookies.",
    price: 5.89,
    rating: 4.8,
    category: "Ice Cream Pints",
    image: product14,
  },
  {
    id: 16,
    name: "Pistachio Dream",
    description: "Pistachio ice cream with roasted pistachio pieces.",
    price: 6.39,
    rating: 4.8,
    category: "Ice Cream Pints",
    image: product16,
  },
];

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-pink-500 p-2 rounded-full shadow-lg hover:bg-pink-600 transition"
    onClick={onClick}
  >
    <FaChevronRight size={20} color="white" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-pink-500 p-2 rounded-full shadow-lg hover:bg-pink-600 transition"
    onClick={onClick}
  >
    <FaChevronLeft size={20} color="white" />
  </button>
);

const ProductSlider = ({ mainheading, subtext }) => {
  const settings = {
    dots: false, // Removed dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Custom Next Arrow
    prevArrow: <PrevArrow />, // Custom Prev Arrow
    responsive: [
      {
        breakpoint: 1024, // For tablets and desktops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For small tablets and large phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on mobile for better UX
        },
      },
    ],
  };

  return (
    <div className=" ">
      {/* Slider Title */}
      <div className="text-center mb-12">
        <img
          // src={heading}
          src={mainheading}
          alt="Popular Products"
          className=" my-6 mx-auto w-2/3 lg:w-1/3 mb-4"
        />
        <p className="text-gray-600 text-lg">{subtext}</p>
      </div>

      {/* Product Cards */}
      <div className="">
        <Slider {...settings}>
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg transition-transform hover:scale-105 duration-300 mx-4 p-6"
            >
              {/* Product Image Section */}
              <div className="relative bg-pink-100 border border-pink-200 h-60 rounded-lg overflow-hidden mb-6">
                <button className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-gray-200 text-white hover:text-red-500 rounded-full transition-colors">
                  <FaHeart size={20} />
                </button>
                <div className="flex justify-center items-center h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full object-cover"
                  />
                </div>
              </div>

              {/* Product Info Section */}
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={`text-lg ${
                          index < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      ({product.rating}/5)
                    </span>
                  </div>

                  {/* Price */}
                  <p className="text-pink-500 text-xl font-semibold">
                    ${product.price.toFixed(2)}
                  </p>
                </div>

                {/* Add to Cart Button */}
                <div className="w-auto m-auto flex justify-center mt-4">
                  <Button
                    text={"Add to Cart"}
                    css="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition-all flex items-center justify-center"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlider;
