import { useEffect, useRef } from "react";
import styles from "./Map.module.scss"

function Map({lat,lot}) {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const container = mapRef.current;
    if (!container) return;

    let retryCount = 0;
    const RETRY_INTERVAL = 500;
    const WARN_EVERY = 20; // 20번마다 한 번만 경고 (약 10초)

    const initMap = () => {
      if (!window.kakao?.maps) {
        retryCount++;
        if (retryCount === 1 || retryCount % WARN_EVERY === 0) {
          console.warn("카카오 SDK 로드 대기 중...");
        }
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
      }, RETRY_INTERVAL);
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