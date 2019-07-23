import React from "react";

import styled from "styled-components";

export default function Title(props) {
  return (
    <React.Fragment>
      <Wrapper marginTop={props.marginTop} marginBottom={props.marginBottom}>
        <Titulo>{props.title}</Titulo>
        <Line />
      </Wrapper>
    </React.Fragment>
  );
}

const Wrapper = styled.div`
margin-top: ${props => props.marginTop}
margin-bottom: ${props => props.marginBottom}
`;

const Titulo = styled.p`
  text-align: center;
  font-size: 36px;
  color: #bfa760;
  margin-bottom: 0;
`;

const Line = styled.div`
  height: 1px;
  background: #bfa760;
  width: 90px;
  display: block;
  margin: auto;
  margin-bottom: 40px;
`;
