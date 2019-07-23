import React from "react";
import styled from "styled-components";
import Title from "./Title";

import Avatar from "../images/avatar.png";

import Carousel from "react-bootstrap/Carousel";

export default function Reviews(props) {
  const styleCarousel = {
    textAlign: "center",
    height: "380px",
    padding: "20px 0"
  };

  const styledAvatar = {
    width: "150px"
  };
  return (
    <React.Fragment>
      <Wrapper>
        <Title title="Depoimentos" />
        <Carousel
          controls={false}
          indicators={false}
          fade={false}
          interval={3000}
          pauseOnHover={false}
        >
          <Carousel.Item style={styleCarousel}>
            <Div>
              <p>Nome Sobrenome</p>
              {/* <img style={styledAvatar} src={Avatar} /> */}
              <Testimony>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s
              </Testimony>
            </Div>
          </Carousel.Item>
          <Carousel.Item style={styleCarousel}>
            <Div>
              <p>Nome Sobrenome</p>
              {/* <img style={styledAvatar} src={Avatar} /> */}
              <Testimony>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000
              </Testimony>
            </Div>
          </Carousel.Item>
          <Carousel.Item style={styleCarousel}>
            <Div>
              <p>Nome Sobrenome</p>
              {/* <img style={styledAvatar} src={Avatar} /> */}
              <Testimony>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </Testimony>
            </Div>
          </Carousel.Item>
        </Carousel>
      </Wrapper>
    </React.Fragment>
  );
}
const Wrapper = styled.div`
  margin-top: 70px;
`;

const Div = styled.div`
  width: 400px;
  margin: auto;

  @media (max-width: 480px) {
    width: 300px;
  }
`;

const Testimony = styled.p`
  margin-top: 20px;
`;
