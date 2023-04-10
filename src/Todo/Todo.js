import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import "./Todo.css";
import { useState } from "react";

function Todo() {
  const todos = [];
  const [data, setData] = useState(todos);

  function addData(newData) {
    setData((prevData) => {
      return [newData, ...prevData];
    });
  }

  function deleteTodoHandler(deletedData) {
    console.log("deleteTodoHandler", deletedData);
    setData((prevData) => {
      prevData = prevData.filter((todo) => todo.id !== deletedData.id);

      return [...prevData];
    });
  }

  function todoFilterHandle(value) {
    console.log(value, "in todo filter > TODO Component");
    setData((prevData) => {
      prevData = prevData.filter((todo) => (todo.isChecked = value));
      console.log(prevData);
      return [...prevData];
    });
  }

  function deleteMultipleHandler() {
    const newData = data.filter((todo) => todo.isChecked === false);
    setData([...newData]);
  }

  return (
    <div className="todo-container">
      <h1>TODO APPLICATION</h1>
      <TodoForm data={addData} length={data.length}></TodoForm>
      <TodoList
        todos={data}
        removeTodo={deleteTodoHandler}
        todoCheck={todoFilterHandle}
      />
      {data.length > 0 && (
        <footer className="todo-footer">
          <span>
            {data.length}{" "}
            {data.length > 1 ? <span>Items Left</span> : <span>Item left</span>}
          </span>
          <span className="footer-clearAll" onClick={deleteMultipleHandler}>
            Clear completed items
          </span>
        </footer>
      )}
    </div>
  );
}

export default Todo;
