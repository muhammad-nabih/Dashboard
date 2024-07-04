import { useTheme, Box, Typography } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { chartData } from "./Chartdata";

export default function Bar({ isNotDashboard = true }) {
  const theme = useTheme();
  return (
    <Box
      sx={{ height: 430, margin: "0 auto" }}
      aria-labelledby="bar-chart-title"
    >
      <Typography
        variant="h5"
        component="h2"
        id="bar-chart-title"
        sx={{ display: "none" }}
      >
        Bar Chart
      </Typography>
      <ResponsiveBar
        data={chartData}
        keys={["2018", "2019", "2020", "2021", "2022", "2023", "2024"]}
        indexBy="country"
        margin={{
          top: isNotDashboard ? 40 : 80,
          right: isNotDashboard ? 80 : 10,
          bottom: isNotDashboard ? 80 : 20,
          left: isNotDashboard ? 80 : 60,
        }}
        padding={0.1}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "paired" }}
        borderColor={{
          from: "color",

          modifiers: [["darker", "2.1"]],
        }}
        theme={{
          text: {
            fontSize: 12,
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 12,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 4,
          tickPadding: 3,
          tickRotation: 0,
          legend: "Country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 3,
          tickPadding: 3,
          tickRotation: 0,
          legend: "Salary",
          legendPosition: "middle",
          legendOffset: -43,
        }}
        labelSkipWidth={13}
        labelSkipHeight={15}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.9]],
        }}
        legends={
          isNotDashboard
            ? [
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 190,
                  translateY: -23,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 15,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  itemTextColor: theme.palette.text.primary,
                  symbolSize: 9,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: theme.palette.text.secondary,
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]
            : []
        }
        role="img"
        aria-label="Bar chart showing salary data by country"
      />
    </Box>
  );
}
