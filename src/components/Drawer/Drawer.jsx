import { Link } from "react-router-dom";
import styles from "./Drawer.module.scss";
function Drawer() {
  return (
    <>
      <nav className={styles.drawer}>
        <Link to="/">홈</Link>
        <Link to="tide">바다낚시 점수</Link>
        <Link to="tideCheck">물때 확인</Link>
        <Link to="/">즐겨찾기</Link>
        <Link to="ban">금어기 정보</Link>
      </nav>
      {/* <button type="button" className={styles.closeBtn}>
          닫기
        </button> */}
    </>
  );
}
export default Drawer;
