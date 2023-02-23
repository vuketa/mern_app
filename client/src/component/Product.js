import React, { useState } from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";

const Product = ({ product }) => {
  const { name, drink, price, product_amount, img, cod } = product;
  return (
    <Card className="m-3 mx-auto" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title className="text-danger text-capitalize">{name}</Card.Title>
        <p>Naziv: {drink}</p>
        <p>Rsd: {price}</p>
        <p>Kol: {product_amount}</p>
        <p>Sifra: {cod}</p>
        <Col>
          <Row className="my-2">
            <Button variant="secondary">Edit</Button>
          </Row>
          <Row>
            <Button variant="primary">Delete</Button>
          </Row>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default Product;

// <Container  className="my-5 py-3 text-bg-light ">
//   <Row>
//     <Col xs={12} md={4} lg={3} className="mb-5 text-center">
//       <img className="img-fluid" src={img} alt="" />
//     </Col>
//     <Col xs={12} md={8} lg={9}>
//       <h1 className="text-capitalize">{name}</h1>
//       <h3>{drink}</h3>
//       <p>{cod}</p>
//       <p>amount: {product_amount}</p>
//       <p>rsd: {price}</p>
//     </Col>
//   </Row>
// </Container>
