import GlobalStyle from "./styles/global";
import { myData } from "./context/cardsContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Board } from "./components/boardFolder/Board";
import { Header } from "./components/headerFolder/Header";
import {Loading} from './components/loadFolder/Loading'


function App() {
  const [cards, setCards] = useState([]);
  const [isPending, setIsPending] = useState(true); //variable to identify if the request is pending
  const [update, setUpdate] = useState(false);

  useEffect(() => {

    axios
      .get("/api/tasks")
      .then((res) => {
        setCards(res.data.tasks);
        setIsPending(false);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [update]);

  return (
    <DndProvider backend={HTML5Backend}>
      <myData.Provider value={{ cards, setCards, setUpdate, update, setIsPending}}>
        <GlobalStyle />
        <Header />
        {isPending && <Loading/>}
        {!isPending && <Board />}
      </myData.Provider>
    </DndProvider>
  );
}

export default App;