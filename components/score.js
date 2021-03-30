import styles from "../styles/score.module.css";

const score = ({ score }) => {
  return (
    <div>
      <h2 className={styles.scoreName}>Score</h2>
      <h1 className={styles.score}>{score}</h1>
    </div>
  );
};

export default score;
