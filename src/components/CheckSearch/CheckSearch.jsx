import styles from "./CheckSearch.module.scss";
function CheckSearch() {
  return (
    <div className={styles.container}>
      <input
        type="search"
        id="search"
        placeholder="물때를 확인해보세요."
        className={styles.searchInput}
      ></input>
      <div className={styles.recentSearch}></div>
      <div className={styles.resultBox}></div>
    </div>
  );
}
export default CheckSearch;
