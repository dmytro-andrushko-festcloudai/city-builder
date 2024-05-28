import { BLOCKS_INIT } from "../constants";

export function getBuildingsByGrid(size: number) {
  const oldSize = BLOCKS_INIT.length;
  const newSize = Math.pow(size, 2);

  if (newSize <= oldSize) return BLOCKS_INIT.slice(0, newSize);

  const arr = new Array(newSize - BLOCKS_INIT.length).fill(0);

  return [...BLOCKS_INIT, ...arr];
}

export function getBuildingsByGridNew(size: number) {
  const oldSize = BLOCKS_INIT.length;
  const newSize = Math.pow(size, 2);

  if (newSize <= oldSize) return BLOCKS_INIT.slice(0, newSize);

  const arr = new Array(newSize - BLOCKS_INIT.length).fill(0);

  return [...BLOCKS_INIT, ...arr];
}

export const setLocalData = (key: string, data: any) => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem(key, jsonData);
};

export const getLocalData = (key: string) => {
  const jsonData = localStorage.getItem(key);

  if (!jsonData) return jsonData;

  return JSON.parse(jsonData);
};
