// import Search from "../../components/Search/Search";
import banFishes from "../../data/banFish";
import { useEffect, useState } from "react";
import BanModal from "../../components/BanModal/BanModal";
import styles from "./BanSearch.module.scss";
function Ban() {
  const [openModal,setOpenModal] = useState(false)
  const [selectMonth,setSelectMonth] = useState(null)
  function monthBan(fish,month){
    const startMonth = parseInt(fish.start.split("-")[0],10)
    const endMonth = parseInt(fish.end.split("-")[0],10)
    if(startMonth <= endMonth){
      return month >= startMonth && month <= endMonth;
    }else{
      return month >= startMonth || month <= endMonth;
    }
  }
  const banList = selectMonth ? banFishes.filter((fish)=>monthBan(fish,selectMonth)): []
  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        {/* <Search></Search> */}
      </div>
      <div className={styles.monthBtns}>
          {[1,2,3,4,5,6,7,8,9,10,11,12].map((month)=>
            <button key={month} className={styles.monthBtn} onClick={()=>{
              setOpenModal(true);
              setSelectMonth(month)
            }}>{month}월</button> 
          )}
      </div>
      {openModal ? <BanModal setOpenModal={setOpenModal} banList={banList} selectMonth={selectMonth}/> : ""}
    </div>
  );
}
export default Ban;
