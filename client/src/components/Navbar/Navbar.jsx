import "./Navbar.css";
import logo from "../../assets/nike.png";
import cart from "../../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <ul className="nav-links">
        <li onClick={() => setMenu("shop")}>
          <Link to="/">Shop</Link> {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("men")}>
          <Link to="/men">Men</Link> {menu === "men" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("women")}>
          <Link to="women">Women</Link> {menu === "women" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link to="kids">Kids</Link> {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <div className="cart">
          <Link to="/cart">
            <img src={cart} alt="cart-icon" />
          </Link>
          <p className="cart-count">0</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
