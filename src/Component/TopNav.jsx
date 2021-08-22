import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

export const TopNav = () => {
  const products = useSelector((state) => state.productReducer.product);
  console.log(products);
  return (
    <Card className="topnav">
      <Row>
        <Col md={10}></Col>
        <Col md={2}>{/* <h3>Cart:{products.length}</h3> */}</Col>
      </Row>
    </Card>
  );
};
