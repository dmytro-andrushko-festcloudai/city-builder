import imgSrc1 from './assets/Ground.png';
import imgSrc2 from './assets/Grass.png';
import imgSrc3 from './assets/Church.png';
import imgSrc4 from './assets/Pravda.png';
import imgSrc6 from './assets/milk_cooperation_small.png';
import imgSrc7 from './assets/milk_cooperation.png';

export const BLOCK_TYPES = {
  ground: { type: 'ground' },
  business: { type: 'business' },
};

export const BLOCK_LIBRARY = [
  { url: imgSrc1, type: BLOCK_TYPES.ground.type },
  { url: imgSrc2, type: BLOCK_TYPES.ground.type },
  { url: imgSrc3, type: BLOCK_TYPES.business.type },
  { url: imgSrc4, type: BLOCK_TYPES.business.type },
  { url: imgSrc6, type: BLOCK_TYPES.business.type },
  { url: imgSrc7, type: BLOCK_TYPES.business.type },
];
