import styles from "./TideSearch.module.scss";
import Search from "../../components/Search/Search";
function TideSearch() {
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
export default TideSearch;
