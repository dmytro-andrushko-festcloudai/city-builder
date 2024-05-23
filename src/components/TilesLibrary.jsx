import React from 'react';
import { BLOCK_LIBRARY } from '../constants';
import './TilesLibrary.css';

export default function TilesLibrary({ selectedTile, onSelect }) {
  return (
    <div className='tiles-library'>
      <div className='list'>
        {BLOCK_LIBRARY.map(({ url }, i) => (
          <div key={i} className={`tile ${selectedTile === i ? 'selected' : ''}`} onClick={() => onSelect(i)}>
            <div
              className='tile-img'
              style={{
                backgroundImage: `url(${url})`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
