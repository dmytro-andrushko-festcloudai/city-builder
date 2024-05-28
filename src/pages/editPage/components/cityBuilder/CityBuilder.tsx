import ScrollContainer from "react-indiana-drag-scroll";
import { indexToViewPosition } from "../../../../providers/TilesService";
import {
  BLOCK_LIBRARY,
  BLOCK_TYPES,
  getTileIdxFromBtnEvent,
} from "../../../../constants";
import AddBlockModal from "../addBlockModal/AddBlockModal";
import style from "./cityBuilder.module.css";
import { BlockType } from "../../../../types";

type CityBuilderProps = {
  businesses: BlockType[];
  onLeftClick: (i: number, newData: BlockType) => void;
  // onRightClick: () => void;
  gridSize: number;
  offsetX?: number;
  offsetY?: number;
  openModal: boolean;
  handleClose: () => void;
  currentBlock: null | BlockType;
  onSave: (data: Omit<BlockType, 'imgId'>) => void;
};

const CityBuilder = ({
  businesses,
  onLeftClick,
  // onRightClick,
  gridSize = 6,
  offsetX = 130 * gridSize,
  offsetY = -300,
  openModal,
  handleClose,
  currentBlock,

  onSave,
}: CityBuilderProps) => {
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    newData: BlockType
  ) => {
    const i = getTileIdxFromBtnEvent(e);
    if (i > -1) {
      e.preventDefault();
      e.stopPropagation();
      if (e.buttons === 1) {
        onLeftClick(i, newData);
      } else if (e.buttons === 2) {
        // onRightClick(i);
      }
    }
  };

  return (
    <>
      <ScrollContainer className={style.tilesView}>
        {businesses.map((business, i) => {
          const { top, left } = indexToViewPosition(
            i,
            gridSize,
            offsetX,
            offsetY
          );

          const currentImgId =
            currentBlock && currentBlock?.imgId
              ? currentBlock?.imgId
              : business.imgId;
          return (
            <div
              key={i}
              className={`${style.tile} 
              ${
                BLOCK_LIBRARY[business.imgId].type !== BLOCK_TYPES.business.type
                  ? style.withHover
                  : business.imgId && currentBlock?.imgId
                  ? style.withError
                  : ""
              }
              `}
              style={{
                backgroundImage: `url(${BLOCK_LIBRARY[business.imgId].url})`,
                top,
                left,
                // @ts-expect-error: Unreachable code error
                "--hover-image": `url(${BLOCK_LIBRARY[currentImgId].url})`,
              }}
            >
              <div
                className={`${style.tileBtn} tileBtn`}
                data-tile-idx={i}
                onMouseDown={(e) => {
                  handleClick(e, {
                    ...business,
                     // @ts-expect-error: Unreachable code error
                    imgId: business.imgId || currentBlock?.imgId,
                  });
                }}
              />
            </div>
          );
        })}
      </ScrollContainer>

      {openModal && currentBlock && (
        <AddBlockModal
          open={openModal}
          handleClose={handleClose}
          onSave={onSave}
          currentBlock={currentBlock}
        />
      )}
    </>
  );
};

export default CityBuilder;
