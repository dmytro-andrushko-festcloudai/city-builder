import React from 'react';
import { indexToViewPosition } from 'providers/TilesService';
import { BLOCK_LIBRARY, BLOCK_TYPES } from '../../constants';
import style from './cityBuilder.module.css';

const getTileIdxFromBtnEvent = (ev) =>
  ev.target.hasAttribute('data-tile-idx') ? Number(ev.target.getAttribute('data-tile-idx')) : -1;

export default function TilesView({
  tiles,
  onLeftClick,
  onRightClick,
  gridSize = 6,
  offsetX = 130 * gridSize,
  offsetY = -300,
  selectedTile,
}) {
  const handleClick = (ev) => {
    const i = getTileIdxFromBtnEvent(ev);
    if (i > -1) {
      ev.preventDefault();
      ev.stopPropagation();
      if (ev.buttons === 1) {
        onLeftClick(i);
      } else if (ev.buttons === 2) {
        onRightClick(i);
      }
    }
  };
  const handleMouseMove = (ev) => {
    if (ev.buttons) {
      handleClick(ev);
    }
  };

  return (
    <div className={style.tilesView} onMouseMove={handleMouseMove}>
      {tiles.map((tile, i) => {
        const { top, left } = indexToViewPosition(i, gridSize, offsetX, offsetY);

        const isNotGround = BLOCK_LIBRARY[tile].type === BLOCK_TYPES.ground.type;

        return (
          <div
            key={i}
            className={`${style.tile} ${BLOCK_LIBRARY[tile].type !== BLOCK_TYPES.business.type ? style.withHover : style.withError}`}
            style={{
              backgroundImage: `url(${BLOCK_LIBRARY[tile].url})`,
              top,
              left,
              '--hover-image': `url(${BLOCK_LIBRARY[selectedTile].url})`,
            }}
          >
            <div className={`${style.tileBtn} tileBtn`} data-tile-idx={i} onMouseDown={handleClick} />
          </div>
        );
      })}
    </div>
  );
}
