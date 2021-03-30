import styles from "../styles/livebar.module.css";
import { useEffect } from "react";

const liveBar = ({ percentage, dead }) => {
  return (
    <div className={styles.outer}>
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor: dead ? "red" : "lightBlue",
        }}
        className={styles.inner}
      ></div>
    </div>
  );
};

export default liveBar;
