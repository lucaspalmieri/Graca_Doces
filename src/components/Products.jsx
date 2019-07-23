import React from "react";
import Product from "./Product";
import Title from "./Title";

import Bolo6 from "../images/bolo_img6.jpg";
import Doce2 from "../images/doce_im2.jpg";
import PaoDeMel from "../images/paoDeMel_img.jpg";
import Personalizados from "../images/personalizados_img.jpg";

import { Row, Col } from "react-bootstrap";

export default function Products(props) {
  const styleRow = {
    width: "100%"
  };
  return (
    <React.Fragment>
      <Title marginTop="60px" title="Produtos" />
      <Row className="w-100">
        <Col md={3} sm={12}>
          <Product
            image={Bolo6}
            category="Bolos"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </Col>
        <Col md={3} sm={12}>
          <Product
            image={Doce2}
            category="Doces"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </Col>
        <Col md={3} sm={12}>
          <Product
            image={PaoDeMel}
            category="Pães de mel"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </Col>
        <Col md={3} sm={12}>
          <Product
            image={Personalizados}
            category="Personalizados"
            description="Some quick example text to build on the card title and make up the bulk of the card's content."
          />
        </Col>
      </Row>
    </React.Fragment>
  );
}
