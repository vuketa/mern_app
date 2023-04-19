import React from 'react';
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import { links } from '../utils/constants';
import styled from 'styled-components';
import CartLinks from './CartLinks';
import { useProductsContext } from '../context/products_context';

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useProductsContext();
  return (
    <Wrapper>
      <aside className={`${isSidebarOpen? 'sidebar show-sidebar' : 'sidebar'}`}>
        <div className='sidebar-header'>
        <Link to="/" className='text-h'>
          Drink Store
        </Link>
          <button type='button' className='close-btn' onClick={closeSidebar}>
            <FaTimes />
          </button>
        </div>
        <ul className='links'>
          {links.map((link) => {
            const {id, text, url} = link;
            return <li key={id}><Link to={url} onClick={closeSidebar}> {text}</Link></li>
          })}
        </ul>
        <CartLinks />
      </aside>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  text-align: center;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    }
    .text-h {
      color: var(--clr-black);
      font-size: 24px;
    }
    .links {
      margin-bottom: 32px;
    }
    .links a {
      display: block;
      text-align: left;
      font-size: 1rem;
      text-transform: capitalize;
      padding: 1rem 1.5rem;
      color: var(--clr-grey-3);
      transition: var(--transition);
      letter-spacing: var(--spacing);
    }
  }

  .close-btn {
    background: transparent;
    border: transparent;
    color: var(--clr-red-light);
    font-size: 32px;
    
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-white);
    transition: var(--transition);
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 32px auto;
  }
  @media screen and (min-width: 992px) {
    .sidebar {
      display: none;
    }
  }
  

`

export default Sidebar
