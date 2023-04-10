import TodoItem from "./TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const { todos, removeTodo, todoCheck } = props;

  function selectAllHanlder(e) {
    console.log(e.target.checked);
    todoCheck(e.target.checked);
  }
  function deletePresentTodo(newData) {
    console.log(newData + "in todo list");
    removeTodo(newData);
  }

  return (
    <div>
      {todos.length > 0 && (
        <div className="mark-all-container">
          <input
            type="checkbox"
            id="selectAllChecked"
            onChange={selectAllHanlder}
          ></input>
          <label htmlFor="selectAllChecked"> Mark all as complete</label>
        </div>
      )}
      <ul className="todo-list">
        {todos &&
          todos.map((todo) => {
            return (
              <li key={todo.id}>
                <TodoItem todo={todo} deletedTodo={deletePresentTodo} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default TodoList;
