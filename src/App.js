import "./App.css";

import { useEffect, useState } from "react";

import Cookie from "./components/Cookie";
import Finished from "./components/Finished";
import Footer from "./components/Footer";
import ReactGA from "react-ga";
import TodoList from "./components/TodoList";
import { useSelector } from "react-redux";

const selectTodos = (state) => state.todos;

function App() {
  const todos = useSelector(selectTodos);

  useEffect(() => {
    ReactGA.initialize("UA-949604-23", {
      anonymizeIp: true,
    });
    ReactGA.pageview(window.location.pathname);
  }, []);

  const [finished, setFinished] = useState(false);

  useEffect(() => {
    todos.filter((el) => el.done === false).length === 0
      ? setFinished(true)
      : setFinished(false);
  }, [todos]);

  return (
    <div className="app">
      <h1>Lockdown Einkaufsliste</h1>
      <Finished show={finished} />
      <TodoList />
      <Footer />
      <Cookie />
    </div>
  );
}

export default App;
