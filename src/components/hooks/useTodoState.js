import { useLocalStorageState } from "./useLocalStorageState";
import { v4 } from "uuid";
// eslint-disable-next-line import/no-anonymous-default-export
export default (initialTodos) => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);
  return {
    todos,
    addTodo: (newTodoText) => {
      setTodos([...todos, { id: v4(), task: newTodoText, completed: false }]);
    },
    removeTodo: (todoId) => {
      //filter out removed todo
      const updatedTodos = todos.filter((todo) => todo.id !== todoId);
      //call setTodos with new todos array
      setTodos(updatedTodos);
    },

    removeAllTodo: () => {
      //filter out removed todo
      const updatedTodos = [];
      //call setTodos with new todos array
      setTodos(updatedTodos);
    },
    toggleTodo: (todoId) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodos);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodos = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodos);
    },
  };
};
