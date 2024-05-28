import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import style from "./builder.module.css";

const Layout = () => {
  return (
    <div className={style.tilesBuilder}>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
