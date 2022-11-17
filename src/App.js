import GlobalStyle from "./styles/global";
import { myData } from "./context/cardsContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Board } from "./components/boardFolder/Board";
import { Loading } from "./components/loadFolder/Loading";
import { Header } from "./components/headerFolder/Header";

function App() {
  const [cards, setCards] = useState([]);
  const [isPending, setIsPending] = useState(true); //variable to identify if the request is pending
  const [hasDropped, setHasDropped] = useState(''); //variable to identify where the item has dropped

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
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <myData.Provider value={{ cards, setCards, hasDropped, setHasDropped}}>
        <GlobalStyle />
        <Header />
        {isPending && <Loading />}
        {!isPending && <Board />}
      </myData.Provider>
    </DndProvider>
  );
}

export default App;
