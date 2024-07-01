import { ResponsiveChoropleth } from "@nivo/geo";
import { data } from "./GeographyChartData";
import { worldCountry } from "./WorldCountry";
import { useTheme } from "@mui/material";
export default function Geography({ isNotDashboard = false }) {
  const theme = useTheme();
  return (
    <ResponsiveChoropleth
      theme={{
        text: {
          fontSize: 12,
          // @ts-ignore
          fill: theme.palette.text.primary,
          outlineWidth: 0,
          outlineColor: "transparent",
        },
        axis: {
          domain: {
            line: {
              // @ts-ignore
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
          },
          legend: {
            text: {
              fontSize: 12,
              // @ts-ignore
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          ticks: {
            line: {
              // @ts-ignore
              stroke: theme.palette.divider,
              strokeWidth: 1,
            },
            text: {
              fontSize: 11,
              // @ts-ignore
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        grid: {
          line: {
            // @ts-ignore
            stroke: theme.palette.divider,
            strokeWidth: 1,
          },
        },
        legends: {
          title: {
            text: {
              fontSize: 11,
              // @ts-ignore
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
          text: {
            fontSize: 12,
            // @ts-ignore
            fill: theme.palette.text.primary,
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          ticks: {
            line: {},
            text: {
              fontSize: 10,
              // @ts-ignore
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
          },
        },
        annotations: {
          text: {
            fontSize: 13,
            // @ts-ignore
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
            // @ts-ignore
            background: theme.palette.background.default,
            // @ts-ignore
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
      data={data}
      features={worldCountry.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionType="equirectangular"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="transparent"
      borderWidth={0.5}
      borderColor="#152538"
      projectionScale={isNotDashboard ? 140 : 150}
      // @ts-ignore

      legends={
        isNotDashboard
          ? []
          : [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -20,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.text.primary,
                itemOpacity: 0.85,
                symbolSize: 18,
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
      }
    />
  );
}
