import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "../contextApi/TodoProvider";

function ToDo() {
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");

  const { state, dispatch } = useContext(TodoContext);
  const addTodo = () => {
    if (title.length <= 0) {
      setTitleError("Plz, enter the todo*");
      return;
    }
    console.log(title);

    dispatch({
      type: "add",
      payload: {
        id: uuidv4(),
        title: title,
      },
    });
    setTitle("");
    setTitleError("");
  }


  const deleteTodo = () => {
    dispatch({
      type: "delete",
       payload: {
        id: uuidv4(),
        title: title,
      },
    });
  }

    return (
      <div className="bg-pink-100 p-10 w-[700px]  m-auto mt-20 flex flex-col  ">
        <div className=" p-5  space-x-3 flex  justify-center ">
          <div>
          <input
            onChange={(e) => {
              setTitle(e.target.value)
              value = { title }
            }}
            className="outline-none border w-[400px] p-3 h-10 rounded-sm" type="text" placeholder="Enter todo..." />
          {titleError.length > 0 && (
            <p className="text-red-600 italic p-2">{titleError}</p>
          )}
          </div>
          <button
            onClick={() => {
              addTodo();
            }}
            className="bg-pink-500 text-white w-20 rounded-md hover:bg-pink-400 hover:text-gray-600  h-10" >Add todo</button>
        </div>
        <div className=" p-2 space-y-5">
          {state.todoItems.length > 0 ? (
            <>
              {state.todoItems.map((item) => {
                return (

                  <div key={item.id} className="todo1  shadow-2xl shadow-gray-100 bg-white rounded-sm p-2.5 flex  items-center  justify-between  ">
                    <div className="font-serif">{item.title}</div>

                    <div className="space-x-3">
                      <button className="bg-pink-500  p-1 w-15 text-white rounded-sm hover:bg-pink-400 hover:text-gray-600">
                        Edit
                      </button>
                          <button
                            onClick={() => {
                              deleteTodo(item.id)
                            }}
                            className="bg-purple-500 p-1 w-15 text-white rounded-sm hover:bg-purple-400 hover:text-gray-600">
                            Delete
                          </button>
                       
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <div className="w-96 m-auto p-4 text-2xl flex gap-4 justify-center items-center">
               <h1 className="font-semibold italic">There is no todo to show</h1>
               <img width="30" src="https://www.freeiconspng.com/uploads/sad-emoji-png-8.png" alt=""/>
               !
               </div>
          )}
        </div>
      </div>
    );
  }

  export default ToDo

