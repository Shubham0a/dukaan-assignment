import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TypeTextRegular.module.css";

type TypeTextRegularType = {
  thumbnail?: string;
  controlsCheckBox?: string;
  outlinedWhatsApp?: string;
  text?: string;
  outlinedWhatsApp1?: string;
  infoTag?: boolean;
  image?: boolean;
  iconRight?: boolean;
  twoLineText?: boolean;
  italics?: boolean;
  iconLeft?: boolean;
  threeLineText?: boolean;
  checkbox?: boolean;
  strikeThrough?: boolean;

  /** Style props */
  sampleDataFontFamily?: CSSProperties["fontFamily"];
  sampleDataFontWeight?: CSSProperties["fontWeight"];
  sampleDataTextAlign?: CSSProperties["textAlign"];
  sampleDataColor?: CSSProperties["color"];
};

const TypeTextRegular: FunctionComponent<TypeTextRegularType> = ({
  thumbnail,
  controlsCheckBox,
  outlinedWhatsApp,
  text = "Sample Data",
  outlinedWhatsApp1,
  infoTag = false,
  image = false,
  iconRight = false,
  twoLineText = false,
  italics = false,
  iconLeft = false,
  threeLineText = false,
  checkbox = false,
  strikeThrough = false,
  sampleDataFontFamily,
  sampleDataFontWeight,
  sampleDataTextAlign,
  sampleDataColor,
}) => {
  const sampleData1Style: CSSProperties = useMemo(() => {
    return {
      fontFamily: sampleDataFontFamily,
      fontWeight: sampleDataFontWeight,
      textAlign: sampleDataTextAlign,
      color: sampleDataColor,
    };
  }, [
    sampleDataFontFamily,
    sampleDataFontWeight,
    sampleDataTextAlign,
    sampleDataColor,
  ]);

  return (
    <div className={styles.typetextRegular}>
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
            <div className={styles.text1}>
              <div className={styles.sampleData} style={sampleData1Style}>
                {text}
              </div>
              {strikeThrough && (
                <div className={styles.strikeThroughData}>
                  Strike-Through Data
                </div>
              )}
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
          {infoTag && (
            <div className={styles.tagInfo}>
              <div className={styles.cod}>COD</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TypeTextRegular;
