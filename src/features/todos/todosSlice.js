const initialState = [
  {
    id: 1,
    text: "20 Rollen Klopapier 🧻",
    done: false,
  },
  {
    id: 2,
    text: "3 kg. Mehl",
    done: false,
  },
  {
    id: 3,
    text: "5 Hamster 🐹",
    done: false,
  },
  {
    id: 4,
    text: "4 Pkg. Nudeln",
    done: false,
  },
  {
    id: 5,
    text: "8 kg. Reis 🍚",
    done: false,
  },
];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/add": {
      return [
        ...state,
        {
          id: nextTodoId(state),
          text: action.payload,
          done: false,
        },
      ];
    }
    case "todos/toggle": {
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          done: !todo.done,
        };
      });
    }
    case "todos/remove": {
      return state.filter((todo) => todo.id !== parseInt(action.payload));
    }
    default:
      return state;
  }
}
