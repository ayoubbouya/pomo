import React from "react";
import "./styles.css";
const Counter = (props) => {
  const { selectedTab, setSelectedTab } = props;

  const changed1 = () => {
    setSelectedTab(1);
  };

  const changed2 = () => {
    setSelectedTab(2);
  };
  const changed3 = () => {
    setSelectedTab(3);
  };

  return (
    <div>
      <section className="counterSection">
        <ul className="breakList">
          <li
            className={"list" + " " + (selectedTab === 1 ? "bg1" : null)}
            onClick={changed1}
          >
            pomo
          </li>
          <li
            className={"list" + " " + (selectedTab === 2 ? "bg2" : "")}
            onClick={changed2}
          >
            Short break
          </li>
          <li
            className={"list" + " " + (selectedTab === 3 ? "bg3" : "")}
            onClick={changed3}
          >
            long break
          </li>
        </ul>
        <h1>25:00</h1>
        <button>start</button>
      </section>
    </div>
  );
};

export default Counter;
