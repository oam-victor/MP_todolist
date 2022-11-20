import { Container } from "./styles";
import { List } from "../listFolder/List";
import { myData } from "../../context/cardsContext";
import { useContext } from "react";

export const Board = () => {
  const {cards} = useContext(myData);
  //it defines arrays to be sent to the list components
  const todo = cards.filter((elem) => elem.status === "TO DO");
  const doing = cards.filter((elem) => elem.status === "DOING");
  const done = cards.filter((elem) => elem.status === "DONE");

  return (
    <Container>
      <List arr={todo} title="TO DO" />
      <List arr={doing} title="DOING" />
      <List arr={done} title="DONE" />
    </Container>
  );
};
