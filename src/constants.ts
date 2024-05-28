import imgSrc1 from "./assets/Ground.png";
import imgSrc2 from "./assets/Grass.png";
import imgSrc3 from "./assets/Church.png";
import imgSrc4 from "./assets/Pravda.png";
import imgSrc6 from "./assets/milk_cooperation_small.png";
import imgSrc7 from "./assets/milk_cooperation.png";
import imgSrc8 from "./assets/halychyna_alchemy.png";
import imgSrc9 from "./assets/Ribs.png";
import { BlockType } from "./types";
import { SelectOptionType } from "./components/ui/select/Select";

export const BLOCK_TYPES = {
  ground: { type: "ground" },
  business: { type: "business" },
};

export const BLOCK_LIBRARY = [
  { url: imgSrc1, type: BLOCK_TYPES.ground.type },
  { url: imgSrc2, type: BLOCK_TYPES.ground.type },
  { url: imgSrc3, type: BLOCK_TYPES.business.type },
  { url: imgSrc4, type: BLOCK_TYPES.business.type },
  { url: imgSrc6, type: BLOCK_TYPES.business.type },
  { url: imgSrc7, type: BLOCK_TYPES.business.type },
  { url: imgSrc8, type: BLOCK_TYPES.business.type },
  { url: imgSrc9, type: BLOCK_TYPES.business.type },
];

export const BLOCKS_INIT = [
  3, 0, 0, 2, 0, 2, 0, 5, 0, 0, 3, 0, 3, 0, 5, 3, 0, 3, 0, 4, 2, 0, 0, 0, 5, 4,
  0, 0, 0, 5, 3, 0, 4, 0, 0, 4, 0, 0, 0, 3, 0, 3, 6, 5, 3, 0, 3, 0, 4, 2, 0, 0,
  0, 5, 4, 0, 0, 2, 0, 2, 0, 5, 0, 0, 3, 0, 3, 0, 5, 3, 0, 3, 0, 4, 2, 0, 6, 0,
  5, 4, 0, 6, 0, 5, 3, 0, 4, 0,
];

export const GRID_SIZE_INIT = 8;

export const getTileIdxFromBtnEvent = (
  e: React.MouseEvent<HTMLDivElement, MouseEvent>
) => {
  const target = e.target as HTMLDivElement;

  return target.hasAttribute("data-tile-idx")
    ? Number(target.getAttribute("data-tile-idx"))
    : -1;
};

export const businessOptions: SelectOptionType[] = [
  { label: "Реберня #1", value: "001" },
  { label: "Реберня #2", value: "002" },
  { label: "Реберня #3", value: "003" },
  { label: "Реберня #4", value: "004" },
  { label: "Реберня #5", value: "005" },
  { label: "Реберня #6", value: "006" },
  { label: "П'яна вишня #1", value: "007" },
  { label: "П'яна вишня #2", value: "008" },
  { label: "Правда #1", value: "009" },
  { label: "Правда #2", value: "010" },
  { label: "Правда #3", value: "011" },
  { label: "Мазох", value: "012" },
  { label: "Галицька алхімія", value: "013" },
  { label: "Криївка", value: "014" },
  { label: "Львівська копальня кави", value: "015" },
];

export const dataTypeOptions: SelectOptionType[] = [
  { label: "Дохід", value: "income" },
  { label: "Середній чек", value: "bill_avr" },
  { label: "К-ть проданої продукції", value: "production" },
];

export const viewTypeOptions: SelectOptionType[] = [
  { label: "Таблиця", value: "table" },
  { label: "Графік", value: "chart" },
];

