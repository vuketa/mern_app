import React, { useState } from "react";
import { FaShoppingCart, FaUser, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";

const CartLinks = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  return (
    <Wrapper className="cart-btn-wrapper">
      <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
        Cart
        <span className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">{total_items}</span>
        </span>
      </Link>

      <div className="btn-container">
        <Link
          to="/login"
          className="auth-btn"
          onClick={() => setShowLogout(!showLogout)}
        >
          <FaUser />
          login
          <FaCaretDown />
        </Link>
        <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
          <button
            type="button"
            className="dropdown-btn"
            onClick={() => console.log("logout user")}
          >
            logout
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  width: 250px;

  .cart-btn {
    color: var(--clr-black);
    font-size: 24px;
    letter-spacing: var(--spacing);
    display: flex;
    align-item: center;
  }
  .cart-container {
    display: flex;
    position: relative;
    align-items: center;
    svg {
      height: 25px;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: var(--clr-white);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 14px;
    font-weight: bold;
    color: var(--clr-black);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 24px;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
  .btn-container {
    position: relative;
  }
  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--clr-grey-8);
    box-shadow: var(--light-shadow);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--radius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
`;

export default CartLinks;
