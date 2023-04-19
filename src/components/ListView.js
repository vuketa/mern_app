import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ListView = ({products}) => {
  return (
    <Wrapper>
      {products.map((product) => {
        const {_id: id, name, price, img} = product; 
        return <article key={id}>
            <img src={img} alt="" />
            <div>
                <h4>{name}</h4>
                <h5 className='price'>price : {price} rsd</h5>
                <Link to={`/products/${id}`} className='btn'>Details</Link>
            </div>
        </article>
      })}
    </Wrapper>
  )
}
const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: contain;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`

export default ListView