export const BLOCKS_INIT_NEW: BlockType[] = [
  {
    business: "001",
    dataType: "income",
    id: 0,
    viewType: "table",
    imgId: 7,
  },
  {
    id: 1,
    imgId: 0,
  },

  {
    business: "003",
    dataType: "income",
    id: 2,
    viewType: "chart",
    imgId: 7,
  },
  {
    id: 3,
    imgId: 0,
  },
  {
    business: "002",
    dataType: "income",
    id: 4,
    viewType: "table",
    imgId: 3,
  },
  {
    id: 5,
    imgId: 0,
  },
  {
    business: "002",
    dataType: "income",
    id: 6,
    viewType: "table",
    imgId: 3,
  },

  {
    id: 7,
    imgId: 0,
  },

  {
    id: 8,
    imgId: 0,
  },

  {
    business: "003",
    dataType: "income",
    id: 9,
    viewType: "table",
    imgId: 3,
  },
  {
    id: 10,
    imgId: 0,
  },
  {
    id: 11,
    imgId: 0,
  },
  {
    id: 12,
    imgId: 0,
  },

  {
    business: "009",
    dataType: "income",
    id: 13,
    viewType: "chart",
    imgId: 2,
  },
  {
    id: 14,
    imgId: 0,
  },
  {
    id: 15,
    imgId: 0,
  },
  {
    business: "013",
    dataType: "income",
    id: 16,
    viewType: "table",
    imgId: 6,
  },
  {
    id: 17,
    imgId: 0,
  },
  {
    id: 18,
    imgId: 0,
  },
  {
    id: 19,
    imgId: 0,
  },
  {
    id: 20,
    imgId: 0,
  },
  {
    business: "010",
    dataType: "income",
    id: 21,
    viewType: "table",
    imgId: 3,
  },
  {
    id: 22,
    imgId: 0,
  },
  {
    id: 23,
    imgId: 0,
  },
  {
    business: "002",
    dataType: "income",
    id: 24,
    viewType: "table",
    imgId: 3,
  },

  {
    id: 25,
    imgId: 0,
  },
  {
    id: 26,
    imgId: 0,
  },
  {
    id: 27,
    imgId: 0,
  },
  {
    id: 28,
    imgId: 0,
  },
  {
    id: 29,
    imgId: 0,
  },
  {
    business: "002",
    dataType: "income",
    id: 30,
    viewType: "chart",
    imgId: 2,
  },
  {
    id: 31,
    imgId: 0,
  },
  {
    id: 32,
    imgId: 0,
  },
  {
    id: 33,
    imgId: 0,
  },
  {
    id: 34,
    imgId: 0,
  },
  {
    business: "001",
    dataType: "income",
    id: 35,
    viewType: "table",
    imgId: 2,
  },
  {
    id: 36,
    imgId: 0,
  },
  {
    id: 37,
    imgId: 0,
  },
  {
    id: 38,
    imgId: 0,
  },
  {
    id: 39,
    imgId: 0,
  },
  {
    id: 40,
    imgId: 0,
  },
  {
    id: 41,
    imgId: 0,
  },
  {
    id: 42,
    imgId: 0,
  },
  {
    id: 43,
    imgId: 0,
  },
  {
    id: 44,
    imgId: 0,
  },
  {
    id: 45,
    imgId: 0,
  },
  {
    business: "003",
    dataType: "income",
    id: 46,
    viewType: "chart",
    imgId: 3,
  },
  {
    id: 47,
    imgId: 0,
  },
  {
    id: 48,
    imgId: 0,
  },
  {
    id: 49,
    imgId: 0,
  },
  {
    business: "003",
    dataType: "income",
    id: 50,
    viewType: "table",
    imgId: 3,
  },
  {
    id: 51,
    imgId: 0,
  },
  {
    business: "001",
    dataType: "income",
    id: 52,
    viewType: "table",
    imgId: 3,
  },
  {
    id: 53,
    imgId: 0,
  },
  {
    id: 54,
    imgId: 0,
  },
  {
    id: 55,
    imgId: 0,
  },
  {
    id: 56,
    imgId: 0,
  },
  {
    id: 57,
    imgId: 0,
  },
  {
    id: 58,
    imgId: 0,
  },
  {
    id: 59,
    imgId: 0,
  },
  {
    id: 60,
    imgId: 0,
  },
  {
    business: "002",
    dataType: "income",
    id: 61,
    viewType: "table",
    imgId: 3,
  },
  {
    id: 62,
    imgId: 0,
  },
  {
    id: 63,
    imgId: 0,
  },
];
