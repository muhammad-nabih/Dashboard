import { DataGrid } from "@mui/x-data-grid";

import { columns, rows } from "./ManageTeamData";
import { Box } from "@mui/material";
export default function ManageTeam() {
  return (
    <Box sx={{ height: 600, width: "100%" }}>
      <DataGrid rows={rows} 
// @ts-ignore
      columns={columns} />
    </Box>
  );
}
