import React from "react";
import { Container } from "./styles";
import { MdAdd } from "react-icons/md";

export const Header = () => {
  return (
    <Container>
      <h1>ToDo's</h1>
      <button type="button">
        <MdAdd size={24} color="var(--headerBG)" />
      </button>
    </Container>
  );
};
