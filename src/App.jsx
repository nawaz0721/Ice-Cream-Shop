import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/About";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Review from "./pages/Review";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/productDetail.jsx";
import ShoppingCart from "./pages/ShoppingCart";
import CheckOut from "./pages/CheckOut";
import Thankyou from "./pages/Thankyou";
import WishList from "./pages/WishList";
import NotFound from "./pages/NotFound";
import Policy from "./pages/policy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./pages/BlogsDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/review" element={<Review />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogsDetails />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
