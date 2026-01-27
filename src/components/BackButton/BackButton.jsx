import { useNavigate } from "react-router-dom";
import styles from "./BackButton.module.scss";
function BackButton() {
  const navigate = useNavigate();
  const back = () => {
    if (window.history.length >= 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <button
        type="button"
        className={styles.backbutton}
        onClick={() => {
          back();
        }}
      >
        ←
      </button>
    </>
  );
}
export default BackButton;
