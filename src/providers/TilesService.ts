export const constants = {
  numTilesX: 12,
  numTilesY: 6,
  tileSizeX: 260,
  tileSizeY: 460,
};

export const indexToTileXY = (i:number) => {
  const tileX = i % constants.numTilesX;
  const tileY = Math.floor(i / constants.numTilesX);
  const x = tileX * constants.tileSizeX;
  const y = tileY * constants.tileSizeY;

  return { tileX, tileY, x, y };
};

export const indexToBgPosition = (i: number) => {
  const { tileX, tileY } = indexToTileXY(i);
  return `${(tileX / (constants.numTilesX - 1)) * 100}% ${
    (tileY / (constants.numTilesY - 1)) * 100
  }%`;
};

export const tileToBgPosition = ({ x, y }: { x: number; y: number }) => {
  return `${(x / constants.tileSizeX / (constants.numTilesX - 1)) * 100}% ${
    (y / constants.tileSizeY / (constants.numTilesY - 1)) * 100
  }%`;
};

export const indexToPosition = (i:number, gridSize = 6) => {
  const tileX = i % gridSize;
  const tileY = Math.floor(i / gridSize);
  return { tileX, tileY };
};

export const positionToIndex = (tileX: number, tileY: number, gridSize = 6) =>
  tileY * gridSize + tileX;

export const indexToViewPosition = (
  i:number,
  gridSize = 6,
  offsetX = 0,
  offsetY = 0
) => {
  const { tileX, tileY } = indexToPosition(i, gridSize);

  return {
    left: `${(tileX - tileY - 1) * 128 + offsetX}px`,
    top: `${(tileX + tileY) * 73 + offsetY}px`,
  };
};

export const updateGridSize = (
  oldGridSize: number,
  newGridSize: number,
  oldTiles: number[]
) => {
  // Save tiles along with their grid coordinates
  const save = new Map();
  oldTiles.forEach((tile, i) => {
    const coords = indexToPosition(i, oldGridSize);
    save.set(coords, tile);
  });

  // Create new empty board
  const newTiles = createTiles(newGridSize, false);

  // Restore saved tiles, getting their new index from their grid coordinates
  save.forEach((tile, coords) => {
    const newIdx = positionToIndex(coords.tileX, coords.tileY, newGridSize);
    if (newIdx > -1 && newIdx < newTiles.length) {
      newTiles[newIdx] = tile;
    }
  });

  return newTiles;
};

export const availableTiles = new Array(
  constants.numTilesX * constants.numTilesY
)
  .fill(1)
  .map((_, i) => indexToTileXY(i));

export const createTiles = (gridSize: number, randomize = true) =>
  new Array(gridSize * gridSize)
    .fill(0)
    .map(() => (randomize ? Math.floor(Math.random() * 72) : 0));
