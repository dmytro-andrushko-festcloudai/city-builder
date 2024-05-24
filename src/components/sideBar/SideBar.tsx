import { BLOCK_LIBRARY } from "../../constants";
import style from "./sideBar.module.css";

type TilesLibraryType = {
  selectedTile: number;
  onSelect: (val: number) => void;
};

export default function TilesLibrary({
  selectedTile,
  onSelect,
}: TilesLibraryType) {
  return (
    <div className={style.tilesLibrary}>
      <div className={style.list}>
        {BLOCK_LIBRARY.map(({ url }, i) => (
          <div
            key={i}
            className={`${style.tile} ${selectedTile === i ? style.selected : ""}`}
            onClick={() => onSelect(i)}
          >
            <div
              className={style.tileImg}
              style={{
                backgroundImage: `url(${url})`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
