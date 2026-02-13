import { useEffect, useState } from "react";
import styles from "./CheckSearch.module.scss";
import tideTimeCode from "../../data/tideTimeCode";
import { fetchTideTime } from "../../api/tide";
import CheckSearchModal from "../CheckSearchModal/CheckSearchModal";
function CheckSearch() {
  const [inputKeyword, setInputKeyword] = useState("");
  const [clickCode, setClickCode] = useState("")
  const [clickTime,setClickTime] = useState([])
  const [openModal,setOpenModal] = useState(false)
  const filterPlace =
    inputKeyword.trim().length >= 1
      ? tideTimeCode
          .filter((item) => item.name.includes(inputKeyword))
          .slice(0, 5)
      : [];
  
  // useEffect(()=>{
  //   console.log(filterPlace)
  // },[inputKeyword])
  useEffect(()=>{
    async function load(){
      try{
        const result = await fetchTideTime(clickCode);
        setClickTime(result)
      }catch(err){
        console.log("실패",err)
      }
    }
    load()
  },[clickCode])
  return (
    <div className={styles.container}>
      <input
        type="search"
        id="search"
        placeholder="물때를 확인해보세요!"
        className={styles.searchInput}
        onChange={(e) => {
          setInputKeyword(e.target.value);
        }}
      ></input>
      <div className={styles.recentSearch}></div>
      <div className={styles.resultBox}>
        {filterPlace.map((place)=>
        <button key={place.name} onClick={()=>{
          setClickCode(place.code)
          setOpenModal(true)
        }}>{place.name}</button>
        )}
      </div>
      {openModal && <CheckSearchModal clickTime={clickTime} setOpenModal={setOpenModal}/>}
    </div>
  );
}
export default CheckSearch;
