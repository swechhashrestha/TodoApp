import { createContext, useEffect, useReducer } from "react";
import { toast, Bounce } from "react-toastify";
export const TodoContext = createContext();

const getTodo = () => {
  let todos = localStorage.getItem("todoItem");
  return todos ? JSON.parse(todos) : [];
};

const initialState = {
  todoItems: getTodo(),
};
export const TodoReducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const isExist = state.todoItems.find((item) => {
        return item.id == action.payload.id;
      });
      if (isExist) {
        return state;
      } else {
        let newTodoItem = [...state.todoItems, action.payload];
        toast.success("Todo is added !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
        return {
          todoItems: newTodoItem,
        };
      }
    }
    case "delete": {
      const isExist = state.todoItems.filter(
        (item) => item.id !== action.payload.id
      );

      if (!isExist) {
        return state;
      }
      alert("Todo Is Deleted!");
      return todoItems;
    }

    case "update": {
      return state;
    }
    case "deleteAll": {
      return state;
    }
    default: {
      return state;
    }
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  useEffect(() => {
    localStorage.setItem("todoItem", JSON.stringify(state.todoItems));
  });
  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

// todo
// collect the todo
// check the existence (find)
// if not found add to the todo
// if exist do nothing (return)
