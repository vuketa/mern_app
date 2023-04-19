import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { CartContent } from "../components";

const CartPage = () => {
  const { cart } = useCartContext();
  return cart.length < 1 && (
      <Wrapper className="page-100">
        <div className="empty">
          <h4>Your card is empty</h4>
          <Link
            to="/products"
            className="btn"
            onClick={setTimeout(() => window.open("/products", "_self"), 2000)}
          >
            fill it
          </Link>
        </div>
      </Wrapper>
    );
  


  return (
    <main>
      <Wrapper className="page">
        <CartContent />
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.main`
  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;

export default CartPage;
