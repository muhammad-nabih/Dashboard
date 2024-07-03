import { DownloadOutlined } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import PageDescription from "../../components/PageDescription/PageDescription";

export default function MainSection() {
  return (
    <Stack
      direction="row"
      sx={{ justifyContent: "space-between", alignItems: "center" }}
    >
      <PageDescription title="Dashboard" description="Welcome to Dashboard" />
      <Button
        variant="contained"
        sx={{ padding: "8px 10px" }}
        startIcon={<DownloadOutlined />}
        aria-label="Download Reports"
      >
        Download Reports
      </Button>
    </Stack>
  );
}
