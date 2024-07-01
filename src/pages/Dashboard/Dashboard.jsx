import React from "react";
import { Stack, Typography, useTheme, Box, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import MainSection from "./MainSection";
import Cards from "./Cards";
import LineChart from "../../pages/LineChart/LineChart";
import RecentTransactions from "./RecentTransactions";
import Pie from "../../pages/PieChart/Pie";
import PageDescription from "../../components/PageDescription/PageDescription";
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
          >
            <Line />
          </Paper>
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={4}>
          <Paper sx={{ height: "500px" }}>
            <RecentTransactions />
          </Paper>
        </Grid>
      </Grid>

      {/* Row Three */}
      <Stack direction={"row"} flexWrap={"wrap"} gap={2}>
        <Paper
          sx={{
            height: "500px",
            minWidth: "400px",
            flexGrow: 1,
            marginBottom: "10px",
          }}
        >
          <Geography isNotDashboard />
        </Paper>
        <Paper
          sx={{
            height: "500px",
            minWidth: "360px",
            flexGrow: 1,
            marginBottom: "10px",
          }}
        >
          <Bar />
        </Paper>
        <Paper
          sx={{
            height: "500px",
            minWidth: "400px",
            flexGrow: 1,
            marginBottom: "10px",
          }}
        >
          <Pie isNotDashboard={false} scheme={"nivo"} />
        </Paper>
      </Stack>
    </>
  );
}
