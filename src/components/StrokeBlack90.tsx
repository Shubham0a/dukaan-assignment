import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./StrokeBlack90.module.css";

type StrokeBlack90Type = {
  imageDimensions?: string;

  /** Style props */
  strokeBlack90IconWidth?: CSSProperties["width"];
  strokeBlack90IconAlignSelf?: CSSProperties["alignSelf"];
  strokeBlack90IconPosition?: CSSProperties["position"];
  strokeBlack90IconMargin?: CSSProperties["margin"];
  strokeBlack90IconRight?: CSSProperties["right"];
  strokeBlack90IconBottom?: CSSProperties["bottom"];
  strokeBlack90IconLeft?: CSSProperties["left"];
  strokeBlack90IconMaxWidth?: CSSProperties["maxWidth"];
  strokeBlack90IconOverflow?: CSSProperties["overflow"];
  strokeBlack90IconZIndex?: CSSProperties["zIndex"];
};

const StrokeBlack90: FunctionComponent<StrokeBlack90Type> = ({
  imageDimensions,
  strokeBlack90IconWidth,
  strokeBlack90IconAlignSelf,
  strokeBlack90IconPosition,
  strokeBlack90IconMargin,
  strokeBlack90IconRight,
  strokeBlack90IconBottom,
  strokeBlack90IconLeft,
  strokeBlack90IconMaxWidth,
  strokeBlack90IconOverflow,
  strokeBlack90IconZIndex,
}) => {
  const strokeBlack90IconStyle: CSSProperties = useMemo(() => {
    return {
      width: strokeBlack90IconWidth,
      alignSelf: strokeBlack90IconAlignSelf,
      position: strokeBlack90IconPosition,
      margin: strokeBlack90IconMargin,
      right: strokeBlack90IconRight,
      bottom: strokeBlack90IconBottom,
      left: strokeBlack90IconLeft,
      maxWidth: strokeBlack90IconMaxWidth,
      overflow: strokeBlack90IconOverflow,
      zIndex: strokeBlack90IconZIndex,
    };
  }, [
    strokeBlack90IconWidth,
    strokeBlack90IconAlignSelf,
    strokeBlack90IconPosition,
    strokeBlack90IconMargin,
    strokeBlack90IconRight,
    strokeBlack90IconBottom,
    strokeBlack90IconLeft,
    strokeBlack90IconMaxWidth,
    strokeBlack90IconOverflow,
    strokeBlack90IconZIndex,
  ]);

  return (
    <img
      className={styles.strokeblack90Icon}
      alt=""
      src={imageDimensions}
      style={strokeBlack90IconStyle}
    />
  );
};

export default StrokeBlack90;
