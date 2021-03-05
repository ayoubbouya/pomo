import React, { useState, useRef } from "react";
import Countdown from "react-countdown";
import { Modal, Button } from "react-bootstrap";

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
  const Completionist = () => <span>You are good!</span>;

  // play and pause from button
  const clockRef = useRef();
  const handleStart = () => clockRef.current.start();
  const handlePause = () => clockRef.current.pause();

  // useState for background color of lists
  const { bgColor, setBgColor } = props;
  // play and pause
  const [start, setStart] = useState(true);
  const pause = () => {
    setStart(!start);
  };

  //  useState for numbers "  min "
  const [min, setMin] = useState(
    <Countdown
      autoStart={false}
      ref={clockRef}
      date={Date.now() + 1500000}
      renderer={renderer}
    />
  );
  const changed1 = () => {
    setBgColor(1);
    handlePause();
    setStart(true); // display button start
    setMin(
      <Countdown
        ref={clockRef}
        date={Date.now() + 1500000}
        renderer={renderer}
      />
    );
  };

  const changed2 = () => {
    setBgColor(2);
    handlePause();
    setStart(true); // display button start
    setMin(
      <Countdown
        ref={clockRef}
        date={Date.now() + 300000}
        renderer={renderer}
      />
    );
  };
  const changed3 = () => {
    setBgColor(3);
    handlePause();
    setStart(true); // display button start
    setMin(
      <Countdown
        ref={clockRef}
        date={Date.now() + 900000}
        renderer={renderer}
      />
    );
  };
  // color btn
  // const [colorBtn, setColorBtn] = useState("btnColor");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <section className="counterSection">
        <div className="headCounter">
          {/************************* lists ****************************/}
          <ul className="breakList">
            <li
              className={
                "list" + (bgColor === 1 ? "list listSelected btnColor" : "")
              }
              onClick={() => {
                if (start === false) {
                  handleShow();
                } else {
                  changed1();
                }
              }}
            >
              pomo
            </li>
            <li
              className={"list" + (bgColor === 2 ? "list listSelected" : "")}
              onClick={() => {
                if (start === false) {
                  handleShow();
                } else {
                  changed2();
                }
              }}
            >
              Short break
            </li>
            <li
              className={"list" + (bgColor === 3 ? "list listSelected" : "")}
              onClick={() => {
                if (start === false) {
                  handleShow();
                } else {
                  changed3();
                }
              }}
            >
              long break
            </li>
          </ul>
          <div>
            {/************************* main number of minutes ****************************/}
            <h2 className="titleMin">{min}</h2>

            <Modal show={show} onHide={handleClose} animation={false}>
              <Modal.Body>
                The timer is still running, are you sure you want to switch?
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleClose();
                    if (bgColor === 1) {
                      changed1();
                    } else if (bgColor === 2) {
                      changed2();
                    } else {
                      changed3();
                    }
                  }}
                >
                  OK
                </Button>
              </Modal.Footer>
            </Modal>
            {/************************* button start and pause ****************************/}
            <div className="btn">
              {start ? (
                <div
                  className={
                    "btnStart" +
                    " " +
                    (bgColor === 1
                      ? "btnColor1"
                      : bgColor === 2
                      ? "btnColor2"
                      : bgColor === 3
                      ? "btnColor3"
                      : "")
                  }
                  onClick={() => {
                    pause();
                    handleStart();
                  }}
                >
                  Start
                </div>
              ) : (
                <div
                  className={
                    "btnPause" +
                    " " +
                    (bgColor === 1
                      ? "btnColor1"
                      : bgColor === 2
                      ? "btnColor2"
                      : bgColor === 3
                      ? "btnColor3"
                      : "")
                  }
                  onClick={() => {
                    pause();
                    handlePause();
                  }}
                >
                  Pause
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counter;
