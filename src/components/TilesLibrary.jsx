import "./TilesLibrary.css";
import React from "react";
import imgSrc1 from "../assets/ground.png";
import imgSrc2 from "../assets/grass.png";
import imgSrc3 from "../assets/church.png";
import imgSrc4 from "../assets/pravda.png";
import imgSrc5 from "../assets/farm.png";

export const arr = [{ url: imgSrc1 }, { url: imgSrc2 }, { url: imgSrc3 }, { url: imgSrc4 }, { url: imgSrc5 }];

export default function TilesLibrary({ selectedTile, onSelect }) {
  return (
    <div className="tiles-library">
      {arr.map(({ url }, i) => (
        <div
          key={i}
          className={`tile ${selectedTile === i ? "selected" : ""}`}
          onClick={() => onSelect(i)}
        >
          <div
            className="tile-img"
            style={{
              backgroundImage: `url(${url})`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
