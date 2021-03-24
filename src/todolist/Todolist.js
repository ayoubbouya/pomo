import React from "react";
import styles from "./styles.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import Count from "./addTask/Count";
function Todolist() {
  return (
    <section className={styles.sectionTime}>
      <p>Time to work!</p>
      <ul className={styles.tasks}>
        <li>Tasks</li>
        <li className={styles.dots}>
          <BsThreeDotsVertical />
        </li>
      </ul>
      <Count />
    </section>
  );
}

export default Todolist;
