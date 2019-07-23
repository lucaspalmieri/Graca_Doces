import React from "react";

import styled from "styled-components";

import RoseCake from "../images/rose-cake.png";

export default function Produto(props) {
  return (
    <React.Fragment>
      <Wrapper>
        <img src={RoseCake} alt="cake" width="350" />
        <Description className="text-center">
          Bolo Rosa de Chocolate
        </Description>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div``;

const Description = styled.p`
  margin-top: 5px;
  font-size: 19px;
`;
