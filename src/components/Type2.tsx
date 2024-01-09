import { FunctionComponent } from "react";
import styles from "./Type2.module.css";

const Type2: FunctionComponent = () => {
  return (
    <div className={styles.type2}>
      <img className={styles.iconsMenu} alt="" src="/icons--menu.svg" />
      <img className={styles.iconsMenu} alt="" src="/icons--menu.svg" />
    </div>
  );
};

export default Type2;
