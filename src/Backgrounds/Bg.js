import React from "react";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";
import Todolist from "../todolist/Todolist";

// import styles from "./styles.module.css";
function Bg() {
  const [bgColor, setBgColor] = React.useState(1);
  return (
    <div>
      <section
        className={
          bgColor === 1
            ? "bg1"
            : bgColor === 2
            ? "bg2"
            : bgColor === 3
            ? "bg3"
            : ""
        }
      >
        <Header />
        <Counter bgColor={bgColor} setBgColor={setBgColor} />
        <Todolist />
      </section>
    </div>
  );
}

export default Bg;
