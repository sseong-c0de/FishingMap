

export const guideData = {
  home: [
    {
      id: "score",
      title: "바다낚시 점수",
      desc: "바다낚시 점수는 수온, 파고, 조석 등을 분석한 숫자이며, 지수는 이를 5단계로 구분한 등급입니다.",
      imgAlt: "바다낚시 버튼 이미지",
      imgSrc: "/img/guide/score.png"
    },
    {
      id: "tide",
      title: "물때 정보",
      desc: "날짜별 만조·간조 시간과 조위 정보를 제공합니다.",
      imgAlt: "물때 정보 버튼 이미지",
      imgSrc: "/img/guide/tide.png"
    },
    {
      id: "sun",
      title: "일출·일몰표",
      desc: "선택한 지역의 일출·일몰 시각을 한눈에 확인할 수 있습니다.",
      subDesc: "원하는 지역을 검색 후 날짜를 선택해 확인해보세요.",
      imgAlt: "일출·일몰 버튼 이미지",
      imgSrc: "/img/guide/sun.png"
    },
    {
      id: "ban",
      title: "금어기",
      desc: "어종별 금어기(포획 금지 기간)를 확인할 수 있습니다.",
      subDesc: "불법 포획을 예방하고 안전한 낚시를 할 수 있습니다.",
      imgAlt: "금어기 버튼 이미지",
      imgSrc: "/img/guide/ban.png"
    }
  ],
  tide: [
    {
      id: "veryGood",
      title: "매우 좋음",
      desc: "파도가 매우 잔잔하며, 대상어종의 활동이 활발한 수온입니다.",
      subDesc: "조과가 매우 좋은 물때이며 낚시하기에 기온도 쾌적합니다.",
      imgAlt: "매우 좋음 등급 이미지",
      imgSrc: "/img/guide/veryGood.png"
    },
    {
      id: "good",
      title: "좋음",
      desc: "파도가 잔잔하고 대상어종의 활동이 좋은 수온입니다.",
      subDesc: "조과가 좋은 물때이며 낚시하기에 적합한 기온입니다.",
      imgAlt: "좋음 등급 이미지",
      imgSrc: "/img/guide/good.png"
    },
    {
      id: "normal",
      title: "보통",
      desc: "파도가 다소 있으며 대상어종의 활동에 일부 제한이 있습니다.",
      subDesc: "조과가 좋지 않을 수 있으며 체온 유지에 유의해야 합니다.",
      imgAlt: "보통 등급 이미지",
      imgSrc: "/img/guide/normal.png"
    },
    {
      id: "bad",
      title: "나쁨",
      desc: "파도가 높아 안전에 유의해야 하며 활동하기 좋지 않은 수온입니다.",
      subDesc: "조과가 좋지 않고 장시간 낚시 시 불편할 수 있습니다.",
      imgAlt: "나쁨 등급 이미지",
      imgSrc: "/img/guide/bad.png"
    },
    {
      id: "veryBad",
      title: "매우 나쁨",
      desc: "파도가 매우 높아 낚시가 어려운 환경입니다.",
      subDesc: "대상어종이 서식하기 어려운 수온이며 출조를 피하는 것이 좋습니다.",
      imgAlt: "매우 나쁨 등급 이미지",
      imgSrc: "/img/guide/veryBad.png"
    }
  ]
};
export default guideData;