import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { FiMenu } from "react-icons/fi"; // Icon for hamburger menu
import logo from "../images/Link.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

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
              </div>
            )}
          </div>

          <div className="nav-item dropdown">Blog</div>
          <div className="nav-item">FAQ's</div>
        </nav>

        <div className="icons">
          <CiSearch className="search-icon" />
          <div className="cart-icon-wrapper">
            <Link to={"/cart"}>
              <BsBag className="cart-icon" />
            </Link>
          </div>
        </div>

        <Button text={"Contact Us"} css={"contact-btn"} />
      </div>
    </header>
  );
};

export default Navbar;
