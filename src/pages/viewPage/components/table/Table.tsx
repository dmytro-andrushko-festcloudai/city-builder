import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

type ContentTableProps = {
  columns: string[];
  rows: string[][];
};

const ContentTable = ({ columns, rows }: ContentTableProps) => {
  return (
    <Table sx={{}} aria-label="simple table">
      <TableHead>
        <TableRow>
          {columns.map((item, index) => {
            return (
              <TableCell
                key={index}
                sx={{ color: "white", padding: "10px", fontSize: "12px" }}
                align={index === 0 ? "left" : "right"}
              >
                {item}
              </TableCell>
            );
          })}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow
            key={index}
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              color: "white",
            }}
          >
            {row.map((cell, index) => {
              return (
                <TableCell
                  key={index}
                  align={index === 0 ? "left" : "right"}
                  sx={{ color: "white", padding: "10px", fontSize: "12px" }}
                >
                  {cell}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ContentTable;
