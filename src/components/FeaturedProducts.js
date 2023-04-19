import React from "react";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import Error from "../components/Error"
import Loading from "../components/Loading"
import Product2 from "../components/Product2"

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();
  if(loading){
    return <Loading />
  }
  if(error){
    return <Error />
  }
  return (
    <Wrapper className="section">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.slice(0,3).map((product) => {
          return <Product2 key={product._id} {...product} />
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
background: var(--clr-grey-10);
.featured {
  margin: 4rem auto;
  display: grid;
  gap: 2.5rem;
  img {
    height: 225px;
  }
}
.btn {
  display: block;
  width: 148px;
  margin: 0 auto;
  text-align: center;
}
@media (min-width: 576px) {
  .featured {
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  }
}

`

export default FeaturedProducts;
