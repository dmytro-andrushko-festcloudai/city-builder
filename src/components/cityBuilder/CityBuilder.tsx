import ScrollContainer from "react-indiana-drag-scroll";
import { indexToViewPosition } from "../../providers/TilesService";
import { BLOCK_LIBRARY, BLOCK_TYPES } from "../../constants";
import style from "./cityBuilder.module.css";

const getTileIdxFromBtnEvent = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  const target = e.target as HTMLDivElement;

  return target.hasAttribute("data-tile-idx")
    ? Number(target.getAttribute("data-tile-idx"))
    : -1;
};
type CityBuilderProps = {
  tiles: number[];
  onLeftClick: (i: number) => void;
  onRightClick: (i: number) => void;
  gridSize: number;
  selectedTile: number;
  offsetX?: number;
  offsetY?: number;
};

const CityBuilder = ({
  tiles,
  onLeftClick,
  onRightClick,
  gridSize = 6,
  offsetX = 130 * gridSize,
  offsetY = -300,
  selectedTile,
}: CityBuilderProps) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const i = getTileIdxFromBtnEvent(e);
    if (i > -1) {
      e.preventDefault();
      e.stopPropagation();
      if (e.buttons === 1) {
        onLeftClick(i);
      } else if (e.buttons === 2) {
        onRightClick(i);
      }
    }
  };


  return (
    <ScrollContainer className={style.tilesView}>
      {tiles.map((tile, i) => {
        const { top, left } = indexToViewPosition(
          i,
          gridSize,
          offsetX,
          offsetY
        );

        return (
          <div
            key={i}
            className={`${style.tile} ${
              BLOCK_LIBRARY[tile].type !== BLOCK_TYPES.business.type
                ? style.withHover
                : style.withError
            }`}
            style={{
              backgroundImage: `url(${BLOCK_LIBRARY[tile].url})`,
              top,
              left,
              // @ts-expect-error: Unreachable code error
              "--hover-image": `url(${BLOCK_LIBRARY[selectedTile].url})`,
            }}
          >
            <div
              className={`${style.tileBtn} tileBtn`}
              data-tile-idx={i}
              onMouseDown={handleClick}
            />
          </div>
        );
      })}
    </ScrollContainer>
  );
};

export default CityBuilder;
