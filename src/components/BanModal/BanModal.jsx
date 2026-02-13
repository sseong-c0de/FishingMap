import { useEffect } from "react";
import styles from "./BanModal.module.scss";
function BanModal({ setOpenModal, banList = [], selectMonth }) {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <div className={styles.h2Wrap}>
          <h2>{selectMonth}월의 금어기 정보</h2>
          <button
            className={styles.closeBtn}
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <ul className={styles.banLists}>
          <li>
            <span>이름</span>
            <span>시작일</span>
            <span>끝나는 날</span>
            <span>비고</span>
          </li>
          {banList.map((fish) => {
            return (
              <li key={fish.name} className={styles.fishes}>
                <span className={styles.fishName}>{fish.name}</span>{" "}
                <span>{fish.start}</span> <span>{fish.end}</span>{" "}
                <span>{fish.note || "없음"}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default BanModal;
