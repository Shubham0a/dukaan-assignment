import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BaseNavigationBar.module.css";

type BaseNavigationBarType = {
  dimensionCode?: string;
  dimensionCodeImageUrl?: string;
  dimensionCodeText?: string;
  payoutsText?: string;
  dimensionCodeImageText?: string;
  dimensionCodeText2?: string;
  dimensionCodeImageUrl2?: string;
  showBaseNavButton?: boolean;
  baseNavButtonVisible?: boolean;

  /** Style props */
  visitStoreFontFamily?: CSSProperties["fontFamily"];
  navbarIconOpacity?: CSSProperties["opacity"];
  baseNavButtonBackgroundColor?: CSSProperties["backgroundColor"];
  navbarIconOpacity1?: CSSProperties["opacity"];
  homeOpacity?: CSSProperties["opacity"];
  frameDivBoxSizing?: CSSProperties["boxSizing"];
};

const BaseNavigationBar: FunctionComponent<BaseNavigationBarType> = ({
  dimensionCode,
  dimensionCodeImageUrl,
  dimensionCodeText,
  payoutsText,
  dimensionCodeImageText,
  dimensionCodeText2,
  dimensionCodeImageUrl2,
  showBaseNavButton,
  baseNavButtonVisible,
  visitStoreFontFamily,
  navbarIconOpacity,
  baseNavButtonBackgroundColor,
  navbarIconOpacity1,
  homeOpacity,
  frameDivBoxSizing,
}) => {
  const visitStoreStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: visitStoreFontFamily,
    };
  }, [visitStoreFontFamily]);

  const navbarIconStyle: CSSProperties = useMemo(() => {
    return {
      opacity: navbarIconOpacity,
    };
  }, [navbarIconOpacity]);

  const baseNavButtonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: baseNavButtonBackgroundColor,
    };
  }, [baseNavButtonBackgroundColor]);

  const navbarIcon1Style: CSSProperties = useMemo(() => {
    return {
      opacity: navbarIconOpacity1,
    };
  }, [navbarIconOpacity1]);

  const homeStyle: CSSProperties = useMemo(() => {
    return {
      opacity: homeOpacity,
    };
  }, [homeOpacity]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: frameDivBoxSizing,
    };
  }, [frameDivBoxSizing]);

  return (
    <div className={styles.basenavigationBar}>
      <div className={styles.navTop}>
        <div className={styles.companyIconImage}>
          <div className={styles.companyIconImageChild} />
          <div className={styles.nishyanParent}>
            <div className={styles.nishyan}>Nishyan</div>
            <div className={styles.visitStore} style={visitStoreStyle}>
              Visit store
            </div>
          </div>
          <img className={styles.imageIcon} alt="" src="/image@2x.png" />
          <img
            className={styles.boldChevronDown}
            alt=""
            src="/bold--chevron-down.svg"
          />
        </div>
        <div className={styles.pages}>
          <div className={styles.basenavButton}>
            <img
              className={styles.navbarIcon}
              alt=""
              src={dimensionCode}
              style={navbarIconStyle}
            />
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.basenavButton}>
            <img className={styles.navbarIcon1} alt="" src="/navbar-icon.svg" />
            <div className={styles.home}>Orders</div>
          </div>
          <div className={styles.basenavButton}>
            <img
              className={styles.navbarIcon1}
              alt=""
              src={dimensionCodeImageUrl}
            />
            <div className={styles.home}>Products</div>
          </div>
          <div className={styles.basenavButton}>
            <img className={styles.navbarIcon1} alt="" src="/navbar-icon.svg" />
            <div className={styles.home}>Delivery</div>
          </div>
          <div className={styles.basenavButton}>
            <img className={styles.navbarIcon1} alt="" src="/navbar-icon.svg" />
            <div className={styles.home}>Marketing</div>
          </div>
          <div className={styles.basenavButton}>
            <img className={styles.navbarIcon1} alt="" src="/navbar-icon.svg" />
            <div className={styles.home}>Analytics</div>
          </div>
          <div className={styles.basenavButton} style={baseNavButtonStyle}>
            <img
              className={styles.navbarIcon1}
              alt=""
              src={dimensionCodeText}
              style={navbarIcon1Style}
            />
            <div className={styles.home} style={homeStyle}>
              {payoutsText}
            </div>
          </div>
          <div className={styles.basenavButton}>
            <img className={styles.navbarIcon1} alt="" src="/navbar-icon.svg" />
            <div className={styles.home}>Tools</div>
          </div>
          <div className={styles.basenavButton}>
            <img className={styles.navbarIcon1} alt="" src="/navbar-icon.svg" />
            <div className={styles.home}>Discounts</div>
          </div>
          <div className={styles.basenavButton}>
            <img className={styles.navbarIcon1} alt="" src="/navbar-icon.svg" />
            <div className={styles.home}>Audience</div>
          </div>
          {showBaseNavButton && (
            <div className={styles.basenavButton}>
              <img
                className={styles.navbarIcon1}
                alt=""
                src={dimensionCodeImageText}
              />
              <div className={styles.home}>Affiliates</div>
            </div>
          )}
          {baseNavButtonVisible && (
            <div className={styles.basenavButton}>
              <img
                className={styles.navbarIcon1}
                alt=""
                src={dimensionCodeText2}
              />
              <div className={styles.home}>Vendors</div>
            </div>
          )}
          <div className={styles.basenavButton}>
            <img className={styles.navbarIcon1} alt="" src="/navbar-icon.svg" />
            <div className={styles.home}>Appearance</div>
          </div>
          <div className={styles.basenavButton}>
            <img
              className={styles.navbarIcon1}
              alt=""
              src={dimensionCodeImageUrl2}
            />
            <div className={styles.home}>Plugins</div>
          </div>
        </div>
      </div>
      <div className={styles.basenavBottom}>
        <div className={styles.frameParent}>
          <div className={styles.outlineWalletWrapper} style={frameDivStyle}>
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
    </div>
  );
};

export default BaseNavigationBar;
