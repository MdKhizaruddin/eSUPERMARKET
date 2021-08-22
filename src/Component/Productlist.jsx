import React from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col } from "react-bootstrap";
import { Productitem } from "./Productitem";
import { useState } from "react";
import { useEffect } from "react";

export const Productlist = () => {
  const myProducts = useSelector((state) => state.productReducer.product);
  const [prods, setProds] = useState([]);
  useEffect(() => {
    setProds([...myProducts]);
  }, [myProducts]);
  return (
    <Card className="productlist">
      <Row>
        {prods.map((item) => (
          <Col md={4}>
            <Productitem item={item} />
          </Col>
        ))}
      </Row>
    </Card>
  );
};
