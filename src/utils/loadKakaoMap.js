const KAKAO_MAP_URL = "https://dapi.kakao.com/v2/maps/sdk.js";

export function loadKakaoMapScript() {
  const key = import.meta.env.VITE_KAKAO_MAP_KEY;
  if (!key) {
    console.warn("VITE_KAKAO_MAP_KEY가 설정되지 않았습니다. .env 파일을 확인하세요.");
    return;
  }

  if (document.querySelector(`script[src*="${KAKAO_MAP_URL}"]`)) return;

  const script = document.createElement("script");
  script.src = `${KAKAO_MAP_URL}?appkey=${key}&autoload=false`;
  script.async = true;
  document.head.appendChild(script);
}
