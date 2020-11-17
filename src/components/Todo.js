import { ReactComponent as Check } from "../icons/check.svg";
import { ReactComponent as Remove } from "../icons/remove.svg";
import { useDispatch } from "react-redux";

function Todo({ todo }) {
  const dispatch = useDispatch();

  const complete = (id) => {
    dispatch({ type: "todos/toggle", payload: id });
  };

  const remove = (id) => {
    dispatch({ type: "todos/remove", payload: id });
  };

  return (
    <li
      className={`todo ${todo.done ? "done" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        complete(todo.id);
      }}
    >
      <div
        className="checkbox"
        title="Abschließen"
        onClick={(e) => {
          e.stopPropagation();
          complete(todo.id);
        }}
      />
      <div className="check">
        <Check width="20" height="20" />
      </div>
      <div
        className="text"
        onClick={(e) => {
          e.stopPropagation();
          complete(todo.id);
        }}
      >
        {todo.text}
      </div>
      <button
        className="remove"
        title="Entfernen"
        onClick={(e) => {
          e.stopPropagation();
          remove(todo.id);
        }}
      >
        <Remove />
      </button>
    </li>
  );
}

export default Todo;
