import Modal from "react-modal";
import { useContext } from "react";
import { myData } from "../../../context/cardsContext";
import axios from "axios";
import "../../../styles/modal.scss";
Modal.setAppElement("#root");

export const CardModalDelete = ({info, toggleModal, isOpen}) => {
  const {setUpdate, update, setIsPending} = useContext(myData);

  const deleteCard = (id) => {
    axios.delete("api/tasks/" + id).then(() => {
      setIsPending(true);
      setUpdate(!update);
    }).catch((err)=>{
      console.log(err);
    });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className="modal-content-card"
      overlayClassName="modal-overlay-card"
    >
      <div className="outer">
        <div className="inner">
          <h2>Are you sure? Data cannot be retrieved</h2>
        </div>
        <div className="inner">
          <button
            onClick={() => {
              deleteCard(info.id);
            }}
          >
            Yes
          </button>
          <button onClick={toggleModal}>No</button>
        </div>
      </div>
    </Modal>
  );
};