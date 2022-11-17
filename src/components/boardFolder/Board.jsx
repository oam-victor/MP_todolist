import { Container } from "./styles";
import { List } from "../listFolder/List";
import {myData} from '../../context/cardsContext'
import { useContext } from "react";
import { Loading } from "../loadFolder/Loading";

export const Board = () => {
const {cards, isPending} = useContext(myData);

 const todo = cards.filter(elem => elem.status === 'TO DO');
 const doing = cards.filter(elem => elem.status === 'DOING');
 const done = cards.filter(elem => elem.status === 'DONE');

  return (
     <Container>
        {isPending &&  <Loading/>}
        {!isPending && <List arr={todo} title='TO DO'/>}
        {!isPending && <List arr={doing} title='DOING'/>}
        {!isPending && <List arr={done} title='DONE'/>}
     </Container>
  );
};
