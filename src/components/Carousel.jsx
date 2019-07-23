import React from "react";

import Carousel from "react-bootstrap/Carousel";

import Crocante from "../images/crocante.jpg";
import Chocolate from "../images/chocolate.jpg";
import Morango from "../images/morango.jpg";

export default function CarouselReact(props) {
  return (
    <React.Fragment>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={Crocante} alt="Primeiro Slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Chocolate} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Morango} />
        </Carousel.Item>
      </Carousel>
    </React.Fragment>
  );
}
