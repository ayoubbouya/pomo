import React, { useState } from "react";
import Countdown from "react-countdown";

import "./styles.css";
const Counter = (props) => {
  //   countdown timer
  const renderer = ({ formatted: { minutes, seconds, completed } }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  const Completionist = () => <span>You are good to go!</span>;

  // useState for background color of lists
  const { bgColor, setBgColor } = props;
  //  useState for numbers "  min "
  const [min, setMin] = useState("25:00");

  const changed1 = () => {
    setBgColor(1);
    setMin(<Countdown date={Date.now() + 1500000} renderer={renderer} />);
  };

  const changed2 = () => {
    setBgColor(2);
    setMin(<Countdown date={Date.now() + 300000} renderer={renderer} />);
  };
  const changed3 = () => {
    setBgColor(3);
    setMin(<Countdown date={Date.now() + 900000} renderer={renderer} />);
  };
  // play and pause
  const [start, setStart] = useState(false);
  const pause = () => {
    setStart(!start);
  };
  return (
    <div>
      <section className="counterSection">
        <ul className="breakList">
          <li
            className={"list" + (bgColor === "list" ? "bg1" : " ")}
            onClick={changed1}
          >
            pomo
          </li>
          <li
            className={"list" + (bgColor === "list" ? "bg2" : " ")}
            onClick={changed2}
          >
            Short break
          </li>
          <li
            className={"list" + (bgColor === "list" ? "bg3" : " ")}
            onClick={changed3}
          >
            long break
          </li>
        </ul>
        <h1>
          <h2>{min}</h2>
          <button>
            {start ? (
              <span onClick={pause}>Start</span>
            ) : (
              <span onClick={pause}>Pause</span>
            )}
          </button>
        </h1>
      </section>
    </div>
  );
};

export default Counter;
