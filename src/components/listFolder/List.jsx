import { Container } from "./styles";
import { Card } from "../cardFolder/Card";
import { useDrop } from "react-dnd";
import { useContext } from "react";
import { myData } from "../../context/cardsContext";

export const List = ({ arr, title }) => {
  const { setHasDropped } = useContext(myData);

  const [, dropRef] = useDrop({
    accept: "CARD",

    drop: () => {
      setHasDropped(title);
    },
  });

  return (
    <Container ref={dropRef}>
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
