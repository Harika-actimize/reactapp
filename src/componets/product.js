import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = props => {
  return (
    <>
      <Card border="info">
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title style={{color:"hotpink"}}>{props.data.imagename}</Card.Title>
          <Card.Text style={{color:"green"}}>{props.data.price}</Card.Text>
          <Card.Text  style={{color:"blue"}}>{props.data.actulprice}</Card.Text>
          <div className="product-actions">
            <Button variant="primary" style={{marginRight:9}}>Buy Now</Button>
            <Button variant="secondary">Add to cart</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;
