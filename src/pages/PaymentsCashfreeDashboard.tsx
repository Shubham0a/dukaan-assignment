import { FunctionComponent } from "react";
import BackArrowFalseHelpTrueS from "../components/BackArrowFalseHelpTrueS";
import OverviewContainer from "../components/OverviewContainer";
import TransactionFilterContainer from "../components/TransactionFilterContainer";
import NavbarPayouts from "../components/NavbarPayouts";
import styles from "./PaymentsCashfreeDashboard.module.css";

const PaymentsCashfreeDashboard: FunctionComponent = () => {
  return (
    <div className={styles.paymentsCashfreeDashboard}>
      <BackArrowFalseHelpTrueS
        dashboard="Payments"
        iconsOutlinedInfo="/outlined--help.svg"
        howToUse="How it works"
        backArrowFalseHelpTrueSPosition="absolute"
        backArrowFalseHelpTrueSTop="0px"
        backArrowFalseHelpTrueSLeft="224px"
        dashboardFontSize="15px"
        dashboardLineHeight="22px"
        dashboardFontWeight="unset"
        dashboardFontFamily="Inter"
        howToUseFontFamily="Inter"
        searchFeaturesTutorialsFontFamily="Inter"
      />
      <div className={styles.frameParent}>
        <OverviewContainer />
        <div className={styles.transactionsThisMonthParent}>
          <div className={styles.transactionsThis}>
            Transactions | This Month
          </div>
          <div className={styles.stripSingelineCaution}>
            <div className={styles.iconWithText}>
              <img
                className={styles.filledInfo}
                alt=""
                src="/filled--info.svg"
              />
              <div className={styles.text}>
                Payouts for the orders that are processed by Cashfree Payments.
              </div>
            </div>
            <div className={styles.cta}>
              <div className={styles.link}>
                <div className={styles.link1}>CTA</div>
              </div>
              <img
                className={styles.outlinedCross}
                alt=""
                src="/outlined--cross.svg"
              />
            </div>
          </div>
          <TransactionFilterContainer />
        </div>
      </div>
      <NavbarPayouts
        navbarIcon="/navbar-icon.svg"
        home="Payments"
        navbarIcon1="/navbar-icon.svg"
        navbarIcon2="/navbar-icon.svg"
        navbarPayoutsHeight="1482px"
        navbarPayoutsPosition="absolute"
        navbarPayoutsTop="0px"
        navbarPayoutsLeft="0px"
        visitStoreFontFamily="Inter"
        frameDivBoxSizing="border-box"
      />
    </div>
  );
};

export default PaymentsCashfreeDashboard;
