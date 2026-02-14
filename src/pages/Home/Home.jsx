import { Link } from "react-router-dom";
import Search from "../../components/Search/Search";
import styles from "./Home.module.scss";
import GuideModal from "../../components/GuideModal/GuideModal";
import { useEffect, useState } from "react";
import guideData from "../../data/guideData";

function Home() {
  const [dataType,setDataType] = useState(null)
  const [openModal,setOpenModal] = useState(false)
  
  return (
    <div className={styles.container}>
      <div className={styles.h2Wrap}>
        <h2>안녕하세요.</h2>
        <p className={styles.desc}>오늘의 바다를 확인해보세요.</p>
      </div>
      <div className={styles.linkContainer}>
        <Link to="tide" className={styles.linkCard}>
          <span>바다낚시 점수</span>
        </Link>
        <Link to="tideCheck" className={styles.linkCard}>
          <span>물때 정보</span>
        </Link>
        <Link to="sunset" className={styles.linkCard}>
          <span>일출일몰 정보</span>
        </Link>
        <Link to="ban" className={styles.linkCard}>
          <span>금어기 정보</span>
        </Link>
      </div>
      <button className={styles.guideBtn} onClick={()=>{
        setOpenModal(true)
        setDataType("home")
      }}>?</button>
      {openModal && <GuideModal setOpenModal={setOpenModal} dataType={dataType}></GuideModal>}
    </div>
  );
}
export default Home;
