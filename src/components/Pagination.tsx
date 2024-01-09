import { FunctionComponent } from "react";
import StatePrevious from "./StatePrevious";
import StateCurrentPage from "./StateCurrentPage";
import StateNext from "./StateNext";
import styles from "./Pagination.module.css";

type PaginationType = {
  outlinedSettings?: string;
  outlinedSettings1?: string;
  dots?: boolean;
  previous?: boolean;
  next?: boolean;
};

const Pagination: FunctionComponent<PaginationType> = ({
  outlinedSettings,
  outlinedSettings1,
  dots = true,
  previous = true,
  next = true,
}) => {
  return (
    <div className={styles.pagination}>
      <StatePrevious outlinedSettings="/controls--check-box.svg" />
      <div className={styles.paginationComponentsParent}>
        <div className={styles.paginationComponents}>
          <div className={styles.div}>1</div>
        </div>
        {dots && (
          <div className={styles.paginationComponents}>
            <div className={styles.div}>...</div>
          </div>
        )}
        <StateCurrentPage prop="10" />
        <div className={styles.paginationComponents}>
          <div className={styles.div}>11</div>
        </div>
        <div className={styles.paginationComponents}>
          <div className={styles.div}>12</div>
        </div>
        <div className={styles.paginationComponents}>
          <div className={styles.div}>13</div>
        </div>
        <div className={styles.paginationComponents}>
          <div className={styles.div}>14</div>
        </div>
        <div className={styles.paginationComponents}>
          <div className={styles.div}>15</div>
        </div>
        <div className={styles.paginationComponents}>
          <div className={styles.div}>16</div>
        </div>
        <div className={styles.paginationComponents}>
          <div className={styles.div}>17</div>
        </div>
        <div className={styles.paginationComponents}>
          <div className={styles.div}>18</div>
        </div>
      </div>
      <StateNext outlinedSettings="/controls--check-box.svg" />
    </div>
  );
};

export default Pagination;
