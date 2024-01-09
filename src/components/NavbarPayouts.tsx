import { FunctionComponent, useMemo, type CSSProperties } from "react";
import BaseNavigationBar from "./BaseNavigationBar";
import styles from "./NavbarPayouts.module.css";

type NavbarPayoutsType = {
  navbarIcon?: string;
  home?: string;
  navbarIcon1?: string;
  navbarIcon2?: string;

  /** Style props */
  navbarPayoutsHeight?: CSSProperties["height"];
  navbarPayoutsPosition?: CSSProperties["position"];
  navbarPayoutsTop?: CSSProperties["top"];
  navbarPayoutsLeft?: CSSProperties["left"];
  visitStoreFontFamily?: CSSProperties["fontFamily"];
  frameDivBoxSizing?: CSSProperties["boxSizing"];
};

const NavbarPayouts: FunctionComponent<NavbarPayoutsType> = ({
  navbarIcon,
  home,
  navbarIcon1,
  navbarIcon2,
  navbarPayoutsHeight,
  navbarPayoutsPosition,
  navbarPayoutsTop,
  navbarPayoutsLeft,
  visitStoreFontFamily,
  frameDivBoxSizing,
}) => {
  const navbarPayoutsStyle: CSSProperties = useMemo(() => {
    return {
      height: navbarPayoutsHeight,
      position: navbarPayoutsPosition,
      top: navbarPayoutsTop,
      left: navbarPayoutsLeft,
    };
  }, [
    navbarPayoutsHeight,
    navbarPayoutsPosition,
    navbarPayoutsTop,
    navbarPayoutsLeft,
  ]);

  const visitStoreStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: visitStoreFontFamily,
    };
  }, [visitStoreFontFamily]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      boxSizing: frameDivBoxSizing,
    };
  }, [frameDivBoxSizing]);

  return (
    <div className={styles.navbarpayouts} style={navbarPayoutsStyle}>
      <BaseNavigationBar
        dimensionCode="/navbar-icon.svg"
        dimensionCodeImageUrl="/navbar-icon.svg"
        dimensionCodeText="/navbar-icon.svg"
        payoutsText="Payouts"
        dimensionCodeImageText="/navbar-icon.svg"
        dimensionCodeText2="/navbar-icon.svg"
        dimensionCodeImageUrl2="/navbar-icon.svg"
        showBaseNavButton={false}
        baseNavButtonVisible={false}
        visitStoreFontFamily="'Galano Grotesque'"
        navbarIconOpacity="0.8"
        baseNavButtonBackgroundColor="rgba(255, 255, 255, 0.1)"
        navbarIconOpacity1="unset"
        homeOpacity="unset"
        frameDivBoxSizing="border-box"
      />
    </div>
  );
};

export default NavbarPayouts;
