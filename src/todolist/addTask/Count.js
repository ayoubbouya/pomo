import React, { useState } from "react";
import styles from "./styles.module.css";
import { BsPlusCircleFill } from "react-icons/bs";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";

function Count() {
  /************* hide att task button *************/
  const [selectedAddTask, setSelectedAddTask] = useState(false);
  const handelOnClick = () => {
    setSelectedAddTask(!selectedAddTask);
  };
  /* *********************************************************************************** */
  /************* TODOLIST state and useState *************/

  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const listOfTodo = () => {
    setItems((oldItems) => {
      console.log(oldItems);
      return [...oldItems, inputList];
    });
    setInputList("");
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
  /************************************************************************************* */

  return (
    <div>
      {/* Output for Todolist */}
      <ul>
        {Items.map((item, index) => {
          return (
            <li className={styles.output} key={index}>
              {item}
              <BsThreeDotsVertical
                onClick={() => {
                  handelOnClick();
                  setInputList(item);
                }}
                className={styles.dots}
              />{" "}
            </li>
          );
        })}
      </ul>

      {selectedAddTask ? (
        <section className={styles.sectionTodoList}>
          <section>
            {/* Input for Todolist */}
            <input
              type="text"
              placeholder="What are you working on ?"
              className={styles.inputTodo}
              value={inputList}
              onChange={itemEvent}
            />
          </section>
          <h6 className={styles.h6}>Est Pomodoros</h6>
          <section>
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
            {/*********** buttons for Todolist ************/}
            <div className={styles.btnsCancelSave}>
              <button className={styles.btnCancel} onClick={handelOnClick}>
                Cancel
              </button>
              <button className={styles.btnSave} onClick={listOfTodo}>
                Save
              </button>
            </div>
          </section>
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
