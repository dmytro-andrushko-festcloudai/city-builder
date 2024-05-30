import { Link } from "react-router-dom";
import style from "./header.module.css";
import { useLocation, matchPath } from "react-router";
import { Button,
   SelectChangeEvent
   } from "@mui/material";
import Select from "../ui/select/Select";
import { zoomOptions } from "../../constants";
import { useBuilder } from "../../builderContext/builderContext";

export default function Header() {
  const { pathname } = useLocation();
  const isEditPath = matchPath("/edit", pathname);

  const {zoom, onChangeZoom} = useBuilder()

  const changeZoomHandler = (event: SelectChangeEvent) => {
    onChangeZoom(event.target.value);
  };

  return (
    <header className={style.header}>
      <div></div>
      <div className={style.options}>
        <Select
          options={zoomOptions}
          value={zoom}
          label="Zoom"
          onChange={changeZoomHandler}
        />

        <Button
          variant="contained"
          component={Link}
          to={isEditPath ? "/" : "/edit"}
        >
          {isEditPath ? "Перегляд" : "Редагування"}
        </Button>
      </div>
    </header>
  );
}
