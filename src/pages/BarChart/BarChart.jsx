import { Box, Stack } from "@mui/material";
import PageDescription from "../../components/PageDescription/PageDescription";
import Bar from "./Bar";

export default function BarChart() {
  return (
    <Stack>
      <PageDescription
        title={"Bar Chart"}
        description={
          "This chart presents a comparative analysis of annual salary increments in various countries over the years 2018 to 2024. Each stacked bar represents a country, and the colored segments within the bars denote the salary increments for each year"
        }
      />
      <Box sx={{ height: "70vh" }}>
        <Bar />
      </Box>
    </Stack>
  );
}
