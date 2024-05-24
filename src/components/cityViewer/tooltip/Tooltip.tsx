import { Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import style from './style'

const data = [
  { title: "Personal", value: 20 },
  { title: "Total income", value: "20000UAH" },
];

type TooltipProps = {
  onClose: () => void;
};


const Tooltip = ({ onClose }: TooltipProps) => {
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

      <h3>Pravda</h3>
      <Box sx={style.table}>
        {data.map(({ title, value }) => {
          return (
            <>
              <span>{title}</span>
              <span>{value}</span>
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default Tooltip;
