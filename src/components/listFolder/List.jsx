import { Container } from "./styles";
import { Card } from "../cardFolder/Card";
import { useDrop } from "react-dnd";
import { useContext } from "react";
import { myData } from "../../context/cardsContext";
import axios from 'axios';

export const List = ({ arr, title }) => {
  const { cards, setCards } = useContext(myData);

  const [{isOver}, dropRef] = useDrop({
    accept: "CARD",
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),

    drop: ({ card }) => {
      let safetyArray = cards;
      let newArray = cards.filter(info => info.id !== card.id);
      newArray.push(card);
      setCards(newArray);

         axios
        .put(`api/tasks/` + card.id, card)
        .then(() => {
          console.log('update succesful');
        })
        .catch((err) => {
//As the changes are ocurring before the DB is updated, safety array resets the state of cards in case there is an error;
          setCards(safetyArray); 
          console.log(err);
        });
    },
    hover({ card }) {
      card.status = title;
    },
  });

  return (
    <Container ref={dropRef} isOver={isOver}>
      <header>
        <h2>{title}</h2>
      </header>

      <ul>
        {arr.map((elem) => {
          return <Card info={elem} key={elem.id} />;
        })}
      </ul>
    </Container>
  );
};
