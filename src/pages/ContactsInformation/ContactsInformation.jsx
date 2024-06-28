import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Box } from "@mui/material";
import { columns, rows } from "./ContactInformationData";
export default function ContactsInformation() {
  return (
    <Box sx={{ height: 600, width: "95%" }}>
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        // @ts-ignore
        columns={columns}
      />
    </Box>
  );
}
