import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./BaseSearchField.module.css";

type BaseSearchFieldType = {
  orderIDPhoneOrAName?: string;
  boldCross?: string;
  showX?: boolean;
  icon?: boolean;

  /** Style props */
  orderIDPhoneFontFamily?: CSSProperties["fontFamily"];
};

const BaseSearchField: FunctionComponent<BaseSearchFieldType> = ({
  orderIDPhoneOrAName,
  boldCross,
  showX = false,
  icon = true,
  orderIDPhoneFontFamily,
}) => {
  const orderIDPhoneStyle: CSSProperties = useMemo(() => {
    return {
      fontFamily: orderIDPhoneFontFamily,
    };
  }, [orderIDPhoneFontFamily]);

  return (
    <div className={styles.basesearchField}>
      {icon && (
        <img className={styles.boldSearch} alt="" src="/bold--search.svg" />
      )}
      <div className={styles.orderIdPhone} style={orderIDPhoneStyle}>
        {orderIDPhoneOrAName}
      </div>
      {showX && <img className={styles.boldCross} alt="" src={boldCross} />}
    </div>
  );
};

export default BaseSearchField;
