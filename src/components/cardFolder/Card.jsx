import React, { useContext, useEffect, useRef } from "react";
import { Container, Label } from "./styles";
import { useDrag } from "react-dnd";
import { myData } from "../../context/cardsContext";
import axios from "axios";

export const Card = ({ info }) => {
  let labelColor = "";

  const { cards, setCards, hasDropped } = useContext(myData);

  switch (info.label) {
    case "urgent":
      labelColor = "red";
      break;
    case "important":
      labelColor = "yellow";
      break;
    case "later":
      labelColor = "green";
      break;
    default:
      labelColor = "grey";
  }

  let change = useRef(''); //I cannot access  hasDropped inside of the end property. IDK why. therefore I had to use a reference
  useEffect(()=>{
    change.current = hasDropped;
  },[hasDropped])

  console.log(change.current);

  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "CARD",
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: () => {
      console.log(hasDropped);
      axios
        .put(`api/tasks/` + info.id)
        .then((res) => {
          info.status = change.current;
          let newArray = cards.filter( card => card.id !== info.id);
          newArray.push(info);
          setCards(newArray);
          console.log('cards', cards);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  }));

  return (
    <Container status={info.status} ref={dragRef} isDragging={isDragging}>
      <header>
        <Label color={labelColor} />
        <p className="card-title">{info.title}</p>
      </header>
      <p className="card-description">{info.description}</p>
      {info.img && <img src={info.img} alt="profile" />}
    </Container>
  );
};
