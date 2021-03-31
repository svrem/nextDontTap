import React from "react";
import Score from "../components/score";
import styles from "../styles/Home.module.css";
import LiveBar from "../components/liveBar";
import Game from "../components/game";
import { useState } from "react";

const index = () => {
  const [score, setScore] = useState(0);
  const [percentage, setPercentage] = useState(100);
  const [dead, setDead] = useState(false);
  const [ready, setReady] = useState(false);

  return (
    <div>
      <div className={styles.upper}>
        <Score score={score} />
      </div>
      <div className={styles.game}>
        <Game
          percentage={percentage}
          setPercentage={setPercentage}
          setScore={setScore}
          score={score}
          dead={dead}
          setDead={setDead}
          ready={ready}
          setReady={setReady}
        />
      </div>
      <LiveBar ready={ready} percentage={percentage} dead={dead} />
    </div>
  );
};

export default index;
