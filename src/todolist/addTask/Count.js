import React, { useState } from "react";
import styles from "./styles.module.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";

function Count() {
  const [selectedAddTask, setSelectedAddTask] = useState(false);
  const handelOnClick = () => {
    setSelectedAddTask(!selectedAddTask);
  };
  /* *********************************************************************************** */
  /************* TODOLIST state and useState *************/

  const [value, setValue] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setValue(event.target.value);
  };
  const listOfTodo = () => {
    setItems((oldItems) => {
      return [...oldItems, value];
    });
  };
  /* ************************************************************************************ */
  /************* count useState increment and decrement from buttons *************/
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(parseInt(count) + 1);
  };

  const decrement = () => {
    /*only positive numbers*/
    if (count > 0) setCount(parseInt(count) - 1);
  };

  return (
    <div>
      <button onClick={handelOnClick} className={styles.btn}>
        <BsPlusCircleFill className={styles.iconPlus} />
        add task
      </button>
      {/* Output for Todolist */}
      <ul className={styles.output}>
        {Items.map((item) => {
          return <li> {item} </li>;
        })}
      </ul>
      {selectedAddTask ? (
        <section className={styles.sectionTodoList}>
          <section>
            {/* Input for Todolist */}
            <input
              onChange={itemEvent}
              type="text"
              placeholder="what are you working on ?"
            />
          </section>
          <h6>Est Pomodoros</h6>
          {/* input for numbers */}
          <input
            type="number"
            name="clicks"
            value={count}
            min="0"
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          {/*  increment and decrement from buttons */}
          <button onClick={increment}>
            <RiArrowUpSFill />
          </button>
          <button onClick={decrement}>
            <RiArrowDownSFill />
          </button>
          {/*********** buttons for Todolist ************/}
          <button>cancel</button>
          <button onClick={listOfTodo}>save</button> 
        </section>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Count;
