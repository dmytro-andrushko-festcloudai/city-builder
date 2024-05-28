import { useEffect, useState } from "react";
import TilesLibrary from "./components/sideBar/SideBar";
import CityBuilder from "./components/cityBuilder/CityBuilder";
import { BLOCKS_INIT_NEW, GRID_SIZE_INIT } from "../../constants";
import { getLocalData, setLocalData } from "../../providers/utils";
import { BlockType } from "../../types";
import style from "./builder.module.css";

const gridSize = GRID_SIZE_INIT;

const EditPage = () => {
  const [businesses, setBusinesses] = useState<BlockType[]>([]);

  const [showElement, setShowElement] = useState(false);

  const [open, setOpen] = useState(false);

  const [currentBlock, setCurrentBlock] = useState<null | BlockType>(null);

  useEffect(() => {
    const data = getLocalData("businesses");

    if (data) {
      setBusinesses(data);
    } else {
      setBusinesses(BLOCKS_INIT_NEW);
    }
  }, []);

  const leftClick = (tileIdx: number, newData: BlockType) => {
    if (!newData.imgId) return;

    setBusinesses((prev) => {
      const newArr = [...prev];
      newArr[tileIdx] = { ...newData };
      return newArr;
    });

    setCurrentBlock((prev) => ({ ...prev, ...newData }));

    handleClickOpen();
  };

  // const rightClick = () => {};

  const showElementsHandler = (val: boolean) => {
    setShowElement(val);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setCurrentBlock(null);
    setOpen(false);
  };

  const setCurrentBlockHandler = (data: BlockType | null) => {
    if (data?.imgId === currentBlock?.imgId) {
      setCurrentBlock(null);
    } else {
      setCurrentBlock(() => data);
    }
  };

  const onSave = (data: Omit<BlockType, "imgId">) => {
    setBusinesses((prev) => {
      const newData = [...prev];
      newData[data.id] = { ...newData[data.id], ...data };

      setLocalData("businesses", newData);

      return newData;
    });
  };

  return (
    <div className={style.content}>
      <TilesLibrary
        selectedTile={currentBlock?.imgId || null}
        showElement={showElement}
        showElementsHandler={showElementsHandler}
        setCurrentBlockHandler={setCurrentBlockHandler}
      />

      <CityBuilder
        gridSize={gridSize}
        businesses={businesses}
        onLeftClick={leftClick}
        // onRightClick={rightClick}
        currentBlock={currentBlock}
        openModal={open}
        handleClose={handleClose}
        onSave={onSave}
      />
    </div>
  );
};

export default EditPage;
