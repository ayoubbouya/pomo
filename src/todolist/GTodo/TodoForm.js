import React, { useState, useEffect, useRef } from "react";
import todoform from "./todoform.module.css";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className={todoform.sectionTodoList}>
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className={todoform.inputTodo}
          />
          <button onClick={handleSubmit} className={todoform.btnSave}>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="What are you working on ?"
            value={input}
            onChange={handleChange}
            name="text"
            className={todoform.inputTodo}
            ref={inputRef}
          />
          <br />
          <h6 className={todoform.h6}>Est Pomodoros</h6>
          <button onClick={handleSubmit} className={todoform.btnSave}>
            Save
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
