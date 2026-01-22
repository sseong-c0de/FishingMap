import { Link } from "react-router-dom";
import styles from "./Drawer.module.scss";
function Drawer() {
  return (
    <div className={styles.container}>
      <aside className={styles.drawer}>
        <nav className={styles.drawerNav}>
          <Link to="/">홈</Link>
          <Link to="/">물때 확인</Link>
          <Link to="/">낚시 포인트</Link>
          <Link to="/">즐겨찾기</Link>
          <Link to="/">금어기 정보</Link>
        </nav>
        <button type="button" className={styles.closeBtn}>
          닫기
        </button>
      </aside>
    </div>
  );
}
export default Drawer;
