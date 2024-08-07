import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { columns, rows } from "./ContactInformationData";

export default function ContactsInformation() {
  return (
    <Box sx={{ height: "75vh", width: "95%", margin: "0 auto" }}>
      <DataGrid
        slots={{ toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
      />
    </Box>
  );
}
