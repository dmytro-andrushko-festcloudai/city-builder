import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import Select from "../../../../components/ui/select/Select";
import { BlockType, DataTypeValue } from "../../../../types";
import {
  businessOptions,
  dataTypeOptions,
  viewTypeOptions,
} from "../../../../constants";

type AddBlockModalProps = {
  open: boolean;
  handleClose: () => void;
  onSave: (data: Omit<BlockType, "imgId">) => void;
  currentBlock: BlockType;
};

const AddBlockModal = ({
  open,
  handleClose,
  onSave,
  currentBlock,
}: AddBlockModalProps) => {
  const [business, setBusiness] = useState(currentBlock.business);
  const [dataType, setDataType] = useState(currentBlock.dataType);
  const [viewType, setViewType] = useState(currentBlock.viewType);

  const handleBusinessChange = (event: SelectChangeEvent) => {
    setBusiness(event.target.value);
  };

  const handleDataTypeChange = (event: SelectChangeEvent) => {
    setDataType(event.target.value as DataTypeValue);
  };

  const handleViewTypeChange = (event: SelectChangeEvent) => {
    setViewType(event.target.value);
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "500px",
          },
        },
      }}
    >
      <DialogTitle id="alert-dialog-title">Додати новий бізнес</DialogTitle>
      <DialogContent>
        <Select
          value={business || ''}
          options={businessOptions}
          label="Бізнес одиниця"
          onChange={handleBusinessChange}
        />
        <Select
          value={dataType || ''}
          options={dataTypeOptions}
          label="Тип даних"
          onChange={handleDataTypeChange}
        />
        <Select
          value={viewType || ''}
          options={viewTypeOptions}
          label="Тип відображення"
          onChange={handleViewTypeChange}
        />
      </DialogContent>

      <DialogActions>
        <Button variant="outlined" onClick={handleClose}>
          Скасувати
        </Button>
        <Button
          variant="contained"
          autoFocus
          onClick={() => {
            const { id } = currentBlock;

            onSave({ business, dataType, viewType, id });
            handleClose();
          }}
        >
          Додати
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddBlockModal;
