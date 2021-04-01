import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodoState from "./components/hooks/useTodoState";

function TodoApp() {
  const initialTodos = [{ id: 1, task: "Walk The Goldfish", completed: true }];
  const {
    todos,
    addTodo,
    removeTodo,
    removeAllTodo,
    toggleTodo,
    editTodo,
  } = useTodoState(initialTodos);

  return (
    <div>
      <TodoForm addTodo={addTodo} removeAllTodo={removeAllTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
}

export default TodoApp;
