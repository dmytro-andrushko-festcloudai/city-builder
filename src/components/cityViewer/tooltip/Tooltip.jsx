import React from "react";
import style from "./tooltip.module.css";

const data = [
  { title: "Personal", value: 20 },
  { title: "Total income", value: "20000UAH" },
];

const Tooltip = ({ onClose }) => {
  return (
    <div className={style.tooltip}>
      <button className={style.closeBtn} onClick={onClose}>
        x
      </button>
      <h3>Pravda</h3>
      <div className={style.table}>
        {data.map(({ title, value }) => {
          return (
            <>
              <span>{title}</span>
              <span>{value}</span>
            </>
            // <div className={style.row}>
            // </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tooltip;
