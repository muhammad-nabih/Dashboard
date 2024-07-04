import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./InvoicesBalancesData";
export default function InvoicesBalances() {
  return (
    <Box sx={{ height: "70vh", width: "90%", margin: "0 auto" }}>
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        checkboxSelection
        rows={rows}
        columns={columns}
      />
    </Box>
  );
}
