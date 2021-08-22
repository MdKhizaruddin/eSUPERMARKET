import React from "react";
import { Card, Row, Col, Button, Form, Image } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const Productitem = ({ item }) => {
  const dispatch = useDispatch();
  console.log("item===>", item);
  return (
    <Card className="productitem">
      <Row>
        <Form.Label className="form">
          <b>{item.title}</b>
        </Form.Label>
        <Form.Label className="form">
          <b>{item.id}</b>
        </Form.Label>
      </Row>
      <Row>
        <Form.Label className="form2">
          <u>${item.price}</u>
        </Form.Label>
        <Form.Label className="form">
          <b>{item.category}</b>
        </Form.Label>

        <Form.Label>
          <Image src={`${item.image}`} width="250px" height="200px"></Image>
          <Form.Label className="form2">
            <b>
              {" "}
              <i>{item.description}</i>
            </b>
          </Form.Label>
        </Form.Label>
      </Row>
      <Row>
        <Col>
          <Button
            variant="danger"
            onClick={() => dispatch({ type: "REMOVE_PRODUCT", data: "Soap" })}
          >
            -
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            onClick={() =>
              dispatch({ type: "ADD_PRODUCT", data: ["Soap", "TATA NAMAK"] })
            }
          >
            +
          </Button>
        </Col>
      </Row>
    </Card>
  );
};
