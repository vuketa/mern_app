import React from "react";
import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { CartColumns, CartItem, CartTotal } from "../components";
import { Link } from "react-router-dom";

const CartContent = () => {
  const { cart, clearItem } = useCartContext();
  return (
    <Wrapper className="section section-center">
      <CartColumns />
      {cart.map((item,index) => {
        return <CartItem key={index} {...item} />;
      })}
      <hr />
      <div className="link-container">
        <Link to='/products' className="link-btn">continue shopping</Link>
        <button type="button" className="link-btn clear-btn" onClick={clearItem}>clear shopping cart</button>
      </div>
      <CartTotal />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .link-container {
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
  }
  .link-btn {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
    background: var(--clr-grey-4);
    color: var(--clr-white);
    border-radius: var(--radius);
    letter-spacing: var(--spacing);
    font-weight: 400;
    cursor: pointer;
  }
  .clear-btn {
    background: var(--clr-black);
  }
`;

export default CartContent;
