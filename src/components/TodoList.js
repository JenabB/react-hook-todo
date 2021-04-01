import React from "react";
import Todo from "./Todo";

import moment from "moment";

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  let dayCreate = moment().format("MMM Do YY,dddd");

  return (
    <div>
      {todos.length > 0 ? (
        <div className="todo-list-container">
          <div style={{ padding: "0 10px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h1 style={{ fontSize: "12px" }}>{dayCreate}</h1>
            </div>

            {todos.map((todo, i) => (
              // To add a key to a fragment, we have to use the long-hand version
              // rather than <> </>, we have to use <React.Fragment>
              <React.Fragment key={i}>
                <Todo
                  {...todo}
                  key={todo.id}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                  editTodo={editTodo}
                />
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <div className="todo-list-container">
          <div style={{ padding: "0 10px" }}>
            <h1>No Todos</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoList;
