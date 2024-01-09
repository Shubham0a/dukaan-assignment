import { FunctionComponent } from "react";
import styles from "./StateNext.module.css";

type StateNextType = {
  outlinedSettings?: string;
};

const StateNext: FunctionComponent<StateNextType> = ({ outlinedSettings }) => {
  return (
    <div className={styles.statenext}>
      <img className={styles.outlinedSettings} alt="" src={outlinedSettings} />
      <div className={styles.buttonText}>
        <div className={styles.sampleText}>Next</div>
      </div>
      <img
        className={styles.outlinedChevronRight}
        alt=""
        src="/outlined--chevron-right.svg"
      />
    </div>
  );
};

export default StateNext;
