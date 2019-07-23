import React from "react";

import styled from "styled-components";

export default function Product(props) {
  const styleImg = {
    width: "200px",
    height: "200px",
    marginBottom: "10px"
  };
  return (
    <React.Fragment>
      <Wrapper>
        <img className="rounded-circle" style={styleImg} src={props.image} />
        <Category>{props.category}</Category>
        <Description>{props.description}</Description>
        <Guid href="/produtos">Ver Mais</Guid>
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
  text-align: center;

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 20px;
    margin: 40px 0;
  }
`;

const Category = styled.p`
  color: #bfa760;
  font-size: 24px;
`;

const Description = styled.p`
  color: black;
`;

const Guid = styled.a`
  border: 1px solid white;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  color: #fefefe;
  background: #bfa760;
  text-decoration: none !important;
  cursor: pointer;

  &:hover {
    background: transparent;
    border: 1px solid #bfa760;
    color: #bfa760;
  }
`;
