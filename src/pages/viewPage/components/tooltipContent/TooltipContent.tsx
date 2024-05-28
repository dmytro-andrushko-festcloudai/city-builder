import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { businessOptions } from "../../../../constants";
import ContentTable from "../table/Table";
import style from "./style";
import { BlockType, DataTypeValue } from "../../../../types";
import PieChart from "../pieChart/PieChart";

const incomeColumns = ["Дохід грн", "Пон", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];

const incomeRows = [
  ["Ребра", "20000", "12333", "18400", "24400", "25000", "32460", "33000"],
  ["Пиво", "10000", "134", "125", "156", "128", "160", "200"],
  ["Риба", "120", "134", "125", "156", "128", "160", "200"],
];

const billAvrColumns = [
  "Середній рахунок",
  "Пон",
  "Вт",
  "Ср",
  "Чт",
  "Пт",
  "Сб",
  "Нд",
];

const billAvrRows = [
  ["Ранок", "200", "300", "125", "156", "128", "550", "800"],
  ["Обід", "120", "134", "125", "156", "128", "840", "800"],
  ["Вечір", "120", "134", "125", "156", "128", "1300", "1200"],
];

const productionColumns = [
  "Продукція шт",
  "Пон",
  "Вт",
  "Ср",
  "Чт",
  "Пт",
  "Сб",
  "Нд",
];

const productionRows = [
  ["Ребра", "120", "134", "125", "156", "128", "160", "200"],
  ["Пиво", "120", "134", "125", "156", "128", "160", "200"],
  ["Риба", "120", "134", "125", "156", "128", "160", "200"],
];

type TooltipProps = {
  business: BlockType;
  onClose: () => void;
};

function modifyDataForChart(data:string[][]) {
  return data.map((row, index) => {
    return row.reduce(
      (accum, curr, i) => {
        if (i === 0) return { ...accum, label: curr };

        return { ...accum, value: +accum.value + +curr };
      },
      { id: index, value: 0, label: "" }
    );
  });
}

const TooltipContent = ({ onClose, business }: TooltipProps) => {
  const item = businessOptions.find((item) => item.value === business.business);

  const showTables = (viewType: DataTypeValue) => {
    productionColumns;
    if (viewType === "production") {
      return <ContentTable columns={productionColumns} rows={productionRows} />;
    }

    if (viewType === "bill_avr") {
      return <ContentTable columns={billAvrColumns} rows={billAvrRows} />;
    }

    if (viewType === "income") {
      return <ContentTable columns={incomeColumns} rows={incomeRows} />;
    }
  };

  const showCharts = (viewType: DataTypeValue) => {
    productionColumns;
    if (viewType === "production") {
      return <PieChart data={modifyDataForChart(productionRows)} />;
    }

    if (viewType === "bill_avr") {
      return <PieChart data={modifyDataForChart(billAvrRows)} />;
    }

    if (viewType === "income") {
      return <PieChart data={modifyDataForChart(incomeRows)} />;
    }
  };

  return (
    <Box sx={style.tooltip}>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: "-6px",
          top: "-10px",
          color: "white",
        }}
      >
        <CloseIcon fontSize="small" />
      </IconButton>

      <h3>{item?.label}</h3>
      {business.viewType === "table" && business.dataType && showTables(business.dataType)}
      {business.viewType === "chart" && business.dataType && showCharts(business.dataType)}
    </Box>
  );
};

export default TooltipContent;
