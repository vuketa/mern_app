import React from "react";
import Product from "./Product";
import { Container, Row } from "react-bootstrap";

const ProductList = ({ backendData }) => {
  return (
    <Container className="my-5 text-bg-light ">
      <Row>
        {backendData &&
          backendData.map((product, index) => {
            return <Product key={index} product={product} />;
          })}
      </Row>
    </Container>
  );
};

export default ProductList;
