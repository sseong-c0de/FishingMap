import styles from "./Search.module.scss";
function Serch() {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.enter}>←</span>
        <input
          type="search"
          placeholder="어디로갈까요?"
          className={styles.serchInput}
        ></input>
      </div>
    </>
  );
}
export default Serch;
