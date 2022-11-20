import { useContext } from "react";
import { myData } from "../../../context/cardsContext";
import { useForm } from "react-hook-form";
import axios from "axios";
import Modal from "react-modal";
import { goku, gohan, vegeta, none } from "../../../services/server";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

Modal.setAppElement("#root");

export const HeaderModal = ({ isOpen, toggleModal }) => {
  //it receives variables necessary for update via contextAPI
  const { setUpdate, update, setIsPending } = useContext(myData);
  // it defines form validation with yup
  const formValidation = yup.object({
    title: yup.string().required().max(25),
    description: yup.string().required().max(120),
  });
  //it defines form structure
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formValidation),
  });

  const handleFormSubmit = (data) => {
    axios
      .post("/api/tasks", data)
      .then((res) => {
        toggleModal();
        reset((formValues) => console.log("Reseting form values"));
        setIsPending(true);
        setUpdate(!update);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleModal}
      className="modal-content-header"
      overlayClassName="modal-overlay-header"
    >
      {/*it defines the form inside the Modal*/}
      <form
        action=""
        onSubmit={handleSubmit((data) => {
          handleFormSubmit(data);
        })}
      >
        <div className="outer">
          <div className="inner">
            <h2>ADD TASK</h2>
          </div>
          <div className="inner">
            <div className="fields">
              <label htmlFor="">Title</label>
              <input
                required
                type="text"
                placeholder="Title"
                {...register("title")}
              />
              <p className="error-message">{errors.title?.message}</p>
            </div>

            <div className="fields">
              <label rows="3">Description</label>
              <textarea
                required
                rows="4"
                placeholder="Description"
                {...register("description")}
              />
              <p className="error-message">{errors.description?.message}</p>
            </div>

            <div className="fields">
              <label htmlFor="">Status</label>
              <select type="text" placeholder="Status" {...register("status")}>
                <option value="TO DO">To do</option>
                <option value="DOING">Doing</option>
                <option value="DONE">Done</option>
              </select>
            </div>

            <div className="fields">
              <label htmlFor="">Priority</label>
              <select type="text" {...register("label")}>
                <option value=""></option>
                <option value="later">Later</option>
                <option value="important">Important</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            <div className="fields">
              <label htmlFor="">Responsible</label>
              <select type="text" {...register("img")}>
                <option value={none}></option>
                <option value={goku}>Goku</option>
                <option value={gohan}>Gohan</option>
                <option value={vegeta}>Vegeta</option>
              </select>
            </div>
          </div>
          <div className="inner">
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};
