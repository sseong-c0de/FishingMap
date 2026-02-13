import SunSearch from "../../components/SunSearch/SunSearch";
import styles from "./Sunset.module.scss";

function Sunset() {
  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <SunSearch></SunSearch>
      </div>
    </div>
  );
}

export default Sunset;