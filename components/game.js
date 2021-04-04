import React from "react";
import Tile from "./tile";
import styles from "../styles/board.module.css";
import { useState, useEffect } from "react";

const game = ({
  setScore,
  score,
  percentage,
  setPercentage,
  dead,
  setDead,
  ready,
  setReady,
}) => {
  const randomBoard = (startingPieces) => {
    let newBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < startingPieces; i++) {
      let newTile = Math.floor(Math.random() * 16);
      do {
        newTile = Math.floor(Math.random() * 16);
      } while (newBoard[newTile]);
      newBoard[newTile] = 1;
    }
    return newBoard;
  };
  const speed = 250;
  const percentageReduction = 5;
  const percentageIncrement = 10;
  // Get this done motherfucker
  let deadDate = 0;
  const deadPause = 2.5;
  // ==========================

  const [board, setBoard] = useState([
    0,
    0,
    1,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
  ]);

  useEffect(() => {
    setBoard(randomBoard(3));
  }, []);

  useEffect(() => {
    if (ready) {
      const reducePercentage = setInterval(() => {
        if (!dead) {
          setPercentage(percentage - percentageReduction);
          if (percentage < 1) {
            setTimeout(() => {
              setDead(true);
            }, speed);
          }
        }
      }, speed);
      return () => clearInterval(reducePercentage);
    }
  });

  useEffect(() => {
    setBoard(randomBoard(3));
  }, []);

  // if (time < 1) {
  //   setDead(true);
  // }

  const testIndex = (index) => {
    if (dead) {
      setScore(0);
      setPercentage(100);
      setDead(false);
      setBoard(randomBoard(3));
      setReady(false);
      return;
    }

    if (index !== null && !dead) {
      if (board[index]) {
        const newBoard = board;
        let newTile = index;
        //   console.log(newBoard[index]);
        do {
          newTile = Math.floor(Math.random() * 16);
        } while (newBoard[newTile]);

        newBoard[newTile] = 1;

        newBoard[index] = 0;

        const newScore = score + (percentage > 99 ? 2 : 1);

        setScore(newScore);

        setReady(true);

        if (percentage + percentageIncrement <= 100) {
          setPercentage(percentage + percentageIncrement);
        } else {
          setPercentage(100);
        }
        setBoard([...newBoard]);
      } else {
        // deadDate = Date.now();
        // console.log(`Dead Date before: ${deadDate}`);
        setDead(true);
      }
    }
  };
  return (
    <div className={styles.board}>
      {board.map((tile, index) => (
        <Tile
          testIndex={testIndex}
          index={index}
          on={tile}
          key={index.toString()}
          dead={dead}
        />
      ))}
    </div>
  );
};

export default game;
