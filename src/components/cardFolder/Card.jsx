import React, { useState } from "react";
import { Container, Label } from "./styles";
import { useDrag } from "react-dnd";
import { BiTrashAlt } from "react-icons/bi";
import { CardModalDelete } from "./modals/CardModalDelete";
import { CardModalUpdate } from "./modals/CardModalUpdate";

export const Card = ({ info }) => {
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  let labelColor = "";

  const toggleDeleteModal = () => {
    setIsDeleteOpen(!isDeleteOpen);
  };

  const toggleUpdateModal = () => {
    setIsUpdateOpen(!isUpdateOpen);
  };

  switch (info.label) {
    case "urgent":
      labelColor = "red";
      break;
    case "important":
      labelColor = "orange";
      break;
    case "later":
      labelColor = "green";
      break;
    default:
      labelColor = "grey";
  }

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "CARD",
    item: { card: info },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Container status={info.status} ref={dragRef} isDragging={isDragging}>
      <header>
        <Label color={labelColor} />
        <button onClick={toggleUpdateModal}>
          <p className="card-title">{info.title}</p>
        </button>
      </header>
      <p className="card-description">{info.description}</p>
      <div className="footer">
        <button type="button" onClick={toggleDeleteModal}>
          <BiTrashAlt size={20} color="var(--headerBG)" />
        </button>
        {info.img && <img src={info.img} alt="profile" />}
      </div>
      <CardModalDelete
        info={info}
        toggleModal={toggleDeleteModal}
        isOpen={isDeleteOpen}
      />

      <CardModalUpdate
        info={info}
        toggleModal={toggleUpdateModal}
        isOpen={isUpdateOpen}
      />
    </Container>
  );
};
