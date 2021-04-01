import React from "react";
import useInputState from "./hooks/useInputState";

function EditTodoForm({ id, task, editTodo, toggleEditForm }) {
  const [value, handleChange, reset] = useInputState(task);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          editTodo(id, value);
          reset();
          toggleEditForm();
        }}
        style={{ marginLeft: "1rem", width: "50%" }}
      >
        <input value={value} onChange={handleChange} />
      </form>
    </div>
  );
}

export default EditTodoForm;
