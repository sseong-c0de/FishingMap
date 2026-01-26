import BackButton from "../components/BackButton/BackButton";
import Drawer from "../components/Drawer/Drawer";
import Header from "../components/Header/Header";
import Search from "../components/Search/Search";
import BanSearch from "../pages/Ban/BanSearch";
import Home from "../pages/Home/Home";
import TideCheck from "../pages/TIdeCheck/TideCheck";
import TideSearch from "../pages/TideSearch/TideSearch";
import styles from "./Layout.module.scss";

function Layout() {
  return (
    <>
      <Header></Header>
      {/* <Drawer></Drawer> */}
      <main className={styles.appMain}>
        {/* <Home></Home> */}
        {/* <TideSearch></TideSearch> */}
        {/* <TideCheck></TideCheck> */}
        <BanSearch></BanSearch>
      </main>
    </>
  );
}
export default Layout;
