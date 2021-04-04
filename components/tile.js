import React from "react";
import styles from "../styles/tile.module.css";
import { useRef } from "react";

const Tile = ({ on, index, testIndex, dead }) => {
  let cords = useRef({});

  const handleCheat = (e) => {
    if (cords.current[JSON.stringify([e.clientX, e.clientY])]) {
      cords.current[JSON.stringify([e.clientX, e.clientY])] += 1;
    } else {
      cords.current[JSON.stringify([e.clientX, e.clientY])] = 1;
    }

    for (let key in cords.current) {
      if (cords.current[key] / Object.keys(cords.current).length > 2) {
      }
    }
  };

  const handleClick = (e) => {
    testIndex(index);
    handleCheat(e);
  };

  return (
    <div
      onClick={handleClick}
      className={`${on ? styles.on : styles.off} ${dead ? styles.dead : ""}`}
    ></div>
  );
};

export default Tile;
