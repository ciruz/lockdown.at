import { useEffect, useRef, useState } from "react";

import { ReactComponent as Add } from "../icons/add.svg";
import { useDispatch } from "react-redux";

function TodoForm() {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const inputContainer = useRef(null);

  const classes = ["error", "wiggle"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.trim()) {
      inputContainer.current.classList.add(...classes);

      setTimeout(() => {
        inputContainer.current.classList.remove("wiggle");
      }, 1000);

      return;
    }

    dispatch({ type: "todos/add", payload: value });

    setValue("");
  };

  useEffect(() => {
    inputContainer.current.classList.remove(...classes);
  }, [value]);

  return (
    <form className="todo-form" ref={inputContainer} onSubmit={handleSubmit}>
      <div className="add-todo">
        <input
          type="text"
          value={value}
          placeholder="Eintrag hinzufügen..."
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="add" title="Eintrag hinzufügen" onClick={handleSubmit}>
          <Add />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
