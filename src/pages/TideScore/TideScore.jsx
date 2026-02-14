import { Link, useSearchParams } from "react-router-dom";
import styles from "./TideScore.module.scss";
import MoreBtn from "../../components/MoreBtn/MoreBtn";
import { useEffect, useState } from "react";
import { fetchTide, nowDate, endDate } from "../../api/tide";
import tideTimeCode from "../../data/tideTimeCode";
import TideModal from "../../components/TideModal/TideModal";
import GuideModal from "../../components/GuideModal/GuideModal";

function TideCheck() {
  const [params] = useSearchParams();
  const place = params.get("place");
  const [rows, setRows] = useState([]);
  const [clickData, setClickData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openGuide, setOpenGuide] = useState(false);
  const [clickCode, setClickCode] = useState();
  const [dataType,setDataType] = useState(null)
  // const [clickLocation, setClickLocation] = useState();
  function propCode() {
    const found = tideTimeCode.find((code) => code.name === place);
    setClickCode(found?.code ?? "");
  }

  useEffect(() => {
    propCode();
  }, [place]);
  useEffect(() => {
    async function load() {
      if (!place) return;
      let pageNo = 1;
      const today = nowDate();
      const endDay = endDate();
      const all = [];
      while (pageNo <= 10) {
        const result = await fetchTide(String(pageNo));
        const items = result?.body?.items?.item ?? [];
        if (items.length === 0) break;
        const placeItems = items.filter((item) => item.seafsPstnNm === place);
        const rangedItems = placeItems.filter(
          (item) => item.predcYmd >= today && item.predcYmd <= endDay
        );
        all.push(...rangedItems);
        const reachedEndDay = rangedItems.some(
          (item) => item.predcYmd === endDay
        );
        if (reachedEndDay) break;
        pageNo++;
      }
      const hasDate = new Set();
      const oneDate = all.filter((item) => {
        const firstDate = !hasDate.has(item.predcYmd);
        hasDate.add(item.predcYmd);
        return firstDate;
      });
      setRows(oneDate);
    }
    load();
  }, [place]);
  return (
    <div className={styles.container}>
      {rows.map((item, id) => {
        return (
          <div className={styles.row} key={id}>
            <div className={styles.rowHeader}>
              <span>날짜</span>
              <span>낚시 점수</span>
              <span>수온</span>
              <span>기온</span>
            </div>
            <div className={styles.rowList}>
              <p>
                <span>{item.predcYmd.slice(5, 10)}</span>
              </p>
              <p>
                <span>{String(item.lastScr).slice(0, 2)}점</span>
                <span>{item.totalIndex}</span>
              </p>
              <p>
                <span>{item.maxWtem}°C</span>
                <span>{item.minWtem}°C</span>
              </p>
              <p>
                <span>{item.maxArtmp}°C</span>
                <span>{item.minArtmp}°C</span>
              </p>
              <button
                onClick={() => {
                  setOpenModal(true);
                  setClickData(item);
                }}
              >
                <span className={styles.modalBtn}>더 보기</span>
              </button>
            </div>
          </div>
        );
      })}
      {openModal && (
        <TideModal
          setOpenModal={setOpenModal}
          clickData={clickData}
          clickCode={clickCode}
          place={place}
        />
      )}
      <button className={styles.guideBtn} onClick={() => {
        setOpenGuide(true)
        setDataType("tide")
      }}>?</button>
      {openGuide && (
        <GuideModal
          setOpenModal={setOpenGuide}
          dataType={dataType}
        />
      )}
    </div>
  );
}
export default TideCheck;
