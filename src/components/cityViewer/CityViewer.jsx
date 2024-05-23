import React, { useState } from 'react';
import { indexToViewPosition } from 'providers/TilesService';
import Tooltip from './tooltip/Tooltip';
import style from './cityViewer.module.css';
import { BLOCK_LIBRARY, BLOCK_TYPES } from '../../constants';

const getTileIdxFromBtnEvent = (ev) =>
  ev.target.hasAttribute('data-tile-idx') ? Number(ev.target.getAttribute('data-tile-idx')) : -1;

export default function CityViewer({
  tiles,
  // onLeftClick,
  // onRightClick,
  gridSize = 6,
  offsetX = 150 * gridSize,
  offsetY = -300,
}) {
  const [selected, setSelected] = useState(null);

  const onClick = (i) => {
    setSelected(i);
  };

  const handleClick = (ev) => {
    const i = getTileIdxFromBtnEvent(ev);
    if (i > -1) {
      ev.preventDefault();
      ev.stopPropagation();

      if (ev.buttons === 1) {
        // onLeftClick(i);
        onClick(i);
      } else if (ev.buttons === 2) {
        // onRightClick(i);
      }
    }
  };

  const closeHandler = () => {
    setSelected(null);
  };

  return (
    <div className={style.tilesView}>
      {tiles.map((tile, i) => {
        const { top, left } = indexToViewPosition(i, gridSize, offsetX, offsetY);

        const { url, type } = BLOCK_LIBRARY[tile];

        return (
          <div
            key={i}
            className={`${style.tile} ${type === BLOCK_TYPES.business.type ? style.withHover : ''}`}
            style={{
              backgroundImage: `url(${url})`,
              top,
              left,

              '--hover-image': `url(${url})`,
            }}
          >
            {selected === i && <Tooltip onClose={closeHandler} />}

            <div
              className={style.tileBtn}
              data-tile-idx={i}
              onMouseDown={type === BLOCK_TYPES.business.type ? handleClick : undefined}
            ></div>
          </div>
        );
      })}
    </div>
  );
}
