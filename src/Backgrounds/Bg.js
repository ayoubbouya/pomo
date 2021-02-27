import React from "react";
import Counter from "../Counter/Counter";
import Header from "../Header/Header";

// import styles from "./styles.module.css";
function Bg() {
  const [selectedTab, setSelectedTab] = React.useState(0);
  return (
    <div>
      <section
        className={
          selectedTab === 1
            ? "bg1"
            : selectedTab === 2
            ? "bg2"
            : selectedTab === 3
            ? "bg3"
            : ""
        }
      >
        <Header />
        <Counter selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      </section>
    </div>
  );
}

export default Bg;
