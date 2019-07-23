import React from "react";

import Produto from "./Produto";

import styled from "styled-components";

export default function Produtos(props) {
  return (
    <React.Fragment>
      <Wrapper>
        <Flex>
          <Line />
          <ProductTitle className="text-center">Bolos</ProductTitle>
          <Line />
        </Flex>
        <Filter>
          <Category>Bolos</Category>
          <Category>Doces</Category>
          <Category>Bolos Personalizados</Category>
          <Category>Eventos</Category>
        </Filter>
        <Window>
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
          <Produto />
        </Window>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 60px;
  border-bottom: 1px solid #bfa760;
  padding-bottom: 10px;

  @media (max-width: 480px) {
    display: none;
  }
`;

const Category = styled.p`
  color: #bfa760;
  font-size: 20px;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  margin-top: 120px;
`;

const Line = styled.p`
  height: 1px;
  width: 100%;
  background: #bfa760;
`;

const ProductTitle = styled.p`
  color: #bfa760;
  font-size:44px;
  padding: 0 10px;  
}
`;

const Window = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 480px) {
    justify-content: center;
  }
`;
