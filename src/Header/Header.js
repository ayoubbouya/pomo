import React from "react";
import styles from "./styles.module.css";
import { FaCheckCircle, FaUserAlt } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";

function Header() {
  return (
    <div>
      <header className={styles.header}>
        <h2>
          {" "}
          <FaCheckCircle /> Pomo{" "}
        </h2>
        <ul className={styles.nav}>
          <li className={styles.list}>
            {" "}
            <HiOutlineDocumentReport /> reports
          </li>
          <li className={styles.list}>
            {" "}
            <FiSettings /> settings
          </li>
          <li className={styles.list}>
            <FaUserAlt /> login
          </li>
          <h3> </h3>
        </ul>
      </header>
    </div>
  );
}

export default Header;
