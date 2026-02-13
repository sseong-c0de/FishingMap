import { useState } from "react";
import BackButton from "../BackButton/BackButton";
import styles from "./Header.module.scss";
import Drawer from "../Drawer/Drawer";
import { useLocation } from "react-router-dom";
function Header({ pageTitles = "메인제목" }) {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const inHome = location.pathname === "/";

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.back}>
          {!inHome ? <BackButton/> : ""}
        </div>
        <div className={styles.titleWrap}>
          <h1 className={styles.title}>{pageTitles}</h1>
        </div>
        {toggle ? <button className={styles.closeBtn} onClick={() => {
          setToggle((prev) => {
            return !prev;
          });
        }}>X</button> : <button
          type="button"
          className={styles.openBtn}
          onClick={() => {
            setToggle((prev) => {
              return !prev;
            });
          }}
        >
          <span></span>
          <span></span>
          <span></span>

        </button>}
      </div>
      <div className={styles.drawerBox}>
      {toggle && <Drawer />}
      </div>
      
    </header>

  );
}
export default Header;
