import styles from "./Search.module.scss";
function Serch() {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.enter}>←</span>
        <input
          type="search"
          id="search"
          placeholder="어디로 갈까요?"
          className={styles.searchInput}
        ></input>
      </div>
    </>
  );
}
export default Serch;
