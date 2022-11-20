import React, { useState } from "react";
import { Container } from "./styles";
import { MdAdd } from "react-icons/md";
import { HeaderModal } from "./modal/HeaderModal";

export const Header = () => {
  //it defines variable to control Modal
  const [isOpen, setIsOpen] = useState(false);
  //it defines function to handle modal
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <h1>ToDo's</h1>
      <button type="button" onClick={toggleModal}>
        <MdAdd size={24} color="var(--headerBG)" />
      </button>
      <HeaderModal isOpen={isOpen} toggleModal={toggleModal} />
    </Container>
  );
};
