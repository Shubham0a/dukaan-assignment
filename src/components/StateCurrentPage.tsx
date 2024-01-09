import { FunctionComponent } from "react";
import styles from "./StateCurrentPage.module.css";

type StateCurrentPageType = {
  prop?: string;
};

const StateCurrentPage: FunctionComponent<StateCurrentPageType> = ({
  prop,
}) => {
  return (
    <div className={styles.statecurrentPage}>
      <div className={styles.div}>{prop}</div>
    </div>
  );
};

export default StateCurrentPage;
