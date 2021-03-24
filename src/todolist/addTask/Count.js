import React, { useState } from "react";
import styles from "./styles.module.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import TodoList from "../GTodo/TodoList";

function Count() {
  /************* hide att task button *************/
  const [selectedAddTask, setSelectedAddTask] = useState(false);
  const handelOnClick = () => {
    setSelectedAddTask(!selectedAddTask);
  };
  /************* count useState increment and decrement from buttons *************/
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(parseInt(count) + 1);
  };

  const decrement = () => {
    /*only positive numbers*/
    if (count > 0) setCount(parseInt(count) - 1);
  };
  /************************************************************************************* */

  return (
    <div>
      {/* Output for Todolist */}
      {selectedAddTask ? (
        <section className={styles.sectionTodoList}>
          {/* input for numbers */}
          <input
            type="number"
            name="clicks"
            value={count}
            min="0"
            onChange={(e) => {
              setCount(e.target.valueInput);
            }}
            className={styles.inputNum}
          />
          {/*  increment and decrement from buttons */}
          <button className={styles.btnIncrement} onClick={increment}>
            <RiArrowUpSFill />
          </button>
          <button className={styles.btnDecrement} onClick={decrement}>
            <RiArrowDownSFill />
          </button>
          <br />
          <TodoList />
          <button className={styles.btnCancel} onClick={handelOnClick}>
            Cancel
          </button>
        </section>
      ) : (
        <div>
          <button onClick={handelOnClick} className={styles.btn}>
            <BsPlusCircleFill className={styles.iconPlus} />
            add task
          </button>
        </div>
      )}
    </div>
  );
}

export default Count;
