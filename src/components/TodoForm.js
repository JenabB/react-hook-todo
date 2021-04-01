import React from "react";
import useInputState from "./hooks/useInputState";

import Time from "./Time";
import moment from "moment";

const TodoForm = ({ addTodo, removeAllTodo }) => {
  const [value, handleChange, reset] = useInputState("");
  let time = moment().format("HH");
  return (
    <div className={time < 20 ? "form-container day" : "form-container night"}>
      <Time />
      <button onClick={removeAllTodo}>Delete All</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <input
          value={value}
          onChange={handleChange}
          placeholder="i want to..."
          required
        />
      </form>
    </div>
  );
};

export default TodoForm;
