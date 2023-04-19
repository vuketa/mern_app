import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { Loading, Error } from "../components";
import AddToCart from "../components/AddToCart";
import { Loading, Error } from "../components";

const SingleProductPage = () => {
  const { productId } = useParams();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProducts,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProducts(`products/${productId}`);
  }, []);
  // console.log(product);
  if(loading){
    return <Loading />
  }
  if(error){
    return <Error />
  }

  const { _id: id, name, drink, price, product_amount, cod, img } = product;
  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to="/products" className="btn">
          back to products
        </Link>
        <div className="product-center">
          <img src={img} alt="" />
          <section className="content">
            <h2>{name}</h2>
            <h6>{id}</h6>
            <h5 className="price">{price}</h5>
            <p className="desc">{drink}</p>
            <p className="info">
              <span>Available :</span>
              {product_amount > 0 ? "In stock" : "out of stock"}
            </p>
            <p className="info">
              <span>Code :</span>
              {cod}
            </p>
            <hr />
            {product_amount > 0 && <AddToCart product={product}/>}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    img {
      display: block;
      margin: 0 auto;
      height: 250px;
      object-fit: contain;
    }
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
