
import { Stack, Typography, useTheme, Box, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MainSection from "./MainSection";
import Cards from "./Cards";
import RecentTransactions from "./RecentTransactions";
import Pie from "../../pages/PieChart/Pie";
import Bar from "../../pages/BarChart/Bar";
import Geography from "../../pages/GeographyChart/Geography";
import Line from "../../pages/LineChart/Line";

export default function Dashboard() {
  const theme = useTheme();

  return (
    <>
      {/* Row One */}
      <MainSection />
      <Cards />

      {/* Row Two */}
      <Grid container spacing={1} margin={"10px 0"}>
        <Grid xs={12} sm={12} md={6} lg={8}>
          <Paper
            sx={{ height: "500px", display: "flex", alignItems: "center" }}
            aria-label="Line Chart"
          >
            <Line isNotDashboard={false} />
          </Paper>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={4}>
          <Paper sx={{ height: "500px" }} aria-label="Recent Transactions">
            <RecentTransactions />
          </Paper>
        </Grid>
      </Grid>

      {/* Row Three */}
      <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
        <Paper
          sx={{
            height: "500px",
            minWidth: "250",
            flexGrow: 1,
            marginBottom: "10px",
            padding: 0,
          }}
          aria-label="Geography Chart"
        >
          <Geography isNotDashboard />
        </Paper>

        <Paper
          sx={{
            height: "500px",
            minWidth: "300px",
            flexGrow: 1,
            marginBottom: "10px",
            padding: 0,
          }}
          aria-label="Programmers Salary Bar Chart"
        >
          <Typography
            component={"p"}
            sx={{ padding: "10px 20px" }}
            variant="body2"
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            fontSize={"1.5rem"}
          >
            Programmers Salary
          </Typography>
          <Bar isNotDashboard={false} />
        </Paper>

        <Paper
          sx={{
            height: "500px",
            minWidth: "300px",
            flexGrow: 1,
            marginBottom: "10px",
            padding: 0,
          }}
          aria-label="Campaign Pie Chart"
        >
          <Typography
            component={"p"}
            fontSize={"1.5rem"}
            variant="body2"
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            sx={{ padding: "10px 20px" }}
          >
            Campaign
          </Typography>
          <Pie isNotDashboard={true} showLanguage={false} scheme={"nivo"} />
        </Paper>
      </Stack>
    </>
  );
}
