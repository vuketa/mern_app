import React from 'react';
import styled from 'styled-components';
import { useCartContext } from '../context/cart_context';

const CartTotal = () => {
  const {total_amount} = useCartContext()
  return (
    <Wrapper>
      <div>
        <article>
          <h5>total : <span>{total_amount}</span></h5>
        </article>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`

export default CartTotal
