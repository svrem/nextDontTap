import styles from "../styles/livebar.module.css";

const liveBar = ({ percentage, dead, ready }) => {
  return (
    <div className={styles.outer}>
      <div
        style={{
          width: `${percentage}%`,
          backgroundColor:
            percentage === 100 && ready ? "gold" : dead ? "red" : "lightBlue",
        }}
        className={styles.inner}
      ></div>
    </div>
  );
};

export default liveBar;
