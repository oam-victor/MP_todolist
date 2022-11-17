import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { myServer } from "./services/server";

myServer();

// axios
//   .post("/api/tasks", {
//     title: "task3",
//     description: "do extra this",
//     status: "todo",
//   })
//   .then((res) => {})
//   .catch((err) => {
//     throw new Error(err);
//   });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
