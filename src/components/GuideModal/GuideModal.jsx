import styles from "./GuideModal.module.scss"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css/pagination"
import "swiper/css"
import guideData from "../../data/guideData"
function GuideModal({ setOpenModal, dataType }) {
    const slides = guideData[dataType]
    return (
        <div className={styles.modal}>
            <div className={styles.container}>
                <div className={styles.h2Wrap}>
                    <h2>가이드</h2>
                    <button
                        className={styles.closeBtn}
                        onClick={() => {
                            setOpenModal(false)
                        }}
                    >
                        X
                    </button>
                </div>
                <div className={styles.swiperWrap}>
                    <Swiper slidesPerView={1}
                        spaceBetween={100}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}>
                        {slides.map((item,key) =>
                            <SwiperSlide key={key}>
                                <div className={styles.guideContainer}>
                                    <div className={styles.btnImg}>
                                        <img src={item.imgSrc} alt={item.imgAlt}></img>
                                    </div>
                                    <div className={styles.imgGuide}>
                                        <p>{item.title}</p>
                                        <p>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                        {/* <SwiperSlide>
                <div className={styles.guideContainer}>
                <div className={styles.btnImg}>
                    <img src="#" alt="바다낚시버튼 이미지"></img>
                </div>
                <div className={styles.imgGuide}>
                    <p>바다낚시 점수</p>
                    <p>
                        <span>
                        바다낚시 점수는 수온, 파고, 조석 등을 분석한 숫자이며,
                        지수는 이를 5단계로 구분한 등급입니다.
                        </span>
                    </p>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.guideContainer}>
                <div className={styles.btnImg}>
                    <img src="#" alt="물때 정보 버튼 이미지"></img>
                </div>
                <div className={styles.imgGuide}>
                    <p>물때 정보</p>
                    <p>
                        <span>
                        날짜별 만조·간조 시간과 조위 정보를 제공합니다.
                        </span>
                    </p>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.guideContainer}>
                <div className={styles.btnImg}>
                    <img src="#" alt="알출일몰버튼 이미지"></img>
                </div>
                <div className={styles.imgGuide}>
                    <p>일출일몰표</p>
                    <p>
                        <span>
                        선택한 지역의 일출·일몰,시각을 한눈에 확인할 수 있습니다.
                        원하는 지역을 검색 후 날짜를 선택하여 일출 일몰을 확인해보세요.
                        </span>
                    </p>
                </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={styles.guideContainer}>
                <div className={styles.btnImg}>
                    <img src="#" alt="금어기버튼 이미지"></img>
                </div>
                <div className={styles.imgGuide}>
                    <p>금어기</p>
                    <p>
                        <span>
                        어종별 금어기(포획 금지 기간)를 확인할 수 있습니다.
                         <span>어종별 금어기 기간을 확인하여
                        불법 포획을 예방하고 안전한 낚시를 할 수 있습니다.</span>
                        </span>
                    </p>
                </div>
                </div>
              </SwiperSlide> */}
                    </Swiper>
                </div>

            </div>
        </div>
    )
}
export default GuideModal