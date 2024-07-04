import { DownloadOutlined } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import PageDescription from "../../components/PageDescription/PageDescription";

export default function MainSection() {
  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      gap={2}
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px",
      }}
    >
      <PageDescription title="Dashboard" description="Welcome to Dashboard" />
      <Button
        variant="contained"
        sx={{
          padding: "5px 8px",
          fontSize: { xs: ".5rem", md: ".8rem", lg: "1rem" },
        }}
        startIcon={<DownloadOutlined />}
        aria-label="Download Reports"
      >
        Download Reports
      </Button>
    </Stack>
  );
}
