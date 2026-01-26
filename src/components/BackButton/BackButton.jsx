import styles from "./BackButton.module.scss";
function BackButton() {
  return (
    <>
      <button type="button" className={styles.backbutton}>
        ←
      </button>
    </>
  );
}
export default BackButton;
