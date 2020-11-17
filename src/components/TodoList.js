import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { useSelector } from "react-redux";

const selectTodos = (state) => state.todos;

function TodoList() {
  const todos = useSelector(selectTodos);

  return (
    <>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} />
        ))}
      </ul>
      <TodoForm />
    </>
  );
}

export default TodoList;
