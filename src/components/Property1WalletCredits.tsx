import { FunctionComponent } from "react";
import styles from "./Property1WalletCredits.module.css";

const Property1WalletCredits: FunctionComponent = () => {
  return (
    <div className={styles.property1walletCredits}>
      <div className={styles.frameParent}>
        <div className={styles.outlineWalletWrapper}>
          <img
            className={styles.outlineWallet}
            alt=""
            src="/outline--wallet@2x.png"
          />
        </div>
        <div className={styles.availableCreditsParent}>
          <div className={styles.availableCredits}>Available credits</div>
          <div className={styles.div}>222.10</div>
        </div>
      </div>
    </div>
  );
};

export default Property1WalletCredits;
