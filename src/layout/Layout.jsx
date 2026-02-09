import { Route, Routes } from "react-router-dom";
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
  // const clicklog = async () => {
  //   try {
  //     const result = await fetchTide();
  //     console.log("최종 result", result);
  //   } catch (e) {
  //     console.log("에러", e);
  //   }
  // };
  return (
    <>
      <Header></Header>
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
