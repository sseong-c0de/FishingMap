import styles from "./TideSearch.module.scss";
import Search from "../../components/Search/Search";
import MoreBtn from "../../components/MoreBtn/MoreBtn";
import { useEffect, useState } from "react";
import { fetchTide } from "../../api/tide.js";
function TideSearch() {
  const [tideData, setTidedata] = useState([]);
  const [placeList, setPlaceList] = useState([]);
  // const log = () => {
  //   console.log(placeList);
  // };
  // api받아오기
  useEffect(() => {
    const data = async () => {
      try {
        const result = await fetchTide();
        setTidedata(result?.body?.items?.item ?? []);
        console.log("result", result);
      } catch (e) {
        console.log("에러", e);
      }
    };
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
