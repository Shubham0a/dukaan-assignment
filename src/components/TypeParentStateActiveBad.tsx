import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TypeParentStateActiveBad.module.css";

type TypeParentStateActiveBadType = {
  itemCode?: string;
  pageTitle?: string;

  /** Style props */
  typeParentStateActiveBadBackgroundColor?: CSSProperties["backgroundColor"];
  navbarIconOpacity?: CSSProperties["opacity"];
  homeOpacity?: CSSProperties["opacity"];
};

const TypeParentStateActiveBad: FunctionComponent<
  TypeParentStateActiveBadType
> = ({
  itemCode,
  pageTitle,
  typeParentStateActiveBadBackgroundColor,
  navbarIconOpacity,
  homeOpacity,
}) => {
  const typeParentStateActiveBadStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: typeParentStateActiveBadBackgroundColor,
    };
  }, [typeParentStateActiveBadBackgroundColor]);

  const navbarIcon2Style: CSSProperties = useMemo(() => {
    return {
      opacity: navbarIconOpacity,
    };
  }, [navbarIconOpacity]);

  const home1Style: CSSProperties = useMemo(() => {
    return {
      opacity: homeOpacity,
    };
  }, [homeOpacity]);

  return (
    <div
      className={styles.typeparentStateactiveBad}
      style={typeParentStateActiveBadStyle}
    >
      <img
        className={styles.navbarIcon}
        alt=""
        src={itemCode}
        style={navbarIcon2Style}
      />
      <div className={styles.home} style={home1Style}>
        {pageTitle}
      </div>
    </div>
  );
};

export default TypeParentStateActiveBad;
