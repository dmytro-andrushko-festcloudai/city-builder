import { Button } from "@mui/material";
import { BLOCK_LIBRARY } from "../../../../constants";
import { BlockType } from "../../../../types";
import style from "./sideBar.module.css";

type TilesLibraryType = {
  selectedTile: number | null;
  showElement: boolean;
  showElementsHandler: (val: boolean) => void;
  setCurrentBlockHandler: (data: BlockType | null) => void;
};

export default function TilesLibrary({
  selectedTile,
  showElement,
  showElementsHandler,
  setCurrentBlockHandler,
}: TilesLibraryType) {
  return (
    <div className={style.sideBar}>
      {showElement ? (
        <>
          <Button
            variant="contained"
            onClick={() => {
              showElementsHandler(false);
              setCurrentBlockHandler(null);
            }}
          >
            Назад
          </Button>

          <div className={style.list}>
            {BLOCK_LIBRARY.map(({ url }, i) => (
              <div
                key={i}
                className={`${style.tile} ${
                  selectedTile === i ? style.selected : ""
                }`}
                // @ts-expect-error: Unreachable code error
                onClick={() => setCurrentBlockHandler({ imgId: i })}
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
        </>
      ) : (
        <>
          <Button variant="contained" onClick={() => showElementsHandler(true)}>
            Додати новий бізнес
          </Button>
        </>
      )}
    </div>
  );
}
