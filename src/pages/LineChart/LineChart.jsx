import { Stack } from "@mui/material";
import Line from "./Line";
import PageDescription from "../../components/PageDescription/PageDescription";

export default function LineChart() {
  return (
    <Stack sx={{ overflow: "hidden" }}>
      <PageDescription
        title={"Technology Trend Comparison"}
        description={
          "This line chart compares the prevalence of different programming fields such as Frontend, Backend, Mobile Development, Data Science, and DevOps across various countries. It provides insights into the popularity and market demand for these technologies in different regions."
        }
      />
      <Line />
    </Stack>
  );
}
