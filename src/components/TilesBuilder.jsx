import React, { useState, useEffect } from "react";
import Header from "components/header/Header";
import TilesLibrary from "components/TilesLibrary";
import CityBuilder from "components/cityBuilder/CityBuilder";
import CityViewer from "components/cityViewer/CityViewer";
import {
  createTiles,
  updateGridSize,
  loadStateFromHash,
} from "providers/TilesService";
import { debouce, saveToHash } from "providers/utils";
import "./TilesBuilder.css";

let lastHash = "";

const baseTiles = [
  3, 0, 0, 2, 0, 2, 0, 5, 0, 0, 3, 0, 3, 0, 5, 3, 0, 3, 0, 4, 2, 0, 0, 0, 5, 4,
  0, 0, 0, 5, 3, 0, 4, 0, 0, 4,
];

export default function TilesBuilder() {
  const [gridSize, setGridSize] = useState(6);
  const [tiles, setTiles] = useState(baseTiles);
  const [selectedTile, setSelectedTile] = useState(0);
  const [isEditMode, setIsEditMode] = useState(true);

  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  });

  /**
   * Utils
   */
  const updateHash = (delay = 500) =>
    debouce(() => {
      lastHash = saveToHash({ gridSize, tiles });
    }, delay);
  const onHashChange = (ev) => {
    const newHash = new URL(ev.newURL).hash.substr(1);
    if (lastHash !== newHash) {
      lastHash = newHash;
      handleLoadHash(newHash, false);
    }
  };
  /**
   * Header handlers
   */
  const handleLoadHash = (hash, doUpdate = true) => {
    const { gridSize: newGridSize, tiles: newTiles } = loadStateFromHash(
      gridSize,
      tiles,
      hash
    );

    // Update state
    setGridSize(newGridSize);
    setTiles(newTiles);
    if (doUpdate) {
      updateHash(0);
    }
  };
  const handleGridSizeChange = (ev) => {
    const newValue = Number(ev.target.value);
    const newTiles = updateGridSize(gridSize, newValue, tiles);

    // Update state
    setGridSize(newValue);
    setTiles(newTiles);
    updateHash();
  };
  const randomize = () => {
    setTiles(createTiles(gridSize));
    updateHash(0);
  };
  const clear = () => {
    setTiles(createTiles(gridSize, false));
    updateHash(0);
  };

  /**
   * Library handlers
   */
  const handleSelect = (newSelection) => {
    if (newSelection !== selectedTile) {
      setSelectedTile(newSelection);
    }
  };

  /**
   * View Handlers
   */
  const setTile = (tileIdx, tileType) => {
    const newTiles = [...tiles];
    newTiles[tileIdx] = tileType;
    setTiles(newTiles);

    updateHash();
  };
  const leftClick = (tileIdx) => setTile(tileIdx, selectedTile);
  const rightClick = (tileIdx) => setTile(tileIdx, 0);

  const editHandler = () => {
    setIsEditMode((prev) => !prev);
  };

  return (
    <div className="tiles-builder">
      <Header
        gridSize={gridSize}
        onLoadHash={handleLoadHash}
        onGridSizeChange={handleGridSizeChange}
        onRandomize={randomize}
        onClear={clear}
        isEditMode={isEditMode}
        onEditHandler={editHandler}
      />

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
        <CityViewer
          tiles={tiles}
          gridSize={gridSize}
          onLeftClick={leftClick}
          onRightClick={rightClick}
        />
      )}
    </div>
  );
}
