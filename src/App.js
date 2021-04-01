import React from "react";
import TodoApp from "./TodoApp";
import "./App.css";
import moment from "moment";

const App = () => {
  let time = moment().format("HH");

  return (
    <div className={time < 20 ? "app-container day" : "app-container night"}>
      <TodoApp />
    </div>
  );
};

export default App;
