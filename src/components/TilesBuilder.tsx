import { useState } from "react";
import Header from "./header/Header";
import TilesLibrary from "./sideBar/SideBar";
import CityBuilder from "./cityBuilder/CityBuilder";
import CityViewer from "./cityViewer/CityViewer";
import "./TilesBuilder.css";

const baseTiles = [
  3, 0, 0, 2, 0, 2, 0, 5, 0, 0, 3, 0, 3, 0, 5, 3, 0, 3, 0, 4, 2, 0, 0, 0, 5, 4,
  0, 0, 0, 5, 3, 0, 4, 0, 0, 4,
];

const gridSizeInit = 6;

function getBaseTile(size: number) {
  const oldSize = baseTiles.length;
  const newSize = Math.pow(size, 2);

  if (newSize <= oldSize) return baseTiles.slice(0, newSize);

  const arr = new Array(newSize - baseTiles.length).fill(0);

  return [...baseTiles, ...arr];
}

export default function TilesBuilder() {
  const [gridSize] = useState(gridSizeInit);
  const [tiles, setTiles] = useState(getBaseTile(gridSize));
  const [selectedTile, setSelectedTile] = useState(0);
  const [isEditMode, setIsEditMode] = useState(true);

  /**
   * Library handlers
   */
  const handleSelect = (newSelection: number) => {
    if (newSelection !== selectedTile) {
      setSelectedTile(newSelection);
    }
  };

  /**
   * View Handlers
   */
  const setTile = (tileIdx: number, tileType: number) => {
    const newTiles = [...tiles];
    newTiles[tileIdx] = tileType;
    setTiles(newTiles);
  };
  const leftClick = (tileIdx: number) => setTile(tileIdx, selectedTile);
  const rightClick = (tileIdx: number) => setTile(tileIdx, 0);

  const editHandler = () => {
    setIsEditMode((prev) => !prev);
  };

  return (
    <div className="tiles-builder">
      <Header isEditMode={isEditMode} onEditHandler={editHandler} />

      {isEditMode && (
        <TilesLibrary selectedTile={selectedTile} onSelect={handleSelect} />
      )}

      {isEditMode ? (
        <CityBuilder
          tiles={tiles}
          gridSize={gridSize}
          onLeftClick={leftClick}
          onRightClick={rightClick}
          selectedTile={selectedTile}
        />
      ) : (
        <CityViewer tiles={tiles} gridSize={gridSize} />
      )}
    </div>
  );
}
