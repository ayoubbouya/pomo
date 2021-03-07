import React from "react";
import styles from "./styles.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";

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
    </section>
  );
}

export default Todolist;
