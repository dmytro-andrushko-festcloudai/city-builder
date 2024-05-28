import { useState } from "react";
import { Tooltip } from "@mui/material";
import ScrollContainer from "react-indiana-drag-scroll";
import { indexToViewPosition } from "../../../../providers/TilesService";
import TooltipContent from "../tooltipContent/TooltipContent";
import { BLOCK_LIBRARY, BLOCK_TYPES } from "../../../../constants";
import { BlockType } from "../../../../types";
import style from "./cityViewer.module.css";

const getTileIdxFromBtnEvent = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  const target = e.target as HTMLDivElement;

  return target.hasAttribute("data-tile-idx")
    ? Number(target.getAttribute("data-tile-idx"))
    : -1;
};

type CityViewerProps = {
  tiles: number[];
  gridSize: number;
  businesses: BlockType[];
  offsetX?: number;
  offsetY?: number;
};

const sx = {
  tooltip: {
    backgroundColor: "#f54349",
    borderRadius: "20px",
    padding: " 10px 20px  20px 20px",
    maxWidth: "unset",
  },
};

export default function CityViewer({
  // tiles,
  gridSize = 6,
  businesses,
  offsetX = 150 * gridSize,
  offsetY = -300,
}: CityViewerProps) {
  const [selected, setSelected] = useState<null | number>(null);

  const onClick = (i: number) => {
    setSelected(i);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const i = getTileIdxFromBtnEvent(e);
    if (i > -1) {
      e.preventDefault();
      e.stopPropagation();

      if (e.buttons === 1) {
        // onLeftClick(i);
        onClick(i);
      } else if (e.buttons === 2) {
        // onRightClick(i);
      }
    }
  };

  const closeHandler = () => {
    setSelected(null);
  };

  return (
    <ScrollContainer className={style.tilesView}>
      {businesses.map((business, i) => {
        const { top, left } = indexToViewPosition(
          i,
          gridSize,
          offsetX,
          offsetY
        );

        const { url, type } = BLOCK_LIBRARY[business.imgId];

        const withTooltip =
          BLOCK_LIBRARY[business.imgId].type === BLOCK_TYPES.business.type;

        return (
          <div
            key={i}
            className={`${style.tile} ${
              type === BLOCK_TYPES.business.type ? style.withHover : ""
            }`}
            style={{
              backgroundImage: `url(${url})`,
              top,
              left,
              // @ts-expect-error: Unreachable code error
              "--hover-image": `url(${url})`,
            }}
          >
            {withTooltip ? (
              <Tooltip
                onClose={closeHandler}
                open={selected === i}
                title={
                  <TooltipContent
                    onClose={closeHandler}
                    business={business}
                  />
                }
                placement="top"
                disableFocusListener
                disableHoverListener
                disableTouchListener
                componentsProps={{
                  tooltip: {
                    sx: sx.tooltip,
                  },
                }}
              >
                <div
                  className={style.tileBtn}
                  data-tile-idx={i}
                  onMouseDown={
                    type === BLOCK_TYPES.business.type ? handleClick : undefined
                  }
                ></div>
              </Tooltip>
            ) : (
              <div
                className={style.tileBtn}
                data-tile-idx={i}
                onMouseDown={
                  type === BLOCK_TYPES.business.type ? handleClick : undefined
                }
              ></div>
            )}
          </div>
        );
      })}
    </ScrollContainer>
  );
}
