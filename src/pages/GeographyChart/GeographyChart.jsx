import PageDescription from "../../components/PageDescription/PageDescription";
import Geography from "./Geography";
import { Stack } from "@mui/material";
import { Box, useTheme } from "@mui/material";

export default function GeographyChart({ isNotDashboard = true }) {
  const theme = useTheme();
  return (
    <Stack>
      <PageDescription
        title={"Geography Chart"}
        description={
          "This map showcases the geographical distribution of data across various countries. Each country is color-coded based on a specific range, illustrating the comparative quantities or frequencies of the data points. For instance, Canada is highlighted with a value of 490k, indicating its position within the specified range"
        }
      />
      <Box
        sx={{
          overflow: "hidden",
          height: "70vh",
          width: "98%",
          margin: "0 auto",
          border: `1px solid ${
            Boolean(isNotDashboard) ? theme.palette.text.primary : null
          }`,
          borderRadius: "10px",
        }}
      >
        <Geography />
      </Box>
    </Stack>
  );
}
