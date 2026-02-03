import styles from "./TideSearch.module.scss";
import Search from "../../components/Search/Search";
import MoreBtn from "../../components/MoreBtn/MoreBtn";
import { useEffect, useState } from "react";
import { fetchTide, nowDate } from "../../api/tide.js";
function TideSearch() {
  const [tideData, setTidedata] = useState([]);
  const [placeList, setPlaceList] = useState([]);
  // const log = () => {
  //   console.log(placeList);
  // };
  // useEffect(() => {
  //   const data = async () => {
  //     try {
  //       const result = await fetchTide();
  //       setTidedata(result?.body?.items?.item ?? []);
  //       console.log("result", result);
  //     } catch (e) {
  //       console.log("에러", e);
  //     }
  //   };
  //   data();
  // }, []);

  useEffect(() => {
    async function data() {
      let pageNo = 1;
      let today = nowDate();
      const all = [];
      while (pageNo <= 3) {
        const result = await fetchTide(String(pageNo));
        const items = result?.body?.items?.item ?? [];
        if (items.length === 0) break;
        if (items[0].predcYmd !== today) break;
        all.push(...items);
        pageNo++;
      }
      const filterAll = all.filter((item) => item.predcYmd === today);
      setTidedata(filterAll);
      console.log(filterAll);
    }
    data();
  }, []);
  // api받아오기;
  // useEffect(() => {
  //   const data = async () => {
  //     try {
  //       const result = await fetchTide();
  //       setTidedata(result?.body?.items?.item ?? []);
  //       console.log("result", result);
  //     } catch (e) {
  //       console.log("에러", e);
  //     }
  //   };
  //   data();
  // }, []);

  // useEffect(() => {
  //   (async () => {
  //     const week = await fetchTide7Days();
  //     console.log(week);
  //   })();
  // }, []);
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
