import { useEffect, useRef } from "react";
import styles from "./Map.module.scss"

function Map({lat,lot}) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const container = mapRef.current;
    if (!container) return;

    const initMap = () => {
      if (!window.kakao?.maps) {
        console.warn("카카오 SDK 아직 로드 안됨, 재시도 중...");
        return false;
      }

      window.kakao.maps.load(() => {
        if (!container || mapInstanceRef.current) return;

        const center = new window.kakao.maps.LatLng(
          Number(lat) || 37.5665,
          Number(lot) || 126.978
        );
        const options = {
          center,
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);
        mapInstanceRef.current = map;

        // 마커 표시
        const marker = new window.kakao.maps.Marker({
          position: center,
        });
        marker.setMap(map);
      });
      return true;
    };

    if (!initMap()) {
      const timer = setInterval(() => {
        if (initMap()) clearInterval(timer);
      }, 100);
      return () => clearInterval(timer);
    }

    return () => {
      mapInstanceRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className={styles.container}
    />
  );
}

export default Map;