import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HowToUse.module.css";

type HowToUseType = {
  iconsOutlinedInfo?: string;
  howToUse?: string;

  /** Style props */
  howToUseFontFamily?: CSSProperties["fontFamily"];
};

const HowToUse: FunctionComponent<HowToUseType> = ({
  iconsOutlinedInfo,
  howToUse,
  howToUseFontFamily,
}) => {
  const howToUseStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: howToUseFontFamily,
    };
  }, [howToUseFontFamily]);

  return (
    <div className={styles.howToUse}>
      <img
        className={styles.iconsOutlinedInfo}
        alt=""
        src={iconsOutlinedInfo}
      />
      <div className={styles.howToUse1} style={howToUseStyle}>
        {howToUse}
      </div>
    </div>
  );
};

export default HowToUse;
