import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import styles from "./Home.module.scss";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.h2Wrap}>
        <h2>안녕하세요.</h2>
        <span className={styles.desc}>오늘의 바다를 확인해보세요.</span>
      </div>
      <div className={styles.SerchBox}>
        <Search></Search>
      </div>
      <div className={styles.linkContainer}>
        <Link to className={styles.linkCard}>
          <span>물떄 확인</span>
        </Link>
        <Link to className={styles.linkCard}>
          <span>낚시 포인트</span>
        </Link>
        <Link to className={styles.linkCard}>
          <span>즐겨찾기</span>
        </Link>
        <Link to className={styles.linkCard}>
          <span>금어기 정보</span>
        </Link>
      </div>
    </div>
  );
}
export default Home;
