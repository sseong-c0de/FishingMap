import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import styles from "./Home.module.scss";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.h2Wrap}>
        <h2>안녕하세요.</h2>
        <p className={styles.desc}>오늘의 바다를 확인해보세요.</p>
      </div>
      {/* <div className={styles.searchBox}>
        <Search></Search>
      </div> */}
      <div className={styles.linkContainer}>
        <Link to="tide" className={styles.linkCard}>
          <span>바다낚시 점수</span>
        </Link>
        <Link to="tideCheck" className={styles.linkCard}>
          <span>물때 정보</span>
        </Link>
        <Link to className={styles.linkCard}>
          <span>낚시 장소</span>
        </Link>
        <Link to="ban" className={styles.linkCard}>
          <span>금어기 정보</span>
        </Link>
      </div>
    </div>
  );
}
export default Home;
