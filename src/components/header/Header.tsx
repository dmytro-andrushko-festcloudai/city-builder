import { Link } from "react-router-dom";
import style from "./header.module.css";
import { useLocation, matchPath } from "react-router";
import { Button } from "@mui/material";

export default function Header() {
  const { pathname } = useLocation();
  const isEditPath = matchPath("/edit", pathname);

  return (
    <header className={style.header}>
      <div></div>
      <div className={style.options}>
        <Button variant='contained' component={Link} to={isEditPath ? "/" : "/edit"}>
          {isEditPath ? "Перегляд" : "Редагування"}
        </Button>
      </div>
    </header>
  );
}
