import styles from "./Header.module.scss";
function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.back}>
          <button type="button" className={styles.backBtn}>
            ←
          </button>
        </div>
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>메인제목</h1>
        </div>
        <div className={styles.openDrawer}>
          <button type="button" className={styles.openBtn}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
