import { useEffect, useState } from "react";
import styles from "./TideModal.module.scss";
import { fetchTideTime } from "../../api/tide";
function TideModal({setOpenModal,clickData,clickCode}) {
  const [data,setData] = useState(clickData)
  const [tideHighLow,setTideHighLow] = useState([])
  useEffect(()=>{
    async function load(){
      try{
        const result = await fetchTideTime(clickCode);
        setTideHighLow(result)
        console.log("api",result)
      }catch(err){
        console.log("실패",err)
      }
    }
    load()
  },[])
  
  return (
    <>
      <div className={styles.modal}>
        <div className={styles.container}>
          <div className={styles.h2Wrap}>
            <h2>{data.seafsPstnNm} 상세표</h2>
            <button className={styles.closeBtn} onClick={
              ()=>{setOpenModal(false)}
            }>X</button>
          </div>
          <div className={styles.tideWrap}>
            <div className={styles.date}>
              <span>{data.predcYmd}</span>
            </div>
            <div className={styles.tide}>
              <p>물때 시간표</p>
              <div className={styles.tideTimeTable}>
                <div className={styles.tideAM}>
                  <span>오전</span>
                  <p className={styles.tideTime}>
                    <span className={styles.tideHigh}>만조:</span>
                    <span className={styles.tideLow}>간조:</span>
                  </p>
                </div>
                <div className={styles.tidePM}>
                  <span>오후</span>
                  <p  className={styles.tideTime}>
                    <span className={styles.tideHigh}>만조:</span>
                    <span className={styles.tideLow}>간조:</span>
                  </p>
                </div>
                </div>
            </div>
            <div className={styles.sun}>
              <p>일출일몰표</p>
              <div className={styles.sunTimeTable}>
                <div className={styles.sunRise}>
                  <p className={styles.sunTime}>
                    <span className={styles.sunny}>일출:</span>
                  </p>
                </div>
                <div className={styles.sunSet}>
                  <p  className={styles.sunTime}>
                    <span className={styles.sunny}>일몰:</span>
                  </p>
                </div>
                </div>

            </div>
          </div>
          <div className={styles.tideDetail}>
            <p>
              <span className={styles.tideLabel}>위치</span> {data.seafsPstnNm}
            </p>            <p>
              <span className={styles.tideLabel}>대상어</span> {data.seafsTgfshNm}
            </p>
            <p>
              <span className={styles.tideLabel}>바다낚시 지수</span> {data.totalIndex}
            </p>
            <p>
              <span className={styles.tideLabel}>물때 점수</span> {data.lastScr}
            </p>
            <p>
              <span className={styles.tideLabel}>최고 수온</span> {data.maxWtem}°C
            </p>            <p>
              <span className={styles.tideLabel}>최저 수온</span> {data.minWtem}°C
            </p>
            <p>
              <span className={styles.tideLabel}>최고 기온</span> {data.maxArtmp}°C
            </p>            <p>
              <span className={styles.tideLabel}>최저 기온</span> {data.minArtmp}°C
            </p>

          </div>
          <div className={styles.banFish}>
            {/* 날짜에 맞춰서 금어기 표 보여주기 */}
          </div>
        </div>
      </div>
    </>
  );
}
export default TideModal;
