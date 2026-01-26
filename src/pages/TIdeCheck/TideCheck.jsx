import { Link } from "react-router-dom";
import styles from "./TideCheck.module.scss";
import MoreBtn from "../../components/MoreBtn/MoreBtn";
function TideCheck() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.rowHeader}>
          <span>날짜</span>
          <span>날씨</span>
          <span>만조</span>
          <span>간조</span>
        </div>
        <div className={styles.rowList}>
          <span>21(수)</span>
          <span>맑음</span>
          <p>
            <span>06:24</span>
            <span>17:24</span>
          </p>
          <p>
            <span>06:24</span>
            <span>17:24</span>
          </p>
          <Link to>
            <span>자세히 보기</span>
          </Link>
        </div>
      </div>
      <MoreBtn />
    </div>
  );
}
export default TideCheck;
