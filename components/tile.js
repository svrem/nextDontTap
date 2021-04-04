import React from "react";
import styles from "../styles/tile.module.css";
import { useRef } from "react";

const Tile = ({ on, index, testIndex, dead }) => {
  let cords = useRef({});

  const handleClick = (e) => {
    if (cords.current[JSON.stringify([e.clientX, e.clientY])]) {
      cords.current[JSON.stringify([e.clientX, e.clientY])] += 1;
    } else {
      cords.current[JSON.stringify([e.clientX, e.clientY])] = 1;
    }
    // cords.current.push([e.clientX, e.clientY]);
    testIndex(index);

    for (let key in cords.current) {
      if (cords.current[key] / Object.keys(cords.current).length > 2) {
        // alert("MOF niemand mag je");
      }
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`${on ? styles.on : styles.off} ${dead ? styles.dead : ""}`}
    ></div>
  );
};

export default Tile;
