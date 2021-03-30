import React from "react";
import styles from "../styles/tile.module.css";

const Tile = ({ on, index, testIndex, dead }) => {
  return (
    <div
      onClick={(e) => testIndex(index)}
      className={`${on ? styles.on : styles.off} ${dead ? styles.dead : ""}`}
    ></div>
  );
};

export default Tile;
