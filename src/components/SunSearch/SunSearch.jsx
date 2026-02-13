import { useEffect, useState } from "react";
import styles from "./SunSearch.module.scss"
import sunTime from "../../data/sunTime";
import { fetchSunTime, nowDate } from "../../api/tide";
import SunModal from "../SunModal/SunModal";
function SunSearch() {
    const [inputKeyword, setInputKeyword] = useState("")
    const [inputDate,setInputDate] = useState("")
    const filterPlace = inputKeyword.trim().length >= 2 ? sunTime.filter((item) => item.includes(inputKeyword)) : []
    const [openModal, setOpenModal] = useState(false)
    const [clickPlace, setClickPlace] = useState()
    // const replaceDate = nowDate().replace(/-/g, "");
    const reDate = inputDate.replace(/-/g,"")
    const [placeData, setPlaceData] = useState([])



    useEffect(() => {
        async function load() {
            try {
                const result = await fetchSunTime(clickPlace, reDate)
                setPlaceData(result)
            } catch (err) {
                console.log("실패", err)
            }
        }
        load()
    }, [clickPlace])
    return (
        <>
            <div className={styles.container}>
                <input
                    type="search"
                    id="search"
                    placeholder="일출일몰을 확인해보세요"
                    className={styles.searchInput}
                    onChange={(e) => {
                        setInputKeyword(e.target.value);
                    }}
                ></input>
                <input type="date"
                        id="dateSearch"
                        placeholder="날짜를 입력하세요"
                        className={styles.searchDate}
                        onChange={(e)=>{
                            setInputDate(e.target.value)
                        }}
                        ></input>
                <div className={styles.recentSearch}></div>
                <div className={styles.resultBox}>
                    {filterPlace.map((place) =>
                        <button key={place} className={styles.placeBtn} disabled={!inputDate} onClick={() => {
                            setOpenModal(true)
                            setClickPlace(place)
                            
                        }}>
                            {place}
                        </button>
                    )}
                </div>
                {openModal && <SunModal setOpenModal={setOpenModal} placeData={placeData} reDate={reDate} clickPlace={clickPlace}/>}

            </div>
        </>
    )
}
export default SunSearch;