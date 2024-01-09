import { FunctionComponent } from "react";
import styles from "./OverviewContainer.module.css";

const OverviewContainer: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.overviewParent}>
          <div className={styles.overview}>Overview</div>
          <div className={styles.groupWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <div className={styles.lastMonth}>Last Month</div>
              <img className={styles.iconsarrow} alt="" src="/iconsarrow.svg" />
            </div>
          </div>
        </div>
        <div className={styles.pillsParent}>
          <div className={styles.pills}>
            <img
              className={styles.outlinedSettings}
              alt=""
              src="/outlined--settings.svg"
            />
            <div className={styles.textHere}>Razorpay</div>
            <img
              className={styles.outlinedSettings}
              alt=""
              src="/outlined--settings.svg"
            />
          </div>
          <div className={styles.pills1}>
            <img
              className={styles.outlinedSettings2}
              alt=""
              src="/outlined--settings.svg"
            />
            <div
              className={styles.textHere}
            >{`COD orders (Dukaan Delivery) `}</div>
            <img
              className={styles.outlinedSettings2}
              alt=""
              src="/outlined--settings.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.onlineOrdersParent}>
                <div className={styles.onlineOrders}>Online orders</div>
                <img
                  className={styles.outlinedSettings}
                  alt=""
                  src="/outlined--help.svg"
                />
              </div>
              <div className={styles.div}>231</div>
            </div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameParent1}>
            <div className={styles.onlineOrdersParent}>
              <div className={styles.onlineOrders}>Amount received</div>
              <img
                className={styles.outlinedSettings}
                alt=""
                src="/outlined--help.svg"
              />
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.parent}>
                <div className={styles.div1}>₹23,92,312.19</div>
                <div className={styles.link}>
                  <div className={styles.link1}>View 23 orders</div>
                </div>
              </div>
              <div className={styles.linkParent}>
                <div className={styles.link2}>
                  <div className={styles.link3}>3,231 orders</div>
                </div>
                <img
                  className={styles.outlinedChevronRight}
                  alt=""
                  src="/outlined--chevron-right.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewContainer;
