import { useEffect, useState } from "react";
import CityViewer from "./components/cityViewer/CityViewer";
import { BLOCKS_INIT_NEW, GRID_SIZE_INIT } from "../../constants";
import { getBuildingsByGrid, getLocalData } from "../../providers/utils";
import { BlockType } from "../../types";
import style from "./builder.module.css";

const gridSize = GRID_SIZE_INIT;

const Builder = () => {
  const [businesses, setBusinesses] = useState<BlockType[]>([]);
  const [tiles] = useState(getBuildingsByGrid(gridSize));

  useEffect(() => {
    const data = getLocalData("businesses");

    if (data) {
      setBusinesses(data);
    } else {
      setBusinesses(BLOCKS_INIT_NEW);
    }
  }, []);

  return (
    <div className={style.content}>
      <CityViewer tiles={tiles} businesses={businesses} gridSize={gridSize} />
    </div>
  );
};

export default Builder;
