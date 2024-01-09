import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TypeLink.module.css";

type TypeLinkType = {
  thumbnail?: string;
  controlsCheckBox?: string;
  outlinedWhatsApp?: string;
  text?: string;
  outlinedWhatsApp1?: string;
  image?: boolean;
  iconRight?: boolean;
  twoLineText?: boolean;
  italics?: boolean;
  iconLeft?: boolean;
  threeLineText?: boolean;
  checkbox?: boolean;

  /** Style props */
  sampleDataFontFamily?: CSSProperties["fontFamily"];
};

const TypeLink: FunctionComponent<TypeLinkType> = ({
  thumbnail,
  controlsCheckBox,
  outlinedWhatsApp,
  text = "Sample Data",
  outlinedWhatsApp1,
  image = false,
  iconRight = false,
  twoLineText = false,
  italics = false,
  iconLeft = false,
  threeLineText = false,
  checkbox = false,
  sampleDataFontFamily,
}) => {
  const sampleDataStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: sampleDataFontFamily,
    };
  }, [sampleDataFontFamily]);

  return (
    <div className={styles.typelink}>
      {image && <img className={styles.thumbnailIcon} alt="" src={thumbnail} />}
      <div className={styles.checkboxText}>
        {checkbox && (
          <img
            className={styles.controlsCheckBox}
            alt=""
            src={controlsCheckBox}
          />
        )}
        <div className={styles.text}>
          <div className={styles.iconTextItalics}>
            {iconLeft && (
              <img
                className={styles.outlinedWhatsapp}
                alt=""
                src={outlinedWhatsApp}
              />
            )}
            <div className={styles.sampleData} style={sampleDataStyle}>
              {text}
            </div>
            {iconRight && (
              <img
                className={styles.outlinedWhatsapp}
                alt=""
                src={outlinedWhatsApp1}
              />
            )}
            {italics && <i className={styles.italics}>Italics</i>}
          </div>
          {twoLineText && <div className={styles.more}>+1 more</div>}
          {threeLineText && <div className={styles.thirdLine}>Third Line</div>}
        </div>
      </div>
    </div>
  );
};

export default TypeLink;
