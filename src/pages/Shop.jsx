import TopSlider from "../components/TopSlider";
import heading1 from "../images/Heading 1 → Shop Layout 01.png";
import heading2 from "../images/Background+Shadow(shop).png";
import product1 from "../images/Figure → classic-image1.png.png";
import product2 from "../images/Figure → classic-image2.png.png";
import product3 from "../images/Figure → classic-image3.png.png";
import product4 from "../images/Figure → classic-image4.png.png";
import product5 from "../images/Figure → seller-image1.png.png";
import product6 from "../images/Figure → seller-image2.png.png";
import product7 from "../images/perfect-image1.jpg.png";
import product8 from "../images/vegan-image1.jpg.png";
import product9 from "../images/vegan-image2.jpg.png";
import product10 from "../images/vegan-image3.jpg.png";
import product13 from "../images/popular-image1.png.png";
import product14 from "../images/popular-image2.png.png";
import product15 from "../images/popular-image3.png.png";
import product16 from "../images/flover-image1.png.png";
import product17 from "../images/flover-image2.png.png";
import product18 from "../images/flover-image3.png.png";

import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

// Example product data
const productsData = [
  {
    id: 1,
    name: "Classic Vanilla Ice Cream",
    description: "Creamy vanilla ice cream topped with cherry",
    price: 5.49,
    rating: 4.9,
    category: "Canned Ice Cream",
    imgUrl: product1,
  },
  {
    id: 2,
    name: "Chocolate Brownie Sundae",
    description: "Rich chocolate ice cream with chunks of brownie.",
    price: 5.49,
    rating: 4.9,
    category: "Sundaes",
    imgUrl: product2,
  },
  {
    id: 3,
    name: "Strawberry Shortcake",
    description: "Strawberry ice cream layered with shortcake.",
    price: 5.29,
    rating: 4.9,
    category: "Ice Cream Cakes",
    imgUrl: product3,
  },
  {
    id: 4,
    name: "Chocolate Fudge Brownie",
    description: "Rich chocolate ice cream with chunks of fudge brownie.",
    price: 6.49,
    rating: 4.8,
    category: "Ice Cream Cakes",
    imgUrl: product4,
  },
  {
    id: 5,
    name: "Mint Chocolate Chip Delight",
    description: "Cool mint ice cream with dark chocolate chips.",
    price: 5.99,
    rating: 4.7,
    category: "Ice Cream Pints",
    imgUrl: product5,
  },
  {
    id: 6,
    name: "Salted Caramel Crunch",
    description: "Caramel ice cream with a hint of sea salt and crunchy bits.",
    price: 6.79,
    rating: 4.6,
    category: "Ice Cream Pints",
    imgUrl: product6,
  },
  {
    id: 7,
    name: "Classic Flavors",
    description: "Caramel ice cream with a hint of sea salt and crunchy bits.",
    price: 7.34,
    rating: 5.0,
    category: "Canned Ice Cream",
    imgUrl: product7,
  },
  {
    id: 8,
    name: "Seasonal Specials",
    description: "Creamy coconut ice cream topped with shredded coconut.",
    price: 5.94,
    rating: 4.3,
    category: "Sundaes",
    imgUrl: product8,
  },
  {
    id: 9,
    name: "Gelato Cake",
    description: "A blend of chocolate, vanilla, and strawberry ice cream.",
    price: 6.01,
    rating: 4.6,
    category: "Ice Cream Cakes",
    imgUrl: product9,
  },
  {
    id: 10,
    name: "Gelato Pints",
    description: "Vanilla ice cream with chunks of chocolate cookies.",
    price: 7.93,
    rating: 4,
    category: "Ice Cream Pints",
    imgUrl: product10,
  },
  {
    id: 13,
    name: "Coconut Paradise",
    description: "Creamy coconut ice cream topped with shredded coconut.",
    price: 6.19,
    rating: 4.5,
    category: "Ice Cream Pints",
    imgUrl: product13,
  },
  {
    id: 14,
    name: "Cookies and Cream",
    description: "Vanilla ice cream with chunks of chocolate cookies.",
    price: 5.89,
    rating: 4.8,
    category: "Ice Cream Pints",
    imgUrl: product14,
  },
  {
    id: 15,
    name: "Raspberry Ripple",
    description: "Vanilla ice cream swirled with fresh raspberry sauce.",
    price: 5.79,
    rating: 4.7,
    category: "Ice Cream Pints",
    imgUrl: product15,
  },
  {
    id: 16,
    name: "Pistachio Dream",
    description: "Pistachio ice cream with roasted pistachio pieces.",
    price: 6.39,
    rating: 4.8,
    category: "Ice Cream Pints",
    imgUrl: product16,
  },
  {
    id: 17,
    name: "Neapolitan Trio",
    description: "A blend of chocolate, vanilla, and strawberry ice cream.",
    price: 7.29,
    rating: 4.9,
    category: "Ice Cream Cakes",
    imgUrl: product17,
  },
  {
    id: 18,
    name: "Coffee Crunch",
    description: "Coffee ice cream with caramelized sugar bits.",
    price: 6.49,
    rating: 4.7,
    category: "Ice Cream Pints",
    imgUrl: product18,
  },
];

const categories = [
  { name: "All" },
  { name: "Canned Ice Cream" },
  { name: "Ice Cream Pints" },
  { name: "Ice Cream Cakes" },
  { name: "Sundaes" },
];

const ITEMS_PER_PAGE = 6; // Show 6 items per page.

const IceCreamShop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([5, 50]);
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  useEffect(() => {
    const timeout = setTimeout(() => {
      filterProducts();
    }, 300);

    return () => clearTimeout(timeout);
  }, [searchTerm, selectedCategory, priceRange]);

  const filterProducts = () => {
    const filtered = productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" || product.category === selectedCategory;
      const matchesSearchTerm = product.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPriceRange =
        product.price >= priceRange[0] && product.price <= priceRange[1];

      return matchesCategory && matchesSearchTerm && matchesPriceRange;
    });
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to page 1 after filtering.
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleCategoryClick = (category) => setSelectedCategory(category);
  const handlePriceChange = (e) =>
    setPriceRange([Number(e.target.value), priceRange[1]]);
  const handlePageChange = (page) => setCurrentPage(page);

  // Calculate the products to display based on current page
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <TopSlider image1={heading1} image2={heading2} />
      <div className="container mx-auto p-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>

            <h2 className="text-2xl font-semibold mb-4">Categories</h2>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <button
                    onClick={() => handleCategoryClick(category.name)}
                    className={`w-full text-left px-4 py-2 rounded-lg ${
                      selectedCategory === category.name
                        ? "bg-pink-500 text-white"
                        : "bg-gray-100 text-gray-800"
                    } hover:bg-pink-400 hover:text-white`}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              Filter By Price
            </h2>
            <div className="flex items-center justify-between">
              <span>${priceRange[0]}</span>
              <input
                type="range"
                min="5"
                max="50"
                value={priceRange[0]}
                onChange={handlePriceChange}
                className="mx-4"
              />
              <span>${priceRange[1]}</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProducts.length > 0 ? (
                displayedProducts.map((data) => (
                  <ProductCard key={data.id} product={data} />
                ))
              ) : (
                <p className="text-center w-full py-4">No products found.</p>
              )}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-lg ${
                    currentPage === index + 1
                      ? "bg-pink-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  } hover:bg-pink-400 hover:text-white`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IceCreamShop;
