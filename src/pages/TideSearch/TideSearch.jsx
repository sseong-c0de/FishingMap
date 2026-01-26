import styles from "./TideSearch.module.scss";
import Search from "../../components/Search/Search";
import MoreBtn from "../../components/MoreBtn/MoreBtn";
function TideSearch() {
  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <Search></Search>
      </div>
      <div className={styles.recentSearch}></div>
      <div className={styles.resultBox}></div>
      <MoreBtn></MoreBtn>
    </div>
  );
}
export default TideSearch;
