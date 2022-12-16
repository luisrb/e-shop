import { React, useContext } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../context/ShoppingCart";
import "./Header.css";

function Header({ children }) {
  const { products } = useContext(ShoppingCartContext);

  return (
    <header>
      <Link to="/">
        <h3>E-Shop</h3>
      </Link>
      <div className="header-breadcrumbs">{children}</div>
      <div className="shopping-cart">
        <span>{products.length}</span>
        <RiShoppingCart2Line />
      </div>
    </header>
  );
}

export default Header;
