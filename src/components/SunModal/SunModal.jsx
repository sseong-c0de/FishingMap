import styles from "./SunModal.module.scss"
function SunModal({setOpenModal,placeData,reDate,clickPlace}){
    const sunRise = placeData?.body?.items?.[0]?.sunrise
    const sunSet = placeData?.body?.items?.[0]?.sunset
    const date = `${reDate.slice(0,4)}.${reDate.slice(4,6)}.${reDate.slice(6,8)}`

    return(
       <div className={styles.modal}>
        <div className={styles.container}>
            <div className={styles.h2Wrap}>
                <h2>{date} - {clickPlace}</h2>
                <button className={styles.closeBtn} onClick={()=>{
                    setOpenModal(false)
                }}>X</button>
            </div>
            <ul className={styles.sunList}>
                <li>
                    <span>일출: {sunRise ? `${sunRise.slice(0, 2)}:${sunRise.slice(2, 4)}` : "--:--"}</span>
                    <span>일몰: {sunSet ? `${sunSet.slice(0, 2)}:${sunSet.slice(2, 4)}` : "--:--"}</span>
                </li>
            </ul>
        </div>
       </div>
    )
}
export default SunModal