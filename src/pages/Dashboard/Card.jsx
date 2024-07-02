import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../../pages/PieChart/Pie";

export default function Card({
  isNotDashboard = false,
  scheme,
  numbers,
  title,
  children,
  percent,
}) {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        overflow: "hidden",
        padding: "10px 25px 10px 5px",
        backgroundColor: theme.palette.background.paper,
        flexGrow: 1,
      }}
      aria-label={`Card: ${title}`}
    >
      <Stack direction={"column"} sx={{ alignItems: "start", gap: "18px" }}>
        <Box>{children}</Box>
        <Typography>{numbers}</Typography>
        <Typography>{title}</Typography>
      </Stack>

      <Stack direction={"column"} sx={{ alignItems: "center" }}>
        <Box sx={{ height: 100, width: 100 }}>
          <Pie scheme={scheme} isNotDashboard={isNotDashboard} />
        </Box>
        <Typography variant="body2">{percent}</Typography>
      </Stack>
    </Paper>
  );
}

