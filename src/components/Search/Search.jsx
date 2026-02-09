import { useState } from "react";
import styles from "./Search.module.scss";
import MoreBtn from "../MoreBtn/MoreBtn";
import { Link } from "react-router-dom";
function Search({ placeList = [] }) {
  const [inputKeyword, setInputKeyword] = useState("");
  const filterPlace =
    inputKeyword.length >= 1
      ? placeList.filter((item) => item.includes(inputKeyword)).slice(0, 5)
      : [];
  const openBtn = filterPlace.length > 0;
  return (
    <>
      <div className={styles.container}>
        <input
          type="search"
          id="search"
          placeholder="어디로 갈까요?"
          className={styles.searchInput}
          onChange={(e) => {
            setInputKeyword(e.target.value);
          }}
          value={inputKeyword}
        ></input>
        <div className={styles.recentSearch}></div>
        {openBtn ? (
          <div className={styles.resultBox}>
            {filterPlace.map((item, key) => {
              return (
                <Link
                  to={`/tide/score?place=${encodeURIComponent(item)}`}
                  key={item}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        ) : null}
        {/* <MoreBtn /> */}
      </div>
    </>
  );
}
export default Search;
