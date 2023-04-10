import React, { useState } from "react";

function TodoForm({ data, length }) {
  const [enteredValue, setEnteredValue] = useState("");

  const getFormData = (event) => {
    event.preventDefault();
    console.log("submited form");
    console.log(enteredValue);
    const todo = {
      id: length + 1,
      value: enteredValue,
      isChecked: false,
    };

    data(todo);

    setEnteredValue("");
  };
  return (
    <>
      <form onSubmit={getFormData}>
        <input
          className="form-control"
          type="text"
          onChange={(e) => setEnteredValue(e.target.value)}
          value={enteredValue}
        />
      </form>
    </>
  );
}

export default TodoForm;
