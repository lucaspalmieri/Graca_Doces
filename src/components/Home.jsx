import React from "react";

import CarouselBootstrap from "./Carousel";
import Products from "./Products";
import About from "./About";
import Reviews from "./Reviews";
import Contact from "./Contact";

export default function Home(props) {
  return (
    <React.Fragment>
      <CarouselBootstrap />
      <Products />
      <About />
      <Reviews />
      <Contact />
    </React.Fragment>
  );
}
