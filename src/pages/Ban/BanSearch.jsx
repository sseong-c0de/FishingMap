import Search from "../../components/Search/Search";
import styles from "./BanSearch.module.scss";
function Ban() {
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
export default Ban;
