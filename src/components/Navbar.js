import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { links } from "../utils/constants";
import CartLinks from "./CartLinks";
import { useProductsContext } from "../context/products_context";

const Nav = () => {
  const { openSidebar } = useProductsContext();
  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
          <button type="button" className="nav-toggle" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  style={({ isActive }) =>
                    isActive
                      ? {  textTransform: "uppercase" }
                      : null
                  }
                >
                  {text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <CartLinks />
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
height: 5rem;
display: flex;
align-items: center,
justify-content: center;
background-color: var(--clr-grey-4);

.nav-center {
  width: 90%;
  margin: 0 auto;
  max-width: var(--max-width);
}

.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 75px;
  }
}

.nav-toggle {
  background: transparent;
  border: transparent;
  svg {
    font-size: 32px;
  }
}


.nav-links {
  display:none;
}

.cart-btn-wrapper {
  display: none;
}

@media (min-width: 992px) {
  .active {
    color: var(--clr-black)
  }
  .nav-toggle {
    display: none;
  }
  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .nav-links {
    display: flex;
    align-items: center;
    justify-content: center;
    li {
     margin: 0 8px;
    }
    a {
      color: var(--clr-white);
      font-size: 1rem;
      text-transform: capitalize;
      letter-spacing: var(--spacing);
      padding: 8px;
      &:hover {
        border-bottom: 2px solid var(--clr-white);
      }
    }
   }
   .cart-btn-wrapper {
    display: grid;
   }
}
`;

export default Nav;
