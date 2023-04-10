import { useEffect, useState } from "react";
import "./TodoItem.css";
import { MdCancel } from "react-icons/md";

function TodoItem({ todo, deletedTodo }) {
  const [textDecoration, setTextDecoration] = useState();

  function deleteTodoHandler(e) {
    console.log("deleteTodo called");
    console.log(todo);
    deletedTodo(todo);
  }

  function setItemCheckedHanlder(event) {
    if (event.target.checked) {
      todo.isChecked = true;
      setTextDecoration("strike-through");
    } else {
      todo.isChecked = false;
      setTextDecoration("");
    }
  }
  useEffect(() => {
    if (todo.isChecked) setTextDecoration("strike-through");
    else setTextDecoration("");
  }, [todo.isChecked]);
  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onChange={setItemCheckedHanlder}
        checked={todo.isChecked}
      />

      <label className={textDecoration}>{todo.value}</label>
      <label className="destroy" onClick={deleteTodoHandler}>
        <MdCancel />
      </label>
    </div>
  );
}

export default TodoItem;
