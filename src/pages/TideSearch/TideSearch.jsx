import styles from "./TideSearch.module.scss";
import Search from "../../components/Search/Search";
import MoreBtn from "../../components/MoreBtn/MoreBtn";
import { useEffect, useState } from "react";
import { fetchTide, nowDate } from "../../api/tide.js";
function TideSearch() {
  const [tideData, setTidedata] = useState([]);
  const [placeList, setPlaceList] = useState([]);

  useEffect(() => {
    async function data() {
      try {
        let pageNo = 1;
        const today = nowDate();
        const all = [];
        while (pageNo <= 3) {
          const result = await fetchTide(String(pageNo));
          const items = result?.body?.items?.item ?? [];
          if (items.length === 0) break;
          if (items[0].predcYmd !== today) break;
          all.push(...items.filter((item) => item.predcYmd === today));
          pageNo++;
        }
        setTidedata(all);
      } catch (error) {
        console.error("물때 데이터 로딩 실패:", error);
      }
    }
    data();
  }, []);

  useEffect(() => {
    if (tideData.length === 0) return;
    const name = tideData.map((item) => {
      return item.seafsPstnNm;
    });
    const setName = [...new Set(name)];
    setPlaceList(setName);
  }, [tideData]);

  return (
    <div className={styles.container}>
      <div className={styles.searchBox}>
        <Search placeList={placeList} />
      </div>
      {/* <MoreBtn></MoreBtn> */}
      {/* <button
        onClick={() => {
          console.log(placeList);
        }}
      >
        123131231313123123
      </button> */}
    </div>
  );
}
export default TideSearch;
