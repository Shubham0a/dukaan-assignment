import { FunctionComponent, useMemo, type CSSProperties } from "react";
import HowToUse from "./HowToUse";
import Type2 from "./Type2";
import styles from "./BackArrowFalseHelpTrueS.module.css";

type BackArrowFalseHelpTrueSType = {
  dashboard?: string;
  iconsOutlinedInfo?: string;
  howToUse?: string;

  /** Style props */
  backArrowFalseHelpTrueSPosition?: CSSProperties["position"];
  backArrowFalseHelpTrueSTop?: CSSProperties["top"];
  backArrowFalseHelpTrueSLeft?: CSSProperties["left"];
  dashboardFontSize?: CSSProperties["fontSize"];
  dashboardLineHeight?: CSSProperties["lineHeight"];
  dashboardFontWeight?: CSSProperties["fontWeight"];
  dashboardFontFamily?: CSSProperties["fontFamily"];
  howToUseFontFamily?: CSSProperties["fontFamily"];
  searchFeaturesTutorialsFontFamily?: CSSProperties["fontFamily"];
};

const BackArrowFalseHelpTrueS: FunctionComponent<
  BackArrowFalseHelpTrueSType
> = ({
  dashboard,
  iconsOutlinedInfo,
  howToUse,
  backArrowFalseHelpTrueSPosition,
  backArrowFalseHelpTrueSTop,
  backArrowFalseHelpTrueSLeft,
  dashboardFontSize,
  dashboardLineHeight,
  dashboardFontWeight,
  dashboardFontFamily,
  howToUseFontFamily,
  searchFeaturesTutorialsFontFamily,
}) => {
  const backArrowFalseHelpTrueSStyle: CSSProperties = useMemo(() => {
    return {
      position: backArrowFalseHelpTrueSPosition,
      top: backArrowFalseHelpTrueSTop,
      left: backArrowFalseHelpTrueSLeft,
    };
  }, [
    backArrowFalseHelpTrueSPosition,
    backArrowFalseHelpTrueSTop,
    backArrowFalseHelpTrueSLeft,
  ]);

  const dashboardStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: dashboardFontSize,
      lineHeight: dashboardLineHeight,
      fontWeight: dashboardFontWeight,
      fontFamily: dashboardFontFamily,
    };
  }, [
    dashboardFontSize,
    dashboardLineHeight,
    dashboardFontWeight,
    dashboardFontFamily,
  ]);

  const howToUseStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: howToUseFontFamily,
    };
  }, [howToUseFontFamily]);

  const searchFeaturesTutorialsStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: searchFeaturesTutorialsFontFamily,
    };
  }, [searchFeaturesTutorialsFontFamily]);

  return (
    <div
      className={styles.backArrowfalseHelptrueS}
      style={backArrowFalseHelpTrueSStyle}
    >
      <div className={styles.frameParent}>
        <div className={styles.dashboardWrapper}>
          <div className={styles.dashboard} style={dashboardStyle}>
            {dashboard}
          </div>
        </div>
        <HowToUse
          iconsOutlinedInfo="/icons--outlined--info.svg"
          howToUse="How to use"
          howToUseFontFamily="'Galano Grotesque'"
        />
      </div>
      <div className={styles.iconssearchParent}>
        <img className={styles.iconssearch} alt="" src="/iconssearch.svg" />
        <div
          className={styles.searchFeaturesTutorials}
          style={searchFeaturesTutorialsStyle}
        >
          Search features, tutorials, etc.
        </div>
      </div>
      <div className={styles.component2Wrapper}>
        <Type2 />
      </div>
    </div>
  );
};

export default BackArrowFalseHelpTrueS;
