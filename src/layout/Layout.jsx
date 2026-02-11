import { Route, Routes, useLocation } from "react-router-dom";
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
    "/":"홈",
    "/tide":"바다낚시 점수",
    "/tideCheck":"물때 정보",
    "/ban":"금어기 정보",
    "/":"홈",
    }
    const location = useLocation();
    const pageTitles = pageTitle[location.pathname] ?? "제목";
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
