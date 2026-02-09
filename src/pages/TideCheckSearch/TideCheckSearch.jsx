import CheckSearch from "../../components/CheckSearch/CheckSearch";
import styles from "./TideCheckSearch.module.scss";
function TideCheckSearch() {
  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <CheckSearch></CheckSearch>
      </div>
    </div>
  );
}
export default TideCheckSearch;
