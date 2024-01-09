import { FunctionComponent, useMemo, type CSSProperties } from "react";
import BaseSearchField from "./BaseSearchField";
import styles from "./TypeDefaultSizeDefault.module.css";

type TypeDefaultSizeDefaultType = {
  orderIDPhoneOrAName?: string;
  boldCross?: string;

  /** Style props */
  typeDefaultSizeDefaultWidth?: CSSProperties["width"];
  orderIDPhoneFontFamily?: CSSProperties["fontFamily"];
};

const TypeDefaultSizeDefault: FunctionComponent<TypeDefaultSizeDefaultType> = ({
  orderIDPhoneOrAName,
  boldCross,
  typeDefaultSizeDefaultWidth,
  orderIDPhoneFontFamily,
}) => {
  const typeDefaultSizeDefaultStyle: CSSProperties = useMemo(() => {
    return {
      width: typeDefaultSizeDefaultWidth,
    };
  }, [typeDefaultSizeDefaultWidth]);

  const orderIDPhoneStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: orderIDPhoneFontFamily,
    };
  }, [orderIDPhoneFontFamily]);

  return (
    <div
      className={styles.typedefaultSizedefault}
      style={typeDefaultSizeDefaultStyle}
    >
      <BaseSearchField
        orderIDPhoneOrAName="Order ID, phone or a name..."
        boldCross="/bold--cross.svg"
        showX={false}
        icon
        orderIDPhoneFontFamily="'Galano Grotesque'"
      />
    </div>
  );
};

export default TypeDefaultSizeDefault;
