import { Box, Stack } from "@mui/material";
import Pie from "./Pie";
import PageDescription from "../../components/PageDescription/PageDescription";

export default function PieChart({isNotDashboard=true}) {
  return (
    <Stack>
      <PageDescription
        title={"Pie Chart"}
        description={
          "This chart illustrates the distribution of various programming languages used in a given dataset. Each segment of the pie represents a different programming language, with the size of each segment corresponding to the number of occurrences or usage frequency of that language. The chart highlights the comparative popularity of PHP, Go, Stylus, Ruby, and Rust."
        }
      />

      <Box sx={{ height: "70vh", width: "95%", margin: "auto" }}>
        <Pie scheme={'nivo'}  isNotDashboard={isNotDashboard}/>
      </Box>
    </Stack>
  );
}
