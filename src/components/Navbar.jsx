import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { FiMenu } from "react-icons/fi"; // Icon for hamburger menu
import logo from "../images/Link.png";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { CartContext } from "../context/CartContext";
import { Badge } from "@nextui-org/react";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const { cartItems, wishListItems } = useContext(CartContext);

  const togglePagesDropdown = () => {
    setIsPagesDropdownOpen(!isPagesDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the mobile menu
  };

  return (
    <header className="header my-2">
      <div className="logo">
        <Link to={"/"}>
          <img src={logo} alt="IcyTales Logo" />
        </Link>
      </div>

      <div className="hamburger-menu" onClick={toggleMenu}>
        <FiMenu />
      </div>

      <div className={`nav-container ${isMenuOpen ? "active" : ""}`}>
        <nav className="nav-links">
          <div className="nav-item dropdown">
            <Link to={"/home"}>Home</Link>
          </div>
          <div className="nav-item">
            <Link to={"/aboutus"}>About Us</Link>
          </div>

          <div
            className="nav-item dropdown"
            onMouseEnter={togglePagesDropdown}
            onMouseLeave={togglePagesDropdown}
          >
            Pages <span className="dropdown-icon">▼</span>
            {isPagesDropdownOpen && (
              <div className="dropdown-menu">
                <Link to={"/team"}>
                  <div className="dropdown-item">Team</div>
                </Link>
                <Link to={"/review"}>
                  <div className="dropdown-item">Review</div>
                </Link>
                <Link to={"/shop"}>
                  <div className="dropdown-item">Shop</div>
                </Link>
                <Link to={"/terms"}>
                  <div className="dropdown-item">Terms & Condition</div>
                </Link>
                <Link to={"/policy"}>
                  <div className="dropdown-item">Privacy Policy</div>
                </Link>
              </div>
            )}
          </div>
          <Link to={"/blogs"}>
            <div className="nav-item dropdown">Blog</div>
          </Link>
          {/* <div className="nav-item">FAQ's</div> */}
        </nav>

        <div className="icons">
          <div className="cart-icon-wrapper">
            {wishListItems.length == 1 ? (
              <Link to={"/wishList"}>
                <Badge content={wishListItems.length}>
                  <FaHeart className=" text-red-600" size={25} />
                </Badge>
              </Link>
            ) : (
              <Link to={"/wishList"}>
                <FaHeart className=" text-red-600" size={25} />
              </Link>
            )}
          </div>

          <div className="cart-icon-wrapper">
            {!cartItems.length == 0 ? (
              <Link to={"/cart"}>
                <Badge content={cartItems.length}>
                  <BsBag className="cart-icon" />
                </Badge>
              </Link>
            ) : (
              <BsBag className="cart-icon" />
            )}
          </div>
        </div>
        <Link to={"/contact"}>
          <Button text={"Contact Us"} css={"contact-btn"} />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
