import { Link, useSearchParams } from "react-router-dom";
import styles from "./TideCheck.module.scss";
import MoreBtn from "../../components/MoreBtn/MoreBtn";

import { useEffect, useState } from "react";
import { fetchTide, nowDate } from "../../api/tide";
function TideCheck() {
  const [params] = useSearchParams();
  const place = params.get("place");
  const [rows, setRows] = useState([]);
  // useEffect(() => {
  //   const load = async () => {
  //     const data = await fetchTide();
  //     const items = data.body.items.item;
  //     const filterItems = items.filter((item) => {
  //       return item.seafsPstnNm === place;
  //     });
  //     setRows(filterItems);
  //   };
  //   load();
  // }, [place]);
  useEffect(() => {
    async function load() {
      if (!place) return;
      let pageNo = 1;
      const today = nowDate();
      const all = [];
      while (pageNo <= 3) {
        const result = await fetchTide(String(pageNo));
        const items = result?.body?.items?.item ?? [];
        const filterItems = items.filter((item) => {
          return item.seafsPstnNm === place && item.predcYmd === today;
        });
        if (items[0].predcYmd !== today) break;
        if (items.length === 0) break;
        all.push(...filterItems);
        pageNo++;
      }
      setRows(all);
    }
    load();
  }, [place]);
  // useEffect(() => {
  //   console.log(rows);
  // }, [rows]);
  return (
    <div className={styles.container}>
      {rows.map((item, id) => {
        return (
          <div className={styles.row} key={id}>
            <div className={styles.rowHeader}>
              <span>날짜</span>
              <span>물때 점수</span>
              <span>수온</span>
              <span>기온</span>
            </div>
            <div className={styles.rowList}>
              <p>
                <span>{item.predcYmd.slice(5, 10)}</span>
                <span>{item.predcNoonSeCd}</span>
              </p>

              <p>
                <span>{item.tdlvHrCn}</span>
                <span>{item.tdlvHrScr}점</span>
              </p>
              <p>
                <span>{item.maxWtem}</span>
                <span>{item.minWtem}</span>
              </p>
              <p>
                <span>{item.maxArtmp}</span>
                <span>{item.minArtmp}</span>
              </p>
              <Link to>
                <span className={styles.link}>자세히 보기</span>
              </Link>
            </div>
          </div>
        );
      })}
      {/* <div className={styles.row}>
        <div className={styles.rowHeader}>
          <span>날짜</span>
          <span>날씨</span>
          <span>만조</span>
          <span>간조</span>
        </div>
        <div className={styles.rowList}>
          <span>21(수)</span>
          <span>맑음</span>
          <p>
            <span>06:24</span>
            <span>17:24</span>
          </p>
          <p>
            <span>06:24</span>
            <span>17:24</span>
          </p>
          <Link to>
            <span>자세히 보기</span>
          </Link>
        </div>
      </div> */}
      <MoreBtn />
    </div>
  );
}
export default TideCheck;
