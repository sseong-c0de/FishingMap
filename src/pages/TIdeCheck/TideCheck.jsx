import { Link } from "react-router-dom";
import styles from "./TideCheck.module.scss";
function TideCheck() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.rowHeader}>
          <span>날짜</span>
          <span>날씨</span>
          <span>만조</span>
          <span>간조</span>
          <Link to>
            <span>자세히 보기</span>
          </Link>
        </div>
        <div className={styles.rowList}>
          <span>21</span>
          <span>맑음</span>
          <p>
            <span>06:24</span>
            <span>17:24</span>
          </p>
          <p>
            <span>06:24</span>
            <span>17:24</span>
          </p>
        </div>
      </div>
      <button type="button" className={styles.moreBtn}></button>
    </div>
  );
}
export default TideCheck;
