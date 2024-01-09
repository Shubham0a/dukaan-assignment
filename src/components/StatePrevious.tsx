import { FunctionComponent } from "react";
import styles from "./StatePrevious.module.css";

type StatePreviousType = {
  outlinedSettings?: string;
};

const StatePrevious: FunctionComponent<StatePreviousType> = ({
  outlinedSettings,
}) => {
  return (
    <div className={styles.stateprevious}>
      <img className={styles.outlinedSettings} alt="" src={outlinedSettings} />
      <img
        className={styles.outlinedChevronRight}
        alt=""
        src="/outlined--chevron-right.svg"
      />
      <div className={styles.buttonText}>
        <div className={styles.sampleText}>Previous</div>
      </div>
    </div>
  );
};

export default StatePrevious;
