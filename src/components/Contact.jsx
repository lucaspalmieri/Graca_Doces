import React from "react";

import styled from "styled-components";

export default function Contact(props) {
  return (
    <React.Fragment>
      <Form action="">
        <Input type="text" placeholder="Nome" />
        <Input type="text" placeholder="E-mail" />
        <Textarea
          name="mensagem"
          id="mensagem"
          cols="44"
          rows="10"
          placeholder="Mensagem"
        />
      </Form>
    </React.Fragment>
  );
}

const Form = styled.form`
  display: grid;
  width: 500px;
  margin: auto;

  @media (max-width: 480px) {
    width: 100%;
    padding: 0 20px;
  }
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid black;
  background: transparent;
  margin-bottom: 20px;

  &::placeholder {
    color: black;
  }
`;

const Textarea = styled.textarea`
  border-color: black;
  margin-top: 20px;
`;
