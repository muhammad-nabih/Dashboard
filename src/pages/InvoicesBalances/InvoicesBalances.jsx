import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box } from "@mui/material";
import { columns, rows } from "./InvoicesBalancesData";
export default function InvoicesBalances() {
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        checkboxSelection
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
