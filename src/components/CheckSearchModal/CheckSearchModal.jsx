import { useEffect } from "react";
import styles from "./CheckSearchModal.module.scss";

function CheckSearchModal({ clickTime, setOpenModal }) {
  const rowItems = clickTime?.body?.items?.item ?? [];
  const itemList = Array.isArray(rowItems) ? rowItems : [rowItems];
  const filterList = itemList.reduce((acc, item) => {
    const date = item.predcDt?.slice(0, 10) ?? "";
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});

  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.h2Wrap}>
          <h2>{clickTime?.body?.items?.item?.[0]?.obsvtrNm ?? "지역"}</h2>
          <button
            className={styles.closeBtn}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        {Object.keys(filterList).map((date) => {
          const items = filterList[date];
          const amHigh = items.filter((i) => i.extrSe === "1");
          const amLow = items.filter((i) => i.extrSe === "2");
          const pmHigh = items.filter((i) => i.extrSe === "3");
          const pmLow = items.filter((i) => i.extrSe === "4");
          return (
            <div className={styles.row} key={date}>
              <div className={styles.rowHeader}>
                <span>날짜</span>
                <span>간조</span>
                <span>만조</span>
              </div>
              <div className={styles.rowList}>
                <p>
                  <span>{date.slice(5, 10)}</span>
                </p>
                <p>
                  <span>
                    오전:{" "}
                    {amLow.map((i) => i.predcDt?.slice(11, 16)).join(", ") ||
                      "-"}
                  </span>
                  <span>
                    오후:{" "}
                    {pmLow.map((i) => i.predcDt?.slice(11, 16)).join(", ") ||
                      "-"}
                  </span>
                </p>
                <p>
                  <span>
                    오전:{" "}
                    {amHigh.map((i) => i.predcDt?.slice(11, 16)).join(", ") ||
                      "-"}
                  </span>
                  <span>
                    오후:{" "}
                    {pmHigh.map((i) => i.predcDt?.slice(11, 16)).join(", ") ||
                      "-"}
                  </span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CheckSearchModal;
