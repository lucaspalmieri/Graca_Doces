import React from "react";
import Title from "./Title";

import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

import Cheff from "../images/cheff.webp";

export default function About(props) {
  const imgStyle = {
    display: "block",
    margin: "auto"
  };
  return (
    <React.Fragment>
      <Title marginTop="90px" title="Sobre" />
      <Row id="about" className="w-100 m-auto">
        <Col md={6} sm={12}>
          <img src={Cheff} alt="" srcset="" style={imgStyle} width="100%" />
        </Col>
        <Col md={6} sm={12}>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Description>
        </Col>
      </Row>
    </React.Fragment>
  );
}

const Description = styled.p`
  padding-left: 20px;
  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;
