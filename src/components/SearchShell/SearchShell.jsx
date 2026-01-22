import Search from "../Search";
import styles from "./SearchShell.module.scss";
function SearchShell() {
  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <Search></Search>
      </div>
      <div className={styles.recentSearch}></div>
      <div className={styles.resultBox}></div>
    </div>
  );
}
export default SearchShell;
