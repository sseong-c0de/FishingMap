import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import BackButton from "../components/BackButton/BackButton";
import Drawer from "../components/Drawer/Drawer";
import Header from "../components/Header/Header";
import BanSearch from "../pages/Ban/BanSearch";
import Home from "../pages/Home/Home";
import TideScore from "../pages/TideScore/TideScore";
import styles from "./Layout.module.scss";
import TideSearch from "../pages/TideSearch/TideSearch";
import TideCheckSearch from "../pages/TideCheckSearch/TideCheckSearch";
// import { fetchTide } from "../api/tide";

function Layout() {
  const pageTitle = {
    "/": "홈",
    "/tide": "바다낚시 점수",
    "/tide/score": "물때 점수",
    "/tideCheck": "물때 정보",
    "/ban": "금어기 정보",
  };
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const place = searchParams.get("place");
  let pageTitles = pageTitle[location.pathname] ?? "제목";
  if (location.pathname === "/tide/score" && place) {
    pageTitles = `${decodeURIComponent(place)} 점수`;
  }
  return (
    <>
      <Header pageTitles={pageTitles}></Header>
      {/* <Drawer></Drawer> */}
      <main className={styles.appMain}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tide" element={<TideSearch />} />
          <Route path="/tide/score" element={<TideScore />} />
          <Route path="/ban" element={<BanSearch />} />
          <Route path="/tideCheck" element={<TideCheckSearch />} />
        </Routes>
        {/* <button
          type="button"
          onClick={() => {
            clicklog();
          }}
        >
          11111
        </button> */}
        {/* <TideCheck></TideCheck> */}
      </main>
    </>
  );
}
export default Layout;
